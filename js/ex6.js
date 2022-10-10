

let numberOne = prompt("Enter the first number: ")
let numberTwo = prompt("Enter the second number: ")

let numberOneConverted = Number(numberOne)
let numberTwoConverted = Number(numberTwo)


if (isNaN(numberOne) == true || isNaN(numberTwo) == true || Number.isInteger(numberOneConverted) == false || Number.isInteger(numberTwoConverted) == false) {

    let integerError = `You must enter integers. You entered "${numberOne}" and "${numberTwo}". Try again.`

    let redPart = document.createElement("h4");
    redPart.textContent = "Error! "
    redPart.style.fontWeight = "bolder"
    redPart.style.color = "red"

    let normalPart = document.createElement("span");
    normalPart.textContent = integerError
    normalPart.style.fontWeight = "normal"
    normalPart.style.color = "black"


    let content = document.getElementById("content")
    redPart.appendChild(normalPart)
    content.appendChild(redPart)
}

else {

    let resultPartTwo = numberOneConverted + numberTwoConverted

    let resultPartOne = `${numberOneConverted} + ${numberTwoConverted} = `

    let result = document.createElement("span");
    result.textContent = resultPartTwo
    result.style.fontWeight = "bolder"
    result.style.color = "red"


    let heading = document.createElement("h4");
    heading.textContent = resultPartOne
    heading.style.fontWeight = "normal"


    let content = document.getElementById("content")
    heading.appendChild(result)
    content.appendChild(heading)
}
