"use strict";
//inputs
var payRate = 17.30;
var hours = 45;

//get the extra inputs for overtime
var gross = 1;
var extraHours = 0;
var incrRate = 1;

if (hours > 40){
    gross = payRate * 40;                     //getting the  <= 40 hours done already 
    extraHours =  hours - 40;                //finding the extra hours
    incrRate = payRate * 1.5;               //finding the increased rate 
    gross += (extraHours * incrRate);      //adding the increased pay into gross
    console.log("You worked " + hours + " hours and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}
else if (hours == 40) {
    gross += (hours * payRate);
    console.log("You worked exactly 40and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}
else {
    gross += (hours * payRate);
    console.log("You worked " + hours + " hours and get payed $" +  payRate + " per hour. This is your gross pay: $" + gross);
}