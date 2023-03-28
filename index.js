//! Data types

//string
let name = "Gaurav";
name = 'hfj';
name = `jdfjnd`;
// string literals { part of string }
let intro = `I am ${name}`;
// console.log(intro);

//boolean
let bool = true;
let falseBool = false;

// number (integer)

let num = 1;
num = 1.00;
num = 100.7893;
// console.log(typeof num);


// array (indexed data)
let arr = [ 1, 2, 3, 4, '12345', false ];

//? accessing data from array
// console.log("array val :: ", arr[0]);

//? inserting value in array
arr.push('jj')
// console.log('arr -- ', arr)

//? removing value in array
arr.pop();
// console.log('arr -- ', arr)
    

// object ( key value pair )
let obj = {
    name: 'gaurav',
    age: 234,
    hobbies: [ "vjk", 'sdfg', 'sdfg' ],
    address: {
        city: 'Shimla',
        state: 'HP',
    }
}

//? inserting value in object
obj.contact = 234567890;
// console.log('object console: ',obj);

//? removing value in object
delete obj.contact;
// console.log('object delete: ',obj);


//? accessing data from objects 
// console.log("object val :: ", obj['address']);
// console.log("object val :: ", obj.address);
// console.log("object val :: ", obj.address.city);

// typeof and instanceof
// console.log(typeof arr);
// console.log(arr instanceof Array);
// console.log(typeof obj);

let myUndefined = 'adfg';
// console.log(myUndefined)

let NullVar = null;

// console.log(typeof myUndefined);
// console.log(Number(myUndefined))


// function

function myFirstFunction (tyu) {
    console.log("last function returned", tyu);
}

function add(a = 1, b = 2) {
    c = a+b;
    return c
    console.log('fddf :: ', 678);
}

// invoking function ( calling a function )
// myFirstFunction('ghfhgd', 'yrur');
// myFirstFunction('123456', [1,2,3]);
// myFirstFunction('123456SDD', [1,2,3]);
myFirstFunction(add(1, 6));
