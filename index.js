const inquirer = require('inquirer');
const fs = require('fs');

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
             "apache-2.0",
             "mit",
             "gpl-3.0",
             "isc",
             "unlicense"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation for this application:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provider any information on contributing guidelines:",
    },   
    {
        type: "input",
        name: "test",
        message: "Please provide any information for tests:",
    },
    {
        type: "input",
        name: "author",
        message: "Please list all authors of this project:"
    }       
])
.then(response => {
    const fileName = "README.md";
    
    let readMeGen = `# **${response.title}**

## Description 
${response.description}

Link to deployed site [here](${response.link})<br>
![Badge:](https://img.shields.io/badge/License-${response.license}-brightgreen)

## Table of Contents
[1. Description](#Description)<br>
[2. Installation](#Installation)<br>
[3. Usage](#Usage)<br>
[4. License](License)<br>
[5. Contributing](#Contributing)<br>
[6. Tests](#Tests)<br>
[7. Authors](#Authors)<br>
[8. Questions](#Questions)<br>

  
## Installation 
${response.installation}

## Usage 
${response.usage}

## License
This application is covered by the ${response.license} license. For more information on licensing please visit [Choose A License](https://choosealicense.com/licenses/${response.license}).

## Contributing
${response.contributing}

## Tests
${response.test}

## Authors
This application was created by ${response.author}.

## Questions
Follow me on GitHub here: [Github](https://www.github.com/${response.github})<br>
Have additional questions? Contact ${response.name} by email: ${response.email}

`;


    fs.writeFile(fileName,readMeGen, {}, () => console.log("Thank you! You're README file has been generated!"));
    
    
})
.catch(err => {
    console.log("oh no", err);
});

