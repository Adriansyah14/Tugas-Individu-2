 // CLOSURE
function int(){
    let nama = 'Ahmad Adriansyah Hasibuan';
    function tampilkanNama() {
        console.log(nama);
    }
    tampilkanNama();
} // CLOSURE


//IIFE
(function hello() {
    console.log("hi");
}());

(function hello() {
    console.log("hi");
})();

(() => console.log('hi'))();
//IIFE


//First-class function
const foo = function(){ //Menetapkan fungsi pada variabel
    console.log("foobar");
}
foo();  //Meminta untuk menggunakan variabel

function sayHello(){
    return "Hello,";
}
function greeting(helloMessage, name){
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!"); //Hello, JavaScript!

function sayHello(){
    return function(){
        console.log("Hello!");
    }
}
// first-class function


//Higher-order function
const hiFunction = function(){
    return 'Hello!'
};
fiFunction();

function iUseFunction(func){
    return func();
}

function iReturnFunction (){
    return function() {return 42};
}
const myFunc = iReturnFunction();
myFunc();

//Higher-order function


//Execution context
a();
console.log(n);

var n = "Hello World";
function a(){
    console.log("Called a!");
}
//Execution context


//Execution stack
let a = 'Hello World!';
function first() {
    console.log('Inside first function');
    second();
    console.log('Again Inside first function');
}
function second() {
    console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context'); 

//Execution stack


//Event loop

//Event loop


//Callbacks
function halo(nama){
    alert('Halo,${nama}');
}
function tampilPesan(callback){
    const nama = prompt ('Siapa Namamu : ');
    callback(nama);
}
tampilPesan(halo);

function tampilPesan(callback){
    const nama = prompt ('Siapa Namamu : ');
    callback(nama);
}
tampilPesan(nama => alert('Halo,${nama'));

//Callbacks


//Promises
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 3000)
})
//Promises