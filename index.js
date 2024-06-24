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

function appendToDisplay(event){
const input = event.target.textContent;  // shows the calc on the screen input being the operator and numbers
display.value += input;
}

btn.forEach((key) => {
    key.addEventListener('click', appendToDisplay);
});

clearBtn.addEventListener('click', () => {
    display.value = '';
}); 

equalBtn.addEventListener('click', () => {
    display.value = operate();
} )
// element.addEventListener('click', ) => decimal point (includes)
//stopPropagation();

