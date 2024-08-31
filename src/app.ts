

// in this ex consider information about employees and number of project 
enum Gender {
  Male = "male",
  Female = "female",
}

let positions: string[] = ["HR", "Accountant", "Software Engineer", "Operation Manager"];

type Employee = {
  readonly id: number,
  name: string,
  position: string,
  salary: number,
  numProject: number,
  email?: string,
  gender: Gender,
}

let HR: Employee = {
  id: 1,
  name: "Samy Ameen",
  position: positions[0], 
  salary: 10000,
  numProject: 3,
  gender: Gender.Male,
}

let softwareEngineer: Employee = {
  id: 2,
  name: "Amer Ali",
  position: positions[2], 
  salary: 15000,
  numProject: 5,
  gender: Gender.Male,
}

console.log(`${HR.name } works as  ${HR.position} and salary is ${HR.salary} number of project work it is ${HR.numProject}`);
document.write(`${softwareEngineer.name } works as  ${softwareEngineer.position} and salary is ${softwareEngineer.salary} number of project work it is ${softwareEngineer.numProject}`);
