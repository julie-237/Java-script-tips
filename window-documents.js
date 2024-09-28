//document.body.children[1].children[0].href = "https://google.com";
//console.dir(document)
document.getElementById("external-link").href = "https://google.com";


// Inserting new HTML element via Javascript
// 1. create a new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com"
newAnchorElement.textContent = "This leads to Google!"
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p")
//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement)
