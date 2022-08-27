// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Please enter the title for your project:',
        name: 'title'
    },
    {
        message: 'Enter a description for your project:',
        name: 'description'
    },
    {
        message: 'Please list any installation notes or instructions for your project:',
        name: 'installation'
    },
    {
        message: 'Please list any and all Usage information for your project',
        name: 'usage'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
