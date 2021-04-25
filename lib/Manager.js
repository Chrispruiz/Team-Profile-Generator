/* const inquirer = require('inquirer');
const fs = require('fs');


function Manager(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };
  
Manager.prototype.getName = function() {
    inquirer
    .prompt ({
        type: 'input',
        name: 'name',
        message: "Enter Manager's name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter Enter Manager's name!");
                return false;
            };
        }
    });
};

Manager.prototype.getId = function() {
    inquirer
    .prompt ({
        type: 'input',
        name: 'id',
        message: "Enter Manager's Id",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter Enter Manager's Id!");
                return false;
            };
        }
    });
};

module.exports = Manager; */

