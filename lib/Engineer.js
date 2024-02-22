const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(engName, engId, engEmail, engGit) {
    super(engName, engId, engEmail);
    this.name = engName;
    this.id = engId;
    this.email = engEmail;
    this.github = engGit;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
