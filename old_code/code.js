let numbers = ["quote one","quote two","quote three","quote four","quote five"];

//! return odd or even index array 
function getOddEven(type, dataLength) {
    // to store indexes
    let indexArray = [];

    for(let i = 0; i < dataLength; i++) {
        if(type == 'even' && i%2 == 0) indexArray.push(i);
        if(type == 'odd' &&  i%2 != 0) indexArray.push(i);
    }
    
    return indexArray;
}

console.log("odd array ::", getOddEven('odd', numbers.length));
console.log("even array ::", getOddEven('even', numbers.length));