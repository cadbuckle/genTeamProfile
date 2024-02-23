const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const qs = require("./src/questions.js");
const Employee = require("./lib/Employee.js");

let employees = [];
let retAns = "";

// function askQuestions(questions){
//     return inquirer.prompt(questions).then((answers) => {
//         return answers;
//     })
// }

function askQuestions(questions, empType) {
  return new Promise((resolve) => {
    inquirer.prompt(questions).then((answers) => {
      if (empType !== "Menu") {
        answers.empType = empType;
        addEmployee(answers);
      }
      resolve(answers);
    });
  });
}

function addEmployee(empData) {
  let emp = new Employee();
  emp.name = empData.empName;
  emp.id = empData.empId;
  emp.email = empData.empEmail;
  switch (empData.empType) {
    case "Manager":
      let man = new Manager();
      man = emp;
      man.officeNumber = empData.empPhone;
      employees.push(man);
      break;
    case "Engineer":
      let eng = new Engineer();
      eng = emp;
      eng.github = empData.empGit;
      employees.push(eng);
      break;
    case "Intern":
      let int = new Intern();
      int = emp;
      int.school = empData.empSchool;
      employees.push(int);
      break;
    default:
      break;
  }
}

// 1 - Prompt for Managers details
// 1 - Name, Employe Id, Email address, Office Number
// 1 - add to employee array
async function getManager() {
  let ret = await askQuestions(qs.mgrQs, "Manager");
  console.log(employees);
}

// 2 - In a loop, Display "menu"
// 2 - "Add an engineer", "Add an Intern", "Build team"
async function runMenu() {
  let ret = await askQuestions(qs.mnuQs, "Menu");
  console.log(ret);
}

// 3 - Add an engineer prompts for
// 3 - Name, Id, Email, Github name
// 3 - add to employee array
async function getEngineer() {
  let ret = await askQuestions(qs.engQs, "Engineer");
  console.log(employees);
}

// 4 - Add an intern prompts for
// 4 - Name, Id, Email, School
// 4 - add to employee array
async function getIntern() {
  let ret = await askQuestions(qs.intQs, "Intern");
  console.log(employees);
}

// 5 - Build team does
// 5 - Exits the loop
// 5 - call "render" with an array of employee objects
// 5 - create the team.html file with the returned HTML from render

async function runFuncs() {
  let ret;
  ret = await getManager();
  ret = await runMenu();
  ret = await getEngineer();
  ret = await getIntern();
}

runFuncs();
