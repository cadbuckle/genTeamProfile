// ALL:  Name, Employe Id, Email address
// MGR:  ALL plus Office Number
// ENG:  ALL plus Github name
// INT:  ALL plus School name
// MNU:  Menu of options to select

const qAll = [
  {
    type: "input",
    name: "empName",
    message: "Enter the employees name",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter the employees Name";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "empId",
    message: "Enter the employee ID",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter the employees ID";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "empEmail",
    message: "Enter the employees email address",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter the email address";
      }
      return true;
    },
  },
];

const qMan = [
  {
    type: "number",
    name: "empPhone",
    message: "Enter the office telephone number",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter the phone number";
      }
      return true;
    },
  },
];

const qEng = [
  {
    type: "input",
    name: "empGit",
    message: "Enter the employess Github name",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter Github name";
      }
      return true;
    },
  },
];

const qInt = [
  {
    type: "input",
    name: "empSchool",
    message: "Enter the employees school",
    default: "",
    validate(value) {
      if (!value) {
        return "Please enter the school";
      }
      return true;
    },
  },
];

const qMnu = [
  {
    type: "rawlist",
    name: "mnuItm",
    message: "Please select next action",
    choices: ["Add Engineer", "Add Intern", "Build Team"],
    waitUserInput: true,
  },
];

exports.mgrQs = qAll.concat(qMan);
exports.engQs = qAll.concat(qEng);
exports.intQs = qAll.concat(qInt);
exports.mnuQs = qMnu;
