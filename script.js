//Basic operations of the calculator
function add(num1,num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

//These are the variables that must be stored
let firstNumber
let operator
let secondNumber

// This is what happens when the equal sign button is pushed
function operate(num1, operator, num2,){
    if(operator === '+'){
        add(num1,num2)

    } else if(operator === '-'){
        subtract(num1,num2)

    } else if(operator === '*'){
        multiply(num1,num2)

    } else if(operator === '/'){
        divide(num1,num2)

    } else{
        return "Error: Invalid Operation"
    }
}
let display = document.querySelector('.display')

//Selects all the buttons with the class 'number-buttons'
let numberButtons = document.querySelectorAll('.number-buttons')

numberButtons.forEach(function(button) {
    button.addEventListener("click", function(){

        display.innerText = button.innerText
        //The following code checks to see if the first number has been assigned to a value.If it hasn't, it will be assigned the value of button.innerText, if not then it will move on to the next conditional statement.
        if( typeof(firstNumber) === 'undefined'){
            firstNumber = button.innerText
            //If firstNumber is no longer empty, i.e is now has a value attached to it, then we must assign secondNumber the value of button.innerText
        } else if( typeof(firstNumber) !== 'undefined' ){
            secondNumber = button.innerText
        }
    })
})