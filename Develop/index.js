// TODO: Include packages needed for this application
// Inquirer is used for input
const inquirer = require("inquirer");
const fs = require("fs")
const Markdown = require("./utils/generateMarkdown");
const { type } = require("os");


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
        name: "installation",
        message: "What is the method of installing?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of the app?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your name on github? Include contact information if applicable."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What is the license of the application?",
        choices: [
            {name: "No license", value: 0},
            {name: "MIT", value: 1},
            {name: "Apache license 2.0", value: 2},
            {name: "Artistic license 2.0", value: 3},
            {name: "CC0-1.0", value: 4}
        ]
    },
])
.then((answers) => {
    // returns license badge with link.
     licenseValue = answers.license[0];
     Markdown.license(licenseValue);
     writeToFile(answers)
    // returns the title,description,tableofcontents,installing steps, and usage with markdown usage

});

function writeToFile(answers) {
    const title = answers.title
    const description = answers.description
    const installation = answers.installation
    const usage = answers.usage
    const username = answers.username
    let filecontents = ("# " + title +  "\n" + description  + "\n" + "# Installation" + "\n" + installation + "\n" + "# usage" + "\n" + usage + "\n" + "# questions" + "\n" +"https://github.com/" + username + "\n" + Ltype)
    const File = fs.promises.writeFile("GeneratedReadme.md", filecontents)
    
    }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
