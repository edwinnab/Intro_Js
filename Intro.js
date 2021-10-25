//declaring variables
// one can either use var, let. const keywords
/*
let jordan = 105
console.log(jordan)
const jordans = 105
console.log(jordans)
var jor = 105
console.log(jor);
*/
//using the keyword function
/*
function add(num1, num2){
    return num1+num2;
}
let result = add(10, 30);
console.log(result);

function product(num, nam){
    return num*nam;
}
console.log(product(78,23));
//anonymous and arrow functions
//anonymous as we dont give the functions names
//setTimeout takes two inputs a function and time in millisecond for excution
setTimeout(function(){
    console.log("Hello Edwinna");
}, 1000);
//arrow functions take two inputs//does not use the function keyword
//example
setTimeout(() => console.log("Hello, Monday"), 1000);
*/
//objects
//allows as describe the properties of items
//object literals and functions
//object literals require less code
/*
let cookie = {
    name: "biscuit",
    amount: 5,
    brand: "Nice"
}; //object literals 
//prints out the property of a key
console.log(cookie.brand);
//changes the name of a property
cookie.brand = "nuvita";
console.log(cookie);
*/
//classes
//use the keyword classs and start your class name with a capital letter
/*
class Cookie {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
let myCookie = new Cookie("Bistcuits", "Nice"); //initializes a new object
console.log(myCookie.name);
*/
//conditionals
//if-else statements
//if executes if the condition is true
//else executes if the statement is false
/*
let age = 13;
if(age < 18){
    console.log("You are too young for this!!")
}else{
    console.log("YOu can join the club members")
}

*/
/*
let age = 12;
if(age === 18){
    console.log("Get yourself an ID");
}else if(age > 18){
    console.log("You can join the club members")
}else{
    console.log("You are too young")
}
*/
//complex conditions

//create a car object
/*
let car = {
    name: "Toyota-Hilux",
    brand: "Benz",
    color: "green",
    length: 5,
    capacity: 4
};
if (car.name === "Toyota-Hilux" && car.brand === "Benz" || (car.length < 10)){
    console.log("That is the best model!!!")
}else{
    console.log("You will have to consider buying a new car");
}
*/
//loops
/*
//array of 5 names
let names = ["Edwinna", "Stacy", "Judy", "Catherine", "Mercy"]
//console.log(array);
//for loop for repeting a task several number of times
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//numbers array
let numbers = [1, 234, 5566, 7688]
for(j=0; j < numbers.length; j++){
    console.log(numbers[j]*2);

}
*/
//while loops
//as long as the condition is true the loop will continue
/*

*/
/*
let age = ""
age = prompt("Enter you age: ")
if(age==18){
    console.log("You can get your national Id.")
}else if(age > 18){
    console.log("Welcome to the club.")
}else{
    console.log("You are too young")
}
*/
/*
let password = "mango"
let userGuess = ""
while(userGuess !== password ){
    userGuess = prompt("Please enter password");
}
alert("Login Successful")
*/
//do while loop
//runs at least ones
//factorial of a number
let factorial = 1;
let number = 5;
let original = number;
do{
    factorial = factorial * number;
    number--

} while( number > 0);
console.log( original  +  " " + "factorial is " + factorial);
