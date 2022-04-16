//Note: Please see index.html for citations for specific sections
// Packages needed for this application
const inquirer = require('inquirer');
//linking fs here allows us to write to a file
const fs = require('fs');
//This connects the other js file
const generator = require('./generator'); 

// Array of questions for user input
//Why would we put them here though? Why not structure it like activity 19? I've created an empty array to satisfy this requirement but the questions are below. 
const questions = [ ];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

function init() {
    inquirer
  .prompt([ 

    {
      type: 'input',
      message: 'What is your project called?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Briefly describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps are required to install and run your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How will your project be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Did you collaborate with anyone or use any external resources to build this project?',
      name: 'credits',
    },
    {
      type: 'checkbox',
      message: 'What license governs the usage of your project?',
      name: 'license',
      choices: ["MIT", "General Public License v3", "Apache", "Other"]
    },
  

  ])
  .then((response) => {
    console.log(response); 
    fs.writeFile(`generatedREADME.md`, JSON.stringify(response),  () => {
      console.log("README is being generated"); 
    });
  });
}

// Call function to initialize app
init();
