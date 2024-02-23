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

let employees = [];
let retAns = "";

// async function askQuestions(questions) {
//     await inquirer.prompt(questions).then((answers) => {
//         retAns = answers;
//         return(answers);
//       });
// }

function askQuestions(questions){
    return inquirer.prompt(questions).then((answers) => {
        return answers;
    })
}

// 1 - Prompt for Managers details
// 1 - Name, Employe Id, Email address, Office Number
// 1 - add to employee array
function getManager() {
    retAns = "";
    askQuestions(qs.mgrQs)
        .then((answers) => {
        retAns = answers;
    });
    console.log(retAns);
}


// 2 - In a loop, Display "menu" 
// 2 - "Add an engineer", "Add an Intern", "Build team"
function runMenu() {
    retAns = "";
    askQuestions(qs.mnuQs).then((answers) => {
        retAns = answers;
    });
    console.log(retAns);
}

// 3 - Add an engineer prompts for
// 3 - Name, Id, Email, Github name
// 3 - add to employee array
function getEngineer() {
    retAns = "";
    askQuestions(qs.engQs);
    console.log(retAns);

}


// 4 - Add an intern prompts for
// 4 - Name, Id, Email, School
// 4 - add to employee array
function getIntern() {
    retAns = "";
    askQuestions(qs.intQs);
    console.log(retAns);
}


// 5 - Build team does
// 5 - Exits the loop
// 5 - call "render" with an array of employee objects
// 5 - create the team.html file with the returned HTML from render

function runFuncs() {
    getManager();
    runMenu();
    // getEngineer();
    // getIntern();
}

runFuncs();