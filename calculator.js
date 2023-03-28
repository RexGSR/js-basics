//TODO:: 

//! 1) accessing the user input ( input element) 
let userInputOne = document.querySelector('#userInputOne');
// let userInputOne = document.getElementById('#userInputOne');
let userInputTwo = document.querySelector('#userInputTwo');

let addButton = document.querySelector('.add');

// let handleCLick = () => {
//     console.log('first event handler');
// }


//! adding a click event listener
addButton.addEventListener('click', handleCLick);

// addButton.addEventListener('click', function () {
//     console.log('click event'); 
// });

function handleCLick() {
    let inputOneValue = Number(userInputOne.value);
    let inputTwoValue = Number(userInputTwo.value);

    let output = add(inputOneValue, inputTwoValue);
    console.log('output: ', output);
}


function add(a, b) {
    return a + b;
}

console.log(["abcd", "1234"].join("-"));
