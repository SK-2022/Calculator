//Basic operations of the calculator
function add(num1,num2) {
    return parseInt(num1) + parseInt(num2)
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2)
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2)
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2)
}

//These must be strings to allow us to have more than one digit numbers
let firstNumber = ""
let operator = ""
let secondNumber = ""

//Selects all buttons with the class 'operations'.
let operationButtons = document.querySelectorAll('.operations')
//Selects the div in which the clicked numbers or operations will appear
let display = document.querySelector('.display')
//Selects all the buttons with the class 'number-buttons'
let numberButtons = document.querySelectorAll('.number-buttons')
//Selects the clear button
let clearButton = document.querySelector('.clear-button')

numberButtons.forEach(function(button) {
    button.addEventListener("click", function(){

        //If there is no operator, then assign the clicked numbers as the first numbers
        if( operator === ""){
            firstNumber+= button.innerText
            display.innerText = firstNumber
        //If an operator is present then assign the second number
        } else {
            secondNumber+= button.innerText
        //Quotes are for spaces
            display.innerText = firstNumber + " " + operator + " " + secondNumber
        }
    })
})

operationButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        //Checks the operation sign within the innerText of each button and assigns the operation to the operator variable which gets added in the display innerText
        if (operator !== "" && secondNumber !== "") {
            operate(firstNumber, operator, secondNumber)
            operator = button.innerText
            display.innerText = firstNumber + " " + operator
            secondNumber = ""
        } else if(button.innerText === '+'){
            operator = button.innerText
            display.innerText = display.innerText + " " + operator

        } else if(button.innerText === '-'){
            operator = button.innerText
            display.innerText = display.innerText + " " + operator

        } else if(button.innerText === '/'){
            operator = button.innerText
            display.innerText = display.innerText + " " + operator

        } else if(button.innerText === '*'){
            operator = button.innerText
            display.innerText = display.innerText + " " + operator

        } else {
        }
    })
})

// This is what happens when the equal sign button is pushed
function operate(num1, operation, num2){
    num1 = firstNumber
    operation = operator
    num2 = secondNumber
    //Resets the operator and second number when the equal sign is clicked. Also shows the answer on the display as the new first number
    if(operator === '+'){
        display.innerText = add(firstNumber,secondNumber)
        firstNumber = display.innerText
        secondNumber = ""
        operator = ""

    } else if(operator === '-'){
        display.innerText = subtract(firstNumber,secondNumber)
        firstNumber = display.innerText
        secondNumber = ""
        operator = ""

    } else if(operator === '*'){
        display.innerText = multiply(firstNumber,secondNumber)
        firstNumber = display.innerText
        secondNumber = ""
        operator = ""

    } else if(operator === '/'){
        display.innerText = divide(firstNumber,secondNumber)
        firstNumber = display.innerText
        secondNumber = ""
        operator = ""

    } else{
        display.innerText = "Error: Invalid Operation"
    }
}

let equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', operate)

clearButton.addEventListener('click', function(){
    secondNumber = ""
    firstNumber = ""
    operator = ""
    display.innerText = 0
})