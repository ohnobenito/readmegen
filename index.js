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

console.log('Hello and welcome to this README generator! You will be asked a few questions which will be compiled into a perfect README file to use')

inquirer
.prompt([
    { 
        type: "input",
        name: "name",
        message: "What is your full name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What would you like to name this project?"
    },
    {
        type: "input",
        name: "link",
        message: "Please enter a link to the deployed site."
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief overview description for this project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of this project:"
    },
    {
        type: "list",
        name: "license",
        message: "Please select which license you would like to add to your project:",
        choices: [ 
             "Apache",
             "MIT",
             "GNU",
             "ISC",
             "Unlicense"
        ]
    },
    {
        type: "input",
        name: "tech",
        message: "Please list which technologies were used for this application:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation for this application:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list all contributers on this application:",
    },   
    {
        type: "input",
        name: "test",
        message: "Please provide any information for tests:",
    }        
])
.then(response => {
    const fileName = "README.md";
    
    let readMeGen = `# **${response.title}**

## Description 
${response.description}

![Badge:](https://img.shields.io/badge/License-${response.license}-brightgreen)

## Table of Contents
[1. Description](#Description)

[2. Installation](#Installation)

[3. Usage](#Usage)

[4. Technologies](#Technologies)

[4. License](License)

[5. Contributing](#Contributing)

[6. Tests](#Tests)

[7. Questions](#Questions) 

  
## Installation 
Link to deployed site [here](${response.link})

${response.installation}

## Usage 
${response.usage}

## Technologies
${response.tech}

## License
This application is covered by the ${response.license} license.

## Contributing
This project was created by ${response.contributing}

## Tests
${response.test}

## Questions
Follow me on GitHub here: [Github](https://www.github.com/${response.github})
Have additional questions? Contact ${response.name} by email: ${response.email}

`;


    fs.writeFile(fileName,readMeGen, {}, () => console.log("Thank you! You're README file has been generated!"));
    
    
})
.catch(err => {
    console.log("oh no", err);
});

