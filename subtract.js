
let UserInputone = document.getElementById('UserInputOne');
let UserinputTwo = document.getElementById('UserInputTwo');
let button = document.getElementById('btn');

let output = document.getElementById('output');


const handleClick = function () {
    let inputOne = UserInputone.value; 
    // let inputTwo = UserinputTwo.innerHTML; 

    // let value = inputOne - inputTwo;
    // console.log("value :: ", value);

    // .textContent (getting and setting text of an element)
    // console.log(output.textContent);
    // output.textContent = value;

    // console.log(output.innerHTML);
    output.innerHTML = `<h1>${inputOne}</h1>`;
}


//element.addEventListener('EVENT_NAME', CALLBACK_FUNCTION);
button.addEventListener('click', handleClick);

const myArr = [[1,2],[3,4],[5,6]];

// console.log(myArr.flat())

// console.log('5' == 5);

let x = 5;
let y = 6;

// console.log(5 === 6 ? "hello" : 'bye');

// if(5 === 6) {
//     console.log("hello");
// } 
// if (7===8) {
//     console.log("hello 2");
// }
// if (7===7) {
//     console.log("hello 3");
// } 
let name = {
    age: 678
};
// name ?? console.log('condition is true')
let somthing = name?.something;
console.log();
