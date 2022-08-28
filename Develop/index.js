// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: 'Please list any and all Usage information for your project:',
        name: 'usage'
    },
    {
        type: 'list',
        message: "Please choose a license for your project.",
        choices: ['Apache_2.0', 'Boost_1.0', 'MIT'],
        name: 'license'
    },
    {
        message: 'What are the contribution guidelines of your project?',
        name: 'contribution'
    },
    {
        message: 'Enter any test instructions required for this project:',
        name: 'test'
    },
    {
        message: 'Enter your Github username',
        name: 'username'
    },
    {
        message: 'Enter your email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("readme.md", generateMarkdown(data), (err) => (err) ? console.log("Error with generating readme file") : console.log("Readme has been generated"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {writeToFile(data)})
}

// Function call to initialize app
init();
