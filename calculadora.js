function displayNumber(number) {
    var currentValue = document.getElementById('display').value;
    var newValue = currentValue + number;
    document.getElementById('display').value = newValue;
}

var numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        displayNumber(numberButton.textContent);
        console.log(numberButton.textContent)
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
        currentNumber = document.getElementById('display').value;
        currentOperation = operatorButton.textContent;
        clearDisplay();
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
    switch (currentOperation) {
        case '+':
            return parseFloat(currentNumber) + parseFloat(document.getElementById('display').value);
        case '-':
            return parseFloat(currentNumber) - parseFloat(document.getElementById('display').value);
        case '*':
            return parseFloat(currentNumber) * parseFloat(document.getElementById('display').value);
        case '/':
            return parseFloat(currentNumber) / parseFloat(document.getElementById('display').value);
        default:
            return NaN;
    }
}




