const display = document.querySelector('#display');
const btn = document.querySelectorAll('.operator');
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

let firstNumber;
let operators;
let secondNumber;

function operate (operator, num1, num2){
 firstNumber = num1;
operators = operator;
secondNumber = num2;
if (operators == '+') {
    return add(firstNumber, secondNumber)
} else if (operators == '-') {
    return subtract(firstNumber, secondNumber)
} else if (operators == '*') {
    return multiply(firstNumber, secondNumber)
} else if (operators == '/') {
    return divide(firstNumber, secondNumber)
}
};

function appendToDisplay(event){
const input = event.target.textContent;  // shows the calc on the screen input being the operator and numbers
display.value += input;
}

function calculate (){
display.value = operate();
}

btn.forEach((key) => {
    key.addEventListener('click', appendToDisplay);
});

clearBtn.addEventListener('click', () => {
    display.value = '';
}); 
// element.addEventListener('click', ) => eval
// element.addEventListener('click', ) => decimal point (includes)
//stopPropagation();

