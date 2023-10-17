// const for questions prompt
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
        name: 'role',
        message: 'New role name: '
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Role salary: '
    },
    {
        type: 'input',
        name: 'departmentID',
        message: 'Department Id code:'
    },
];

const employeePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Employee first name:',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Employee Last name:',
    },
    {
        type: 'input',
        name: 'roleId',
        message: 'Employee role id:',
    },
    {
        type: 'input',
        name: 'managerid',
        message: 'Employee manager id(if applicable):',
    },
];

const employeeChangePrompt = [
    {
        type: 'input',
        name: 'changeEmployee',
        message: 'Select employee to change:',
    },
    {
        type: 'input',
        name: 'changeEmployeeRole',
        message: 'Employee role change(by id):',
    },
];

module.exports = {departmentPrompt, rolePrompt, employeePrompt, employeeChangePrompt };