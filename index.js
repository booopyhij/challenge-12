const connection = require('./config/connection')
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require(".");
const cTable = require("console.table");