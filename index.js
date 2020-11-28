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
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description for this project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of this project:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select which license you would like to add to your project:",
        choices: [ 
        {
            name: "Apache License 2.0"
        },
        {
            name: "MIT License"
        },
        {
            name: "GNU General Public License v3.0"
        },
        {
            name: "ISC License"
        },
        {
            name: "The Unlicense"
        },
        ]
    },
    {
        type: "input",
        name: "tech",
        message: "Please list which technologies were used during this project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation for this project",
    }    
])
.then(response => {
    const fileName = "README.md";
    
    let readMeGen = `# **${response.title}**
---

## **Table Of Contents**
---
[1. Description](#Description:)
[2. Installation](#Installation:)
[3. Usage](#Usage:)
[4. Credits & License](#Credits:)
[5. Contact & Questions](#Contact:)
[6. Badges and Technology](#Badges)
  
## **Description:** 
${response.description}

## **Installation:** 
${response.installation}

## **Usage:** 
${response.usage}

## **Credits:**
This project was created by ${response.name}. 

## **Contact:**
Please contact here:
[Github](https://www.github.com/${response.github})
Email: ${response.email}

## **Badges:
[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue)](https://www.gnu.org/licenses/gpl-3.0)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue)](https://opensource.org/licenses/ISC)
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue)](http://unlicense.org/)

**Technologies Used:**
${response.tech}

`;


    fs.writeFile(fileName,readMeGen, {}, () => console.log("file written!"));
    
    
})
.catch(err => {
    console.log("oh no", err);
});

