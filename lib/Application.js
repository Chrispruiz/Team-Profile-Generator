const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { start } = require('repl');

//Application questions
class Application {
    constructor() {
        this.employee = [];
        this.prompt = [
            {
                type: 'input',
                name: 'name',
                message: "Enter Team Manager's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Team Manager's name");
                        return false;
                    };
                }    
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Manager's Id",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's Id");
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Manager's Email Address",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's Email Address");
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'office number',
                message: "Enter Manager's Office Number",
                validate: numberInput => {
                    if (numberInput) {
                        return true;
                    } else {
                        console.log("Please enter Manager's Office Number");
                        return false;
                    };
                }
            },
            {
                type: 'list',
                name: 'menu',
                message: "Who would you like to add next?",
                choices: ["Engineer", "Intern", "Exit"],
            },
            {
                type: 'input',
                name: 'newEngineerName',
                message: 'Provide some information about yourself:',
                when: ({ Engineer }) => {
                    if (Engineer) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            {
                type: 'input',
                name: 'newEngineer',
                message: 'Provide some information about yourself:',
                when: ({ Engineer }) => {
                    if (Engineer) {
                        return true;
                    } else {
                        return false;
                    }
                },
                message: "Enter Team Engineer's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter Team Engineer's name");
                        return false;
                    };
                } 
            }   
        ]
    }
}

    


