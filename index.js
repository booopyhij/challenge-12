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
        name: 'Department ID',
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
        name: 'Last name',
        message: 'Employee Last name:',
    },
    {
        type: 'input',
        name: 'Role Id',
        message: 'Employee role id:',
    },
    {
        type: 'input',
        name: 'manager id',
        message: 'Employee manager id(if applicable):',
    },
];