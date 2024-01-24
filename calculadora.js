function displayNumber(number) {
    var currentValue = document.getElementById('display').value;
    var newValue = currentValue + number;
    document.getElementById('display').value = newValue;
}

var numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        displayNumber(numberButton.textContent);
    });
});

var resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
    clearDisplay();
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

var operatorButtons = document.querySelectorAll('.operator');
var currentNumber;
var currentOperation;

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if(currentOperation==null) {
            currentNumber = document.getElementById('display').value;
            currentOperation = operatorButton.textContent;
            clearDisplay();
        } else {
            currentNumber = doOperation(currentNumber, currentOperation);
            currentOperation = operatorButton.textContent;
            clearDisplay();
        }
    });
});

var equalButton = document.getElementById('equal');

equalButton.addEventListener('click', function() {
    var result = doOperation(currentNumber, currentOperation);
    document.getElementById('display').value = result;
    currentNumber = null;
    currentOperation = null;
});

function doOperation(currentNumber, currentOperation) {
    var display = document.getElementById('display');
    switch (currentOperation) {
        case '+':
            currentNumber = parseFloat(currentNumber) + parseFloat(display.value);
            break;
        case '-':
            currentNumber = parseFloat(currentNumber) - parseFloat(display.value);
            break;
        case '*':
            currentNumber = parseFloat(currentNumber) * parseFloat(display.value);
            break;
        case '/':
            var divisor = parseFloat(display.value);
            if (divisor === 0) {
                console.error("Cannot divide by zero");
                return NaN; // Or handle the error in a way that fits your application
            }
            currentNumber = parseFloat(currentNumber) / divisor;
            break;
        default:
            return NaN;
    }
    console.log(currentNumber);
    return currentNumber;
}