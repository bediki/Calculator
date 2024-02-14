
//variables
let operator;
let displaytext = '';
let currentNumber = '';
let previousNumber = '';

// dom elements
let numBtn = document.querySelectorAll('.btn.num');
let optBtn = document.querySelectorAll('.btn.op');
let eqBtn = document.querySelectorAll('.btn.eq');
let currentNumDisplay = document.getElementById('currentNumber');
let eraseBtn = document.querySelectorAll('.btn.erase');
let changeOperatorBtn = document.querySelectorAll('.btn.top.changeOp');


// Eventlisteners
changeOperatorBtn.forEach(button => button.addEventListener('click', () => {

}));



//Erase Button
eraseBtn.forEach(button => button.addEventListener('click', () => {
    resetCalculator();
}));

numBtn.forEach(button => { button.addEventListener('click', (e) => {
    appendNumber(button.textContent);
})
})

//Equals Button
eqBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        performOperation();
    })
})


optBtn.forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent);
    })
})


function handleOperator(op) {
    console.log('c:'+currentNumber);
    console.log('p:'+previousNumber);
    if (previousNumber !== '' && currentNumber !== '') {
        previousNumber = operate(previousNumber, op, currentNumber);
        currentNumDisplay.textContent = formatDecimal(previousNumber);;
    } else if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
    }
    operator = op;
}


function appendNumber(number) {
    if (number == '.' && currentNumber.includes('.')) {
        return;
    }
    currentNumber += number;
    currentNumDisplay.textContent = currentNumber;
}


function performOperation() {
    if (previousNumber != '' && currentNumber !== '') {
        previousNumber = operate(previousNumber, operator, currentNumber);
        currentNumDisplay.textContent = formatDecimal(previousNumber);   
    }
}

// Operation Function
function operate(n1, op, n2) {
    let result;
    switch (op) {
        case '+':
            result = parseFloat(n1) + parseFloat(n2);
            break;
        case '-':
            result = parseFloat(n1) - parseFloat(n2);

            break;
        case '*':
            result = parseFloat(n1) * parseFloat(n2);

            break;
        case '/':
            if (parseFloat(n2) == 0) {
                alert("cannot divide by zero.");
                return n1;
            }
            result = parseFloat(n1) / parseFloat(n2);
            break;

    }
    return result;
}



function formatDecimal(number) {
    // Convert the number to a string with two digits after the decimal point
    return Number(number).toFixed(2);
}



// Function to reset the calculator
function resetCalculator() {
    currentNumDisplay.textContent = '0';
    displayText = '';
    currentNumber = '';
    previousNumber = '';
    operator = undefined;
}