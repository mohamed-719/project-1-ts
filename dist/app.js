"use strict";
// in this ex consider information about employees and number of project 
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
let positions = ["HR", "Accountant", "Software Engineer", "Operation Manager"];
let HR = {
    id: 1,
    name: "Samy Ameen",
    position: positions[0],
    salary: 10000,
    numProject: 3,
    gender: Gender.Male,
};
let softwareEngineer = {
    id: 2,
    name: "Amer Ali",
    position: positions[2],
    salary: 15000,
    numProject: 5,
    gender: Gender.Male,
};
console.log(`${HR.name} works as  ${HR.position} and salary is ${HR.salary} number of project work it is ${HR.numProject}`);
document.write(`${softwareEngineer.name} works as  ${softwareEngineer.position} and salary is ${softwareEngineer.salary} number of project work it is ${softwareEngineer.numProject}`);
