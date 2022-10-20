"use strict";
//define 2 variables
var studentName = "Bob";
var studentMajor = "HIST";

console.log("Student: " + studentName);
//finding the advising room based on major
if (studentMajor == "CSCI"){
    console.log("Major: " + studentMajor + "\nAdvising room: Sheppard Hall, Room 314");
}
else if (studentMajor == "BIOL"){
    console.log("Major: " + studentMajor + "\nAdvising room: Science Bldg, Room 310");
}
else if (studentMajor == "ENG"){
    console.log("Major: " + studentMajor + "\nAdvising room: Kerl Hall, Room 201");
}
else if (studentMajor == "HIST"){
    console.log("Major: " + studentMajor + "\nAdvising room: Kerl Hall, Room 114");
}
else if (studentMajor == "MKT"){
    console.log("Major: " + studentMajor + "\nAdvising room: Westly Hall, Room 310");
}
else {
    console.log(studentName + ", your major: " + studentMajor +  " is not in this database");
}