const inputElement = document.getElementById("Product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxAllowedChars = inputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingcharacters = maxAllowedChars - enteredTextLength;
  //console.log(remainingcharacters)
  //console.log(remainingCharsElement)
  remainingCharsElement.textContent = remainingcharacters;
  if (remainingCharsElement.textContent < 10) {
    remainingCharsElement.style.color = "red"
  }
  else {
    remainingCharsElement.style.color = "black"
  }

  //remainingCharsElement = remainingcharacters;
  //console.log(remainingCharsElement)

  
}


inputElement.addEventListener("input", updateRemainingCharacters);
