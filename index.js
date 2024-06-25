const display = document.querySelector('#display');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.eval');

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
const input = event.target.textContent;  // shows the calc on the screen input being the operator and numbers
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
       firstNumber = operate (operator, firstNumber, secondNumber);
        display.value = firstNumber;
        secondNumber = '';
    }
    operator = event.target.getAttribute('data-operator');
    display.value += operator;
}


numberBtn.forEach((key) => {
    key.addEventListener('click', appendNumber);
});

operatorBtn.forEach(button => {
    button.addEventListener('click', setOperator);
});

clearBtn.addEventListener('click', () => {
    display.value = '';
}); 

equalBtn.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
        display.value = operate(operator, firstNumber, secondNumber);
        firstNumber = display.value;
        operator = '';
        secondNumber = '';
    } else {
        display.value = 'Error';
    }
});
// element.addEventListener('click', ) => decimal point (includes)
//stopPropagation();

