document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");
    getDOMElems();
  });

let mobileMenu = ''; 

function getDOMElems(){
    mobileMenu = document.getElementById("mobileMenu");
}

function displayMobileMenu(){
    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "block";
    }
    else {
        mobileMenu.style.display = "none";
    }
}