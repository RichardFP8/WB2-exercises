// Description: This script tests various numeri conversion techniques
//  Author ME
//starting values
var a = "   101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5   ";

//convert to int
var aInt = parseInt(a);
var bInt = parseInt(b);
var cInt = parseInt(c);
var dInt = parseInt(d);

//convert to float
var aFloat = parseFloat(a);
var bFloat = parseFloat(b);
var cFloat = parseFloat(c);
var dFloat = parseFloat(d);

//convert to number(?)
var aNumber = Number(a);
var bNumber = Number(b);
var cNumber = Number(c);
var dNumber = Number(d);

//convert using unary "+"
var aUnary = +a ;
var bUnary = +b ;
var cUnary = +c ;
var dUnary = +d ;

//display
console.log(a + " in parseInt() is: " + aInt + " and in parseFloat() is: " + aFloat + " and in Number() is " + aNumber + " and finally in unary is: " + aUnary);
console.log(b + " in parseInt() is: " + bInt + " and in parseFloat() is: " + bFloat + " and in Number() is " + bNumber + " and finally in unary is: " + bUnary);
console.log(c + " in parseInt() is: " + cInt + " and in parseFloat() is: " + cFloat + " and in Number() is " + cNumber + " and finally in unary is: " + cUnary);
console.log(d + " in parseInt() is: " + dInt + " and in parseFloat() is: " + dFloat + " and in Number() is " + dNumber + " and finally in unary is: " + dUnary);