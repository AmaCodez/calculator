const display = document.querySelector('#display');
const btn = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const eval = document.querySelector('.eval');

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
return a / b ;
}

// let firstNumber;
// let operators;
// let secondNumber;

// function operate (operator, num1, num2){
//  firstNumber = num1;
// operators = operator;
// secondNumber = num2
// if (operators == '+') return function add(firstNumber, secondNumber);
// if (operators == '-') return function subtract(firstNumber, secondNumber);
// if (operators == '*') return function multiply(firstNumber, secondNumber);
// if (operators == '/') return function divide(firstNumber, secondNumber);
//}

// let value = display.value;
// function appendToDisplay(input){
// value += input // shows the calc on the screen
// input being the operator and numbers
//}

// function clearDisplay (){
// value += ' ';
//}

// function calculate (){
// value += operate();
//}

// element.addEventListener('click', ) => input
// element.addEventListener('click', ) => clear
// element.addEventListener('click', ) => decimal point (includes)
//stopPropagation();

