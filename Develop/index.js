// TODO: Include packages needed for this application
// Inquirer is used for input
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");
const { File } = require("buffer");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?"
    },
    {
        type: "input",
        name: "tableofcontents",
        message: "What is the table of contents include?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the methods of installing?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of the app?"
    },
    {
        type: "input",
        name: "license",
        message: "What is the license of the application?"
    },
])
.then((answers) => {
    const questions = [answers]
    writeToFile(questions)

});


// TODO: Create a function to write README file
function writeToFile(questions) {

let filecontents = ("This is some of the data" +  "\n This is aswell")
const File = fs.promises.writeFile("Readme.md", filecontents)

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
