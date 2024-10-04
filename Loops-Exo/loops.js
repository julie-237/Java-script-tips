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