"use strict";

//set time
var hour = 12;
var day = "AM";

//morning from 12AM to 9:59AM
if (day == "AM" && (hour < 10 || hour == 12) ){
    console.log("Good morning!");
}

else if ((day == "AM" && (hour >= 10 && hour != 12) ) || ( day == "PM" && hour < 5 )) {
    console.log("Good day!");
}
else{
    console.log("Good evening!");
}