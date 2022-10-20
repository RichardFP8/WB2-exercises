"use strict";

var studentName = "Robert";
let major = "HIST";
let room;

switch (major) {
    case "CSCI":
    room = "\n Sheppard Hall, Room 314";
        break;
    case "ENG":
        room = "\n Kerl Hall, Room 201";
        break;
    case "MKT":
        room = "\n Westly Hall, Room 310";
        break;
    case "HIST":
        room = "\n Kerl Hall, Room 114";
        break;
    case "BIOL":
        room = "\n Science Bldg, Room 310";
        break;
    default:
        room = "You got none;"
}
console.log(studentName + ", since your major is " + major + " then your advising room is " + room);
