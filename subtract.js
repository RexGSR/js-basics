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