"use strict";
//dec;are this line to hold all interactions after page loads
window.onload = init;

//referencing the button and then storing it; using the event handler to respond with the function
function init(){ 
    const theBtn = document.getElementById("greet");
    theBtn.onclick = onGreetUserBtnClicked;
}

//function called from line 8
//using this to get the input from name <input>; t\
function onGreetUserBtnClicked(){
    const getName = document.getElementById("userName").value ; //found my target: convert it to a value
    let message = `Hello ${getName}, how are you? `; //using some strong interpolation b/c why not?
    alert(message); //display
}