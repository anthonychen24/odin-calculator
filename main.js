let previousValue = '';
let currentValue = '';
let operator = '';
let result = '';
let resetDisplay = false;
let justEvaluated = false;

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const operation = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equals = document.querySelector('.equals');

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        if (currentValue.length >= 19) return;
        if (digit.textContent === '.' && currentValue.includes('.')) return;

        if (justEvaluated) {
            // Full reset for new calculation
            previousValue = '';
            currentValue = '';
            operator = '';
            result = '';
            display.textContent = '';
            justEvaluated = false;
        }
        
        if (resetDisplay) {
            display.textContent = '';
            currentValue = '';
            resetDisplay = false;
        }

        display.textContent += digit.textContent;
        currentValue += digit.textContent;
    });
});


operation.forEach(op => {
    op.addEventListener('click', (e) => {
        if (justEvaluated) {
            previousValue = result; // Chain from result
            currentValue = '';
            justEvaluated = false;
        }

        if (currentValue === '' && previousValue !== '') {
            operator = op.textContent; // change operator only
            return;
        }

        if (previousValue && currentValue) {
            result = operate(operator, +previousValue, +currentValue);
            display.textContent = Math.round(result * 10000) / 10000;
            previousValue = result;
            currentValue = '';
        } else {
            previousValue = currentValue;
            currentValue = '';
        }

        operator = op.textContent;
        resetDisplay = true;
    });
});


equals.addEventListener('click', (e) => {
    if (currentValue === '' || previousValue === '') return;

    result = operate(operator, +previousValue, +currentValue);
    display.textContent = Math.round(result * 10000) / 10000;

    justEvaluated = true;
    resetDisplay = true;
});

clearBtn.addEventListener('click', (e) => {
   clearDisplay();
});

function clearDisplay() {
    previousValue = '';
    currentValue = '';
    operator = '';
    result = '';
    justEvaluated = false;
    display.textContent = '';
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
    if (b === 0) {
        return "Error: Can't divide by zero";
    }
    return a / b;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}
