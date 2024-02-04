
//variables
let operator; 
let firstNumber;
let secondNumber; 


function operate(operator, firstNumber, secondNumber){

    switch (operator){

        case '+':
            console.log(add(firstNumber,secondNumber))
            return add(firstNumber,secondNumber);
            break;
        case '-':
            return subtract(firstNumber,secondNumber);
            break;
        case '*':
            return multiply(firstNumber,secondNumber);
            break;
        case '+/':
            return divide(firstNumber,secondNumber);
            break;
    }

}


function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}




operate('+', 20, 10)