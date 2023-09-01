const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information."
    },
    {
        type: "input",
        name: "contribbuting",
        message: "Enter contribbution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Chose a license for your application",
        choices: [
            "MIT",
            "Apache, 2.0",
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

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions)
    .them(answers =>) {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown");
        console.log("README.md successfully generated!");
    })
    .catch(error => console.error(error));
}

init();