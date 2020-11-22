const inquirer = require('inquirer');
const fs = require('fs');

//Questions Needed:
//Project Title
//Description of Project
//Installation
//Usage
//License
//Tests
//Questions
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of this project:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }
])
.then(response => {
    const fileName = "README.md";
    
    let readMeGen = 
    `# ${response.title}

    **Description:** 
    ${response.description}

    **Usage:** 
    ${response.usage}
    **Questions:**
    
    Github Username: ${response.github}
    `;

    fs.writeFile(fileName, readMeGen, (error) =>
    error ? console.log(error) : console.log("Successfully updated README file with user input")
    );
})