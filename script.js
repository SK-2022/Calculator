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

//Selects all buttons with the class 'operations'.
let operationButtons = document.querySelectorAll('.operations')
//Selects the div in which the clicked numbers or operations will appear
let display = document.querySelector('.display')
//Selects all the buttons with the class 'number-buttons'
let numberButtons = document.querySelectorAll('.number-buttons')

numberButtons.forEach(function(button) {
    button.addEventListener("click", function(){

        //The following code checks to see if the first number has been assigned to a value.If it hasn't, it will be assigned the value of button.innerText, if not then it will move on to the next conditional statement.
        if( typeof(firstNumber) === 'undefined'){
            firstNumber = button.innerText
            display.innerText+=firstNumber
            //If firstNumber is no longer empty, i.e is now has a value attached to it, then we must assign secondNumber the value of button.innerText
        } else if( typeof(firstNumber) !== 'undefined' ){
            secondNumber = button.innerText
            display.innerText+=secondNumber
        }
    })
})

operationButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        //Checks the operation sign within the innerText of each button and assigns the operation to the operator variable which gets added in the display innerText
        if(button.innerText === '+'){
            operator = button.innerText
            display.innerText+=operator
        } else if(button.innerText === '-'){
            operator = button.innerText
            display.innerText+=operator
        } else if(button.innerText === '/'){
            operator = button.innerText
            display.innerText+=operator
        } else if(button.innerText === '*'){
            operator = button.innerText
            display.innerText+=operator
        } else {
            return
        }
    })
})

// This is what happens when the equal sign button is pushed
function operate(num1, operation, num2,){
    firstNumber = num1
    secondNumber = num2
    operator = operation
    if(operation === '+'){
        add(num1,num2)

    } else if(operation === '-'){
        console.log(subtract(num1,num2))

    } else if(operation === '*'){
        multiply(num1,num2)

    } else if(operation === '/'){
        divide(num1,num2)

    } else{
        return "Error: Invalid Operation"
    }
}

let equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', operate)