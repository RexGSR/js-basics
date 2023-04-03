// let container = document.querySelector('.bgColor');
// let btn = document.querySelector('.changeColorBtn');

// btn.addEventListener('click', handleClick);

// let bgColor = "Green";

// function handleClick() {
//     container.style.backgroundColor = bgColor;
//     btn.innerText = bgColor;
//     bgColor = (bgColor == "Red" ? "Green" : "Red");
// }

// handleClick();

let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let counterDisplay = document.querySelector('.counter');

plusBtn.addEventListener('click', handlePlusClick);
minusBtn.addEventListener('click', handleMinusClick);

function handlePlusClick() {
    if (Number(counterDisplay.innerText) === 10) {
        alert('counter can\'t be set to a value bigger than 10');
        return;
    }
    counterDisplay.innerText = ++(counterDisplay.innerText);
}

function handleMinusClick() {
    if (Number(counterDisplay.innerText) === 0) {
        alert('counter can\'t be set to negative values');
        return;
    }
    counterDisplay.innerText = --(counterDisplay.innerText);
}