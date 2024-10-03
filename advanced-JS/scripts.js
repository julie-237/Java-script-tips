let firstButton = document.body.children[1].children[4]
console.log(firstButton)

let secondButton = document.getElementById("second-but")
console.log(secondButton)

function consoleClickedButtons(event) {
  console.dir(firstButton) 

}
//firstButton.addEventListener("click", consoleClickedButtons)

function outputSecondButton(event) {
    console.dir(document.body.children[1].children[6])
}

//document.getElementById("second-but").addEventListener("click", outputSecondButton)

function removeParagraphAbove(event) {
    let thirdParagraph = document.getElementById("third-paragraph")
    if (thirdParagraph.textContent.length > 0)
        {
    thirdParagraph.textContent = "" 
    firstButton.textContent = "show paragraph"}
    else {
firstButton.textContent = "Remove paragraph"
thirdParagraph.textContent = "For example, you can make the below button remove this text!"
    }
  }

  firstButton.addEventListener("click", removeParagraphAbove)

function changeThirdParagraphBackgroundToBlue(event) {
    let firstParagraph = document.getElementById("first-paragraph")
    if (firstParagraph.style.backgroundColor != "blue") {
       document.getElementById("second-but").textContent = "Add Blue background Color"
       firstParagraph.style.backgroundColor = "blue"
    }
    else {
        firstParagraph.style.backgroundColor = "transparent"
        document.getElementById("second-but").textContent = "Remove Blue background Color"
    }

    
}

document.getElementById("second-but").addEventListener("click", changeThirdParagraphBackgroundToBlue)
