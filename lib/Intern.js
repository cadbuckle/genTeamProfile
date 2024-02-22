const Employee = require("./Employee");

class Intern extends Employee {
  constructor(intName, intId, intEmail, intSchool) {
    super(intName, intId, intEmail);
    this.name = intName;
    this.id = intId;
    this.email = intEmail;
    this.school = intSchool;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
