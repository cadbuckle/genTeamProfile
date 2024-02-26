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
const htmlCss = ("./src/style.css");

let employees = [];

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
  switch (empData.empType) {
    case "Manager":
      let man = new Manager();
      man.name = empData.empName;
      man.id = empData.empId;
      man.email = empData.empEmail;
      man.officeNumber = empData.empPhone;
      employees.push(man);
      break;
    case "Engineer":
      let eng = new Engineer();
      eng.name = empData.empName;
      eng.id = empData.empId;
      eng.email = empData.empEmail;
      eng.github = empData.empGit;
      employees.push(eng);
      break;
    case "Intern":
      let int = new Intern();
      int.name = empData.empName;
      int.id = empData.empId;
      int.email = empData.empEmail;
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
  return ret;
}

// 2 - In a loop, Display "menu"
// 2 - "Add an engineer", "Add an Intern", "Build team"
async function runMenu() {
  let ret = await askQuestions(qs.mnuQs, "Menu");
  let val = ret.mnuItm;
  return val;
}

// 3 - Add an engineer prompts for
// 3 - Name, Id, Email, Github name
// 3 - add to employee array
async function getEngineer() {
  let ret = await askQuestions(qs.engQs, "Engineer");
  return ret;
}

// 4 - Add an intern prompts for
// 4 - Name, Id, Email, School
// 4 - add to employee array
async function getIntern() {
  let ret = await askQuestions(qs.intQs, "Intern");
  return ret;
}

// 5 - Build team does
// 5 - Exits the loop
// 5 - call "render" with an array of employee objects
function buildTeam() {
  let ret = render(employees);
  writeToFile(outputPath, ret);
}

// 5 - create the team.html file with the returned HTML from render
function writeToFile(fileName, data) {
  // check if folder exists
  let folderPath = path.dirname(fileName);
  if (!fs.existsSync(folderPath)) {
    // If not then create
    fs.mkdirSync(folderPath);
  }
  // write file to folder.
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("HTML created at "+fileName);
  });

  fs.readFile(htmlCss, "utf8", function(err,data){
    fs.writeFile(folderPath+"/style.css", data, (err) => {
      err ? console.error(err) : console.log("Associated CSS created");
    });
  });
}


async function runFuncs() {
  let ret;
  ret = await getManager();
  ret = "";
  while (ret !== "Build Team"){
    ret = await runMenu();
    switch (ret) {
      case "Add Engineer":
        ret = await getEngineer();   
        break;
      case "Add Intern":
        ret = await getIntern();
        break
      default:
        break;
    }
  }
  buildTeam();
}

runFuncs();
