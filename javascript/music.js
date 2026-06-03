document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");

    mobileMenu = document.getElementById("mobileMenu");
    displayInfluencer();
  });
  
  /*function populateInfluencers(){
    // Populate influencers dropdown dynamically from JSON
    let infNameDropdown = document.getElementById("infNameDropdown");
    appendChild("option")
  }*/

  let mobileMenu = ''; 
  
  function displayInfluencer() {
    // Fetch of JSON influencers data
    fetch("bands.json")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched artists data: ", data);
  
        // Get DOM elements by ID
        let infNameSelect = document.getElementById("infNameDropdown");
        let infNameText = document.getElementById("infName");
        let infDescText = document.getElementById("infDesc");
        let bandPhoto = document.getElementById("bandPhoto");
        let infPhotoCaption = document.getElementById("infPhotoCaption");

        // For each to loop through array of data from JSON, checking to see if current array's name matches selected
        // If it does, write contents to DOM, and break
        data.bands.every((element) => {
          if(element.name === infNameSelect.value) {
            infNameText.innerHTML = element.name;
            infDescText.innerHTML = element.description;
            infPhotoCaption.innerHTML = element.name+".";
            bandPhoto.src = element.imgsrc;
            bandPhoto.title = "Source: "+element.websrc;
            bandPhoto.alt = "Source: "+element.websrc;

            console.log("Bands data displayed");
            return false;
          }
          return true;
        });
  
      });
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
  Sources:
  Basic concept and approach referenced from Hanson, Josh. “cs601-Fetch-2/Script.js.” 
  "JavaScript Array every()." W3Schools, https://www.w3schools.com/jsref/jsref_every.asp.

  Source(content):
    "150 TOP TRAVEL INFLUENCERS AND TOP TRAVEL INSTAGRAM ACCOUNTS." Amra & Elma, 2022, https://www.amraandelma.com/100-top-travel-influencers/.
  */