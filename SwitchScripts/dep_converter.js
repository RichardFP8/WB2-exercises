"use strict";

let code = 5;
let departmentName;

switch(code) {
    case 1:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName = "Human Resources";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relations";
        break;
    default:
        departmentName = "You lost";
}
console.log(departmentName);
//doesn't work every time; especially after departmentName has already been assigned a 