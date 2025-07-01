
// document.getElementById("aqib").innerHTML = "Hello Aqib!";
// document.getElementById("aqib").style.color = "blue";
// x = 5;
// y = 10;
// z = x + y;

// document.getElementById("aqib").innerHTML = "Hello Aqib! The sum of x and y is: " + z;

// var a = 10;
// console.log(this.a); // 10 
// document.getElementById("this").innerHTML = "The value of a is: " + this.a;
var a = 10;
var b = 20;
var c = a + b;
var a = 30;
var b = 40;
var c = a + b;
document.getElementById("aqib").innerHTML = "The sum of a and b is: " + c;

//Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
document.getElementById("function").innerHTML = "The product of 4 and 3 is: " + x;

// CONVERT FERNHEIT TO CELSIUS
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(77);
document.getElementById("demo").innerHTML = "The value after changing from fernheit to celsius is : " + value;
document.getElementById("demo").style.color = "green";
document.getElementById("demo").style.fontSize = "20px";
document.getElementById("demo").style.fontWeight = "bold";

