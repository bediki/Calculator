
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
let eraBtn = document.querySelectorAll('.btn.erase');
let bkspBtn = document.querySelectorAll('.btn.bspc');



// Eventlisteners 


//Erase Button
eraBtn.forEach(button => button.addEventListener('click', () => {
    currentNumDisplay.innerHTML = '0';
    currentNumber = '';
    previousNumber = '';
    operator = undefined;
}));


numBtn.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if(currentNumber == 0){
            currentNumber = e.target.textContent;
        }else{
            currentNumber = currentNumber + e.target.textContent;
        }
        currentNumDisplay.innerHTML = currentNumber;
    })
})


bkspBtn.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        currentNumber = currentNumber.substring(0,currentNumber.length-1);
        console.log(currentNumber);
        currentNumDisplay.innerHTML = currentNumber;
    })
})


optBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        if (previousNumber !== '' && currentNumber !== '') {
            previousNumber = operate(previousNumber, operator, currentNumber); 
            currentNumDisplay.innerHTML = previousNumber;
        } else if (currentNumber !== '') {
            previousNumber = currentNumber;
        }
        currentNumber = '';
        operator = e.target.textContent;
    })
})

//Equals Button
eqBtn.forEach(buttons => {
    buttons.addEventListener('click', (e) => {

        if (previousNumber != '' && currentNumber !== '') {
            previousNumber = operate(previousNumber, operator, currentNumber);
            currentNumDisplay.innerHTML = previousNumber;
        }

    })
})

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
