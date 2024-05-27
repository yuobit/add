'use strict';

//Типы данных
var number = 5; //число
var string = "Hello!"; //строка
var sym = Symbol(); //символ
var boolean = true; // логический
null; // ноль или ничего не существует 
undefined; // когда объект существует , но значения не имеет
var obj = {}; // 

console.log (4/0);
console.log('string'*9);
let person ={
    name: "Jone",
    age: 25,
    isMarried: false
};

console.log(person["name"]);


let arr= ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[0]);

//alert("Hello")

//let answer = confirm("Are you here&");
//console.log(answer);


//let answer = +prompt("Your 18 old ?", "Yes");

//console.log(typeof(answer18));

//console.log("arr" + " - object");
//console.log(4 + " - object");

let incr = 10,
    decr = 10;


console.log(++incr);
console.log(decr--);

console.log(5%2);

console.log("2" == 2); //идет сравнение по числу 
console.log("2" === 2); // идет сравнение по типам данных

let isChecked = true,
    isClose = false;

console.log(isChecked || isClose); // оператор ИЛИ возвращает тру если хотябы один тру
console.log(isChecked && isClose); // оператор И возвращает тру если оба тру
















