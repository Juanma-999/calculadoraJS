function displayNumber(number) {
    // Get the current display value
    var currentValue = document.getElementById('display').value;

    // Concatenate the clicked number to the display value
    var newValue = currentValue + number;

    // Update the display with the new value
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

