const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./dist/css.js")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let finalTeamArray = [];

function start() {
    inquirer.prompt([
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's Employee Id number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an Employee Id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: `What is the Manager's email?`,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: `What is the Manager's office number?`,
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "addMemberData",
            message: "Select the Employee role",
            choices: ["Engineer", "Intern", "Exit"],
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;
                case "Exit":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's Employee Id number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an Employee Id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the Enginner's github username?",
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's Employee Id number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an Employee Id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a school name.');
                    return false;
                }
            }
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("Your HTML file has been added to the Completed folder!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>My Team</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>Phone: ${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./completed/index.html`, htmlArray.join(""), function (err) {
        
    })
}

start()


/* const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employees = [];

function initApp() {
    startHtml();
    addManager();
}

function addManager() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's Employee Id number?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an Employee Id number.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: `What is the Manager's email?`,
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email.');
                return false;
            }
        }
    },])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "School name";
        } else {
            roleInfo = "Office Phone Number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addManager();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./completed/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./completed/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./completed/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initApp(); */

