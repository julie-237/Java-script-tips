//1. Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button")
function calculateSum() {
    const userNumberInputElement = document.getElementById("User-number")
    const enteredNumber = userNumberInputElement.value;

    let sumUptoNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUptoNumber = sumUptoNumber + i;  
    }
    const outputResultElement = document.getElementById("Calculated-sum")
    outputResultElement.textContent = sumUptoNumber
    outputResultElement.style.display = "block";

}


calculateSumButtonElement.addEventListener("click", calculateSum)
// 2. Highlight links
const highlightLinksButtonElement = document.querySelector("#highlight-links button")

function highlightLinks () {
    const anchorElements = document.querySelectorAll("#highlight-links a")

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add("highlight")
    }
}


highlightLinksButtonElement.addEventListener("click", highlightLinks)
// 3. outputting user information
const userData = {
    firstName: "Foyet",
    lastName: "Blandine",
    age: 26
};
const displayUserButtonElement = document.querySelector("#user-information button")

function displayUserData() {
const outputDataElement = document.getElementById("output-user-data")
for (const propertyName in userData){
    const newUserDataListElement = document.createElement("li")
    const outputText = propertyName.toUpperCase() + ": " + userData[propertyName] 
    newUserDataListElement.textContent = outputText;
    outputDataElement.append(newUserDataListElement);
}

}

displayUserButtonElement.addEventListener("click", displayUserData)