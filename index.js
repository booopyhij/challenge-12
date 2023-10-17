const connection = require('./config/connection')
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require(".");
const cTable = require("console.table");

const departmentPrompt = [
    {
        type: 'input',
        name: 'Department',
        message: 'New department name: '
    },
];

const rolePrompt = [
    {
        type: 'input',
        name: 'Role',
        message: 'New role name: '
    },
    {
        type: 'input',
        name: 'Salary',
        message: 'Role salary: '
    },
    {
        type: 'input',
        name: 'DepartmentID',
        message: 'Department Id code:'
    },
];

const employeePrompt = [
    {
        type: 'input',
        name: 'First name',
        message: 'Employee first name:',
    },
    {
        type: 'input',
        name: 'Lastname',
        message: 'Employee Last name:',
    },
    {
        type: 'input',
        name: 'RoleId',
        message: 'Employee role id:',
    },
    {
        type: 'input',
        name: 'managerid',
        message: 'Employee manager id(if applicable):',
    },
];


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

        Switch (results.choices) {
            case "View employees":
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
}

function viewEmployee() {

}

function addEmployee() {

}

function changeEmployee() {

}

function viewRole() {

}

function addNewRole() {

}

function viewDepartments() {

}

function addNewDepartment() {

}

function quit() {
    
}