// constants for importing Node.js modules and generateMarkdown
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions Array whihc will be asked to form input for generated README
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Chose a license for your application:",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "ISC",
            "None"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// function to write data to a file with a specific filename
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function for initialsiing README process
function init() {
    // prompts user with question and handles the answers
    inquirer.prompt(questions)
    .then(answers => {
        // generates the markdown content based on user anwers
        const markdown = generateMarkdown(answers);
        // puts README title in output folder
        writeToFile("./Output/README.md", markdown);
        // notification of successful README file production
        console.log("README.md successfully generated!");
    })
    .catch(error => console.error(error));
}

// init function allows the README generation process to start
init();