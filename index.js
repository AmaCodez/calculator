const display = document.querySelector('#display');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.eval');
const decimalBtn = document.querySelector('.decimal');

function add (a,b){
return a + b ;
}

function subtract (a,b){
return a - b ;
}

function multiply (a,b){
return a * b ;
}

function divide (a,b){
    if (b !== 0) {
        return a / b ;
    } else {
        return 'Error';
    }

}

let firstNumber = '';
let operator = '';
let secondNumber = '';
let shouldRestDisplay = false;

function operate (operator, num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator == '+') {
    return add(num1, num2)
} else if (operator == '-') {
    return subtract(num1, num2)
} else if (operator == '*') {
    return multiply(num1, num2)
} else if (operator == '/') {
    return divide(num1, num2)
}
return 'Error';
};

function appendNumber(event){
const input = event.target.textContent; 
if (shouldRestDisplay) {
    display.value = '';
    shouldRestDisplay = false;
}
if (input == '.' && display.value.includes('.')) return;
display.value += input;
if (operator == ''){
    firstNumber += input;
} else {
    secondNumber += input;
}
}

function setOperator(event){
    if (firstNumber == '') return;
    if(operator !== '' && secondNumber !== '') {
       firstNumber = operate (operator, firstNumber, secondNumber).toString();
        display.value = firstNumber;
        secondNumber = '';
    }
    operator = event.target.getAttribute('data-operator');
    // display.value += operator;
    shouldRestDisplay = true;
}


numberBtn.forEach((key) => {
    key.addEventListener('click', appendNumber);
});

operatorBtn.forEach(button => {
    button.addEventListener('click', setOperator);
});

decimalBtn.addEventListener('click', appendNumber);

clearBtn.addEventListener('click', () => {
    display.value = '';
    shouldRestDisplay = false;
}); 

equalBtn.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
        display.value = operate(operator, firstNumber, secondNumber);
        firstNumber = display.value;
        operator = '';
        secondNumber = '';
        shouldRestDisplay = true;
    } else {
        display.value = 'Error';
    }
});

 


