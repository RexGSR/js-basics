let numberInput = document.querySelector("#factorial");
let factorialBT = document.querySelector("#factorialBT");
let factorialDiv = document.querySelector('.factorialValue');

factorialBT.addEventListener('click', handleBTClick);

let myNumber = 'LOC';


function handleBTClick() {
    //! step 1: get input number value
    let number = numberInput.value //? got the value of input

    if(number) {
        //! step 2: convert to int value, check if it's a valid number ::optional
        number = parseInt(number); //? converted the value into an integer :(if possible)
       
        //! step 3: check for zero and one
        if(number === 0 || number === 1) {
            //? zero factorial is always one
            factorialDiv.textContent = 1;  
        } else if (Number.isInteger(number) && (number > 0)) {
        
            //! step 4: get factorial
            let factorial = 1;
            for(let i = number; i > 0; i--) {
                factorial = factorial * i;

                // console.log(`factorial step: ${i} ::`, factorial)
            }
            
            //! step 5: display factorial value
            factorialDiv.textContent = factorial;
        } else {
    
            alert('Please enter a positive numeric value !');
        }
        
    } else {
        alert('Please enter a number !');
    }
}