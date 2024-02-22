const Employee = require("./Employee");

class Manager extends Employee {
  constructor(manName, manId, manEmail, manPhone) {
    super(manName, manId, manEmail);
    this.name = manName;
    this.id = manId;
    this.email = manEmail;
    this.officeNumber = manPhone;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
