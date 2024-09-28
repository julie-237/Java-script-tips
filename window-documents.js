//document.body.children[1].children[0].href = "https://google.com";
//console.dir(document)
document.getElementById("external-link").href = "https://google.com";


// Inserting new HTML element via Javascript
// 1. create a new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com"
newAnchorElement.textContent = " it leads to Google!"
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p")
//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement)


// Removing an HTML element via Javascript
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");
// 2. Remove it
firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element);// for older browsers

// Moving existing elements around
firstParagraph.parentElement.append(firstParagraph)
// .append adds and puts after the other existing elements 
// while .insert adds and puts before the other existing elements 

// InnerHTML
console.log(firstParagraph.innerHTML)
firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>"
