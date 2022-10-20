"use strict";

//only input, which is the year
var year = 1800;

if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 == 0) {
        console.log("Ladies and gentlemen. We got a leap year!");
    }
    else {
        console.log("Not it chief");
    }
}

