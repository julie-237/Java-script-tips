//1. Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");
function calculateSum() {
  const userNumberInputElement = document.getElementById("User-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUptoNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUptoNumber = sumUptoNumber + i;
  }
  const outputResultElement = document.getElementById("Calculated-sum");
  outputResultElement.textContent = sumUptoNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);
// 2. Highlight links
const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);
// 3. outputting user information
const userData = {
  firstName: "Foyet",
  lastName: "Blandine",
  age: 26,
};
const displayUserButtonElement = document.querySelector(
  "#user-information button"
);

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";
  for (const propertyName in userData) {
    const newUserDataListElement = document.createElement("li");
    const outputText =
      propertyName.toUpperCase() + ": " + userData[propertyName];
    newUserDataListElement.textContent = outputText;
    outputDataElement.append(newUserDataListElement);
  }
}

displayUserButtonElement.addEventListener("click", displayUserData);
// 4. Statistics / Roll the dice (using the while loop)
const rollDiceButtonElement = document.querySelector("#Statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;   //Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("User-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  
  while (!hasRolledTargetNumber) {
  const rolledNumber = rollDice();
  //if (rolledNumber == enteredNumber) {
    //hasRolledTargetNumber = true;
  //}
  numberOfRolls++;
  const newRollListItemElement = document.createElement("li");
  const outputText = "Roll " + numberOfRolls + ": " + rolledNumber
  newRollListItemElement.textContent = outputText;
  diceRollsListElement.append(newRollListItemElement)
  hasRolledTargetNumber = rolledNumber == enteredNumber
};
  const outputTotalRollsElement = document.getElementById("output-total-rolls")
  const outputTargetNumberElement = document.getElementById("output-target-number")

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls
};

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
