
//variables
let operator;
let firstNumber;
let secondNumber;
let displaytext='';


// dom elements
let buttonsCont = document.querySelectorAll('.btn');
let display = document.querySelectorAll('#resultDisplay');

// add eventlisteners
buttonsCont.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        
        displaytext =displaytext+ e.target.textContent;
        console.log(displaytext);
        updateDisplay(displaytext);
    })
})


function updateDisplay(displaytext){
    console.log("test")
    display.innerHTML = displaytext;
}


function createButtons() {
    for (let i = 0; i < 20; i++) {
        var operators = {}

    }
}

function operate(operator, firstNumber, secondNumber) {

    switch (operator) {

        case '+':
            console.log(add(firstNumber, secondNumber))
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break;
        case '+/':
            return divide(firstNumber, secondNumber);
            break;

    }

}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}




operate('+', 20, 10)