let previousValue = '';
let currentValue = '';
let operator = '';

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const operation = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const equals = document.querySelector('.equals');

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        display.textContent += digit.textContent;
        currentValue += digit.textContent;
    })
});

operation.forEach(op => {
    op.addEventListener('click', (e) => {
        if (currentValue === '' && previousValue !== '') {
            // Replace operator
            operator = op.textContent;
            return;
        }
        display.textContent += op.textContent;
        operator = op.textContent;
        operatorCalc();
    })
});

equals.addEventListener('click', (e) => {
    if (currentValue === '' || previousValue === '') return;
    display.textContent = operate(operator, +previousValue, +currentValue);
});

clearBtn.addEventListener('click', (e) => {
    previousValue = '';
    currentValue = '';
    operator = '';
    display.textContent = '';
});


function operatorCalc() {
    previousValue = currentValue;
    currentValue = '';
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
        case operator = '+':
            return add(num1, num2);
        case operator = '-':
            return subtract(num1, num2);
        case operator = '*':
            return multiply(num1, num2);
        case operator = '/':
            return divide(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}
