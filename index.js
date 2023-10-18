//imports required to create the backend app
const connection = require('./config/connection')
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require(".");
const cTable = require("console.table");
const {departmentPrompt, rolePrompt, employeePrompt, employeeChangePrompt } = require('./questions')
// {
//     type: "list",
//     name: "choice",
//     message: "What would you like to do?",
//     choices: [
//       {
//         name: "View All Employees",
//         value: "VIEW_EMPLOYEES"
//       },


connection.connect((err) => console.log(err));
init();
function init() {
    inquirer
    .prompt({
        type: "list",
        name: "userChoice",
        choices: [
            "View employees",
            "Add employee",
            "Change employee role",
            "View roles",
            "Add role",
            "View Departments",
            "Add Department",
            "quit",
        ],
        message: "Please choose an option",
    })
    .then( (results) => {

        switch (results.choices) {
            case "View employees":
                console.log("test");
            viewEmployee();
            break;

            case "Add employee":
            addEmployee();
            break;

            case "Change employee role":
            changeEmployee();
            break;

            case "View roles":
            viewRole();
            break;

            case "Add role":
            addNewRole();
            break;

            case "View Departments":
                viewDepartments();
                break;

            case  "Add Department":
                addNewDepartment();
                break;

            default:
                quit();
                   
        }
    });
};

function viewEmployee() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) {
            console.log(err);
            init();
        }
    });
};

function addEmployee() {
    inquirer
    .prompt(employeePrompt)
    .then(function (answer) {
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            
            [   
                answer.changeEmployee,
                answer.changeEmployeeRole,
            ],
            (err, res) => {
                if (err){
                    console.log(err);
                }
                init();
            }
        );
    });
};

function changeEmployee() {
    inquirer
    .prompt(employeeChangePrompt)
    .then(function (answer) {
        connection.query(
            "UPDATE employee SET role_id=? WHERE first_name = ?",
            
            [   
                answer.firstName,
                answer.lastName,
                answer.roleId,
                answer.managerid
            ],
            (err, res) => {
                if (err){
                    console.log(err);
                }
                init();
            }
        );
    });
};

function viewRole() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) {
            console.log(err);
            init();
        }
    });
};

function addNewRole() {
    inquirer
    .prompt(rolePrompt)
    .then(function (answer) {
        connection.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            
            [   
                answer.title,
                answer.salary,
                answer.departmentId,
            ],
            (err, res) => {
                if (err){
                    console.log(err);
                }
                init();
            }
        );
    });

};

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) {
            console.log(err);
            init();
        }
    });
};

function addNewDepartment() {
    inquirer
        .prompt(departmentPrompt)
        .then(function (answer) {
            connection.query(
                "INSERT INTO department (name) VALUES (?)",
                answer.Department,
                (err, res) => {
                    if (err){
                        console.log(err);
                    }
                    init();
                }
            );
        });
};

function quit() {
    connection.end();
    process.exit();

};

