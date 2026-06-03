// Vue component for the whole gallery
Vue.component('gallery', {
    // Template contains image and aside tags with bindings for dynamic attributes
    template: `
        <div>
            <button v-bind:style="buttonStyle" v-on:click="prevImg()">Prev</button>
            <img v-bind:style="{width: width, height: height}" :src="activePath" :alt="activeAlt" height="900" width="601"/>
            <!--<aside class="caption" :value="activeDesc"></aside>-->
            <button v-bind:style="buttonStyle" v-on:click="nextImg()">Next</button>
        </div>
    `,
    // All applicable data for the gallery navigation
    data: function () {
        return {
            activePath: 'https://m.media-amazon.com/images/I/411Efnlq0jL.jpg',
            activeAlt: 'Radiant Black vol. 1',
            activeDesc: 'Cover of Radiant Black vol. 1 by Higgins, Costa, Carey',
            // slideIndex starts at 1, so that the first cycle progresses to the next slide
            slideIndex: 0,
            images: [
                {
                    path: 'https://m.media-amazon.com/images/I/411Efnlq0jL.jpg',
                    alt: 'Radiant Black vol. 1',
                    desc: 'Cover of Radiant Black vol. 1 by Higgins, Costa, Carey'
                }, 
                {
                    path: 'https://m.media-amazon.com/images/I/415BscgwFqL.jpg',
                    alt: 'The Old Guard vol. 1',
                    desc: 'Cover of The Old Guard vol. 1 by Rucka, Fernandez, Miwa, Wynne'
                },
                {
                    path: 'https://cdn.imagecomics.com/assets/i/releases/20061/god-country-1_1759a9ae2d.jpg',
                    alt: 'God Country',
                    desc: 'Cover of God Country by Cates, Shaw, Wordie, Hill'
                },
                {
                    path: 'https://m.media-amazon.com/images/I/51fWkU3GdhL.jpg',
                    alt: 'Reborn',
                    desc: 'Cover of Reborn by Millar, Capullo'
                }
            ],
            //Image dimensions
            width: '40%',
            height: '40%',
            //Button styles
            buttonStyle: {
                'border-radius':'10px',
                'border-color': '#0045db',
                'color': '#0045db',
                'padding': '5px'
            }
            
        };
    },
    methods: {
        nextImg: 
            function(){
                if(this.slideIndex<3) {this.slideIndex++;}
                this.activePath = this.images[this.slideIndex].path;
                this.activeAlt = this.images[this.slideIndex].alt;
                this.activeDesc = this.images[this.slideIndex].desc;
            },
        prevImg:
            function(){
                if(this.slideIndex>0) {this.slideIndex--;}
                this.activePath = this.images[this.slideIndex].path;
                this.activeAlt = this.images[this.slideIndex].alt;
                this.activeDesc = this.images[this.slideIndex].desc;
            }
    },
});
// Creating Vue instance for gallery
var app = new Vue({
    el: '#vue-novelGallery',
});

/*
Sources:
Basic concept and approach referenced from Hanson, Josh. “Vue-CS601-Example1/vue-example-1.js.”

Sources (Images):
    Fong, Jessica. Brink Literacy Project. Cover illustration. "Radiant Black", by Kyle Higgins, Marcelo Costa, et. al. 2021. Front Cover.
    Fernandez, Leandro. Image Comics, Inc. Cover illustration. "The Old Guard", by Greg Rucka, Leandro Fernandez, et. al. 2020. Front Cover.
    Shaw, Geoff, et. al. Image Comics, Inc. Cover Illustration. "God Country", by Donny Cates, Geoff Shaw, et. al. 2017. Front Cover.
    Capullo, Greg, et. al. Image Comics, Inc. Cover Illustration. "Reborn", by Mark Millar and Greg Capullo. 2019. Front Cover.
*/