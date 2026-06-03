document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");
    getDOMElems();
  });

let artworks = "";
let mobileMenu = ''; 


function getDOMElems(){
    artworks = document.getElementsByClassName("artgalleryphoto");
    mobileMenu = document.getElementById("mobileMenu");

}

function highlightDesc(artwork){
    for(let i=0; i<artworks.length; i++){
        let description = document.getElementById("descItem0"+(i+1).toString())

        if(artworks[i] === artwork){
            description.style.backgroundColor = "#f8f8ff";
            description.style.color = "#1a1a1a";
            description.scrollIntoView({behavior: 'smooth'});
        }
        else {
            description.style.backgroundColor = "#1a1a1a";
            description.style.color = "#f8f8ff";
        }
    }
}

function displayMobileMenu(){
    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "block";
    }
    else {
        mobileMenu.style.display = "none";
    }
}


/*
Source:
“Object.prototype.toString().” MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
"Scroll to Specific Element in JavaScript." DelftStack, 2 October, 2021, https://www.delftstack.com/howto/javascript/scroll-to-element-in-javascript/
*/