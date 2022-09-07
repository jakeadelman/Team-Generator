class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }
  getId() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(github) {
    super();
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

export { Intern, Engineer, Manager, Employee };
