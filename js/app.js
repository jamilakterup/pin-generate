function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}



document.getElementById('Pin-generate').addEventListener('click', function () {

    const showPinNumber = document.getElementById('pin-show');
    showPinNumber.value = getPin();

    const number = document.getElementById('set-number');
    number.value = '';
})



// calculator added..............................................

document.getElementById('calculator').addEventListener('click', function (event) {
    const typeNumber = event.target.innerText;
    const number = document.getElementById('set-number');
    const prevNumber = number.value;


    if (isNaN(typeNumber)) {
        if (typeNumber === 'C') {
            number.value = '';
        } else if (typeNumber === '<') {
            const digits = prevNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            number.value = remainingDigits;
        }
    } else {
        const newNumber = prevNumber + typeNumber;
        number.value = newNumber;
    }
})



document.getElementById('submit-btn').addEventListener('click', function () {
    const displayField = document.getElementById('pin-show');
    const displayFieldString = displayField.value;

    const inputField = document.getElementById('set-number');
    const inputFieldString = inputField.value;


    const success = document.getElementById('pin-success');
    const loser = document.getElementById('lose');


    if (displayFieldString === inputFieldString) {
        success.style.display = "block";
        loser.style.display = "none";
    } else {
        loser.style.display = "block";
        success.style.display = "none";
    }
})

