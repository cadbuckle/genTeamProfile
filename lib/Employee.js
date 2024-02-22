// TODO: Write code to define and export the Employee class
function Employee(empName, empId, empEmail) {
    this.name = empName;
    this.id = empId;
    this.email = empEmail;
}

Employee.prototype.getName = function() {
    return this.name;
}
Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

module.exports = Employee;