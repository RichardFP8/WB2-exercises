"use strict";
//testing range
var a = 78;
var b = 350;
var c = 234;

//find the max
if (a > b && a > c){
    console.log(a + " wins it all!");
}
else if (b > a && b > c){
    console.log(b + " wins it all!");
}
else if (c > b && c > a){
    console.log(c + " wins it all!");
}
else{
    console.log("What else?...");
}

// find the min 
if (a < b && a < c){
    console.log(a + " is trying");
}

else if (b < a && b < c){
    console.log(b + " is trying");
}
else if (c < b && c < b){
    console.log(c + " is trying");
}
else{
    console.log("What else?...");
}