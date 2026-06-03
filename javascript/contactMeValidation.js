// Waiting for document to load
let domReadyState = document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Document-object-model has loaded");
    getDOMElems();
});
/* Functional concept reference: (MDN Web Docs) */

var submitBtn;
var fNameEntry;
var lNameEntry;

// Assigning variables applicable DOM items
function getDOMElems(){
    submitBtn = document.getElementsByName("submitBtn");
    fNameEntry = document.getElementById("firstName");
    fNameError = document.getElementById("fnError");
    lNameEntry = document.getElementById("lastName");
    lNameError = document.getElementById("lnError");
    emailAddress = document.getElementById("emailAddress");
    emailError = document.getElementById("emailError");
    confEmailAddress = document.getElementById("confEmailAddress");
    confEmailError = document.getElementById("confEmailError");
    phoneNum = document.getElementById("phoneNum");
    phoneNumError = document.getElementById("phoneNumError");
    zipCode = document.getElementById("zip");
    zipError = document.getElementById("zipError");

    mobileMenu = document.getElementById("mobileMenu");
}


function validateEntries () {
    let isValid = true;
    let validationResults = [];
    validationResults[0] = isNameFormatValid(fNameError, fNameEntry.value);
    validationResults[1] = isNameFormatValid(lNameError, lNameEntry.value);
    validationResults[2] = isEmailFormatValid(emailError, emailAddress.value);
    validationResults[3] = isEmailFormatValid(confEmailError, confEmailAddress.value);
    validationResults[4] = isPhoneFormatValid(phoneNumError, phoneNum.value);
    validationResults[5] = isZipFormatValid(zipError, zipCode.value);


    for(let i=0; i<validationResults.length; i++){
        if(validationResults[i] === false)
            isValid = false;
    }
    console.log(isValid);

    if(isValid) {alert("Submission functionality yet to be implemented!");}
    
    return isValid;
}

// Constant for name format regex
const userNameFormat = /^[A-Za-z0-9]+$/g;
// Verifies that the name's format is valid
function isNameFormatValid(nameError, nameValue) {
    if(!nameValue.match(userNameFormat)) {
        nameError.style.display = "block";
        return false;
    }
    else {
        nameError.style.display = "none";
        return true;
    }
}

// Constant for email format regex
const emailFormat = /^[A-Za-z0-9.\-_]+@[A-Za-z0-9\-_]+\.[a-z]+$/g;
// Verifies that the email address's format is valid
function isEmailFormatValid(emailError, emailValue) {
    if(!emailValue.match(emailFormat)) {
        emailError.style.display = "block";
        return false;
    }
    else {
        emailError.style.display = "none";
        return true;
    }
}

// Constant for phone format regex
const phoneFormat = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/g;
// Verifies that the phone's format is valid
function isPhoneFormatValid(phoneError, phoneValue) {
    if(!phoneValue.match(phoneFormat)) {
        phoneError.style.display = "block";
        return false;
    }
    else {
        phoneError.style.display = "none";
        return true;
    }
}

// Constant for phone format regex
const zipFormat = /^[0-9]{5}$/g;
// Verifies that the phone's format is valid
function isZipFormatValid(zipError, zipValue) {
    if(!zipValue.match(zipFormat)) {
        zipError.style.display = "block";
        return false;
    }
    else {
        zipError.style.display = "none";
        return true;
    }
}

// Functionality for mobile menu link
let mobileMenu = ''; 

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
“Window: DOMContentLoaded Event - Web Apis: MDN.” Web APIs | MDN, https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event. 
*/
