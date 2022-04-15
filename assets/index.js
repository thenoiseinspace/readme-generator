const inquirer = require('inquirer');
const fs = require('fs');
const generator = require("./generator");


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
      type: 'input',
      message: 'What license governs the usage of your project?',
      name: 'license',
    },
  ])
  .then((response) => {
    console.log(response) 
    //console logging individual part to check
    // console.log(response.username)
  }
  );
