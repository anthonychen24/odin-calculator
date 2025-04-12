let currentInput = '';
let nextInput = '';
let operator = '';

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const digits = document.querySelectorAll('.digits');
    const operation = document.querySelectorAll('.operator');
    const clearBtn = document.querySelector('.clear');
    const equals = document.querySelector('.equals');

    digits.forEach(digit => {
        digit.addEventListener('click', (e) => {
            limitDigits(digit.textContent);
            display.textContent = currentInput;
        })
    });

    operation.forEach(button => {
        button.addEventListener('click', (e) => {
            display.textContent += button.textContent;
            operator = button.textContent;
        })
    })

    equals.addEventListener('click', (e) => {
        operate(operator, currentInput, nextInput);
    })

    clearBtn.addEventListener('click', (e) => {
        currentInput = '';
        nextInput = '';
        operator = '';
        display.textContent = '';
    })
})

function limitDigits(num) {
    if (currentInput.length <= 15){
        currentInput += num;
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
    if (b === 0) {
        return "Error: Can't divide by zero";
    }
    return a / b;
}

// let num1;
// let num2;
// let operator;

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
