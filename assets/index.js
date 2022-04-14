const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'Preferred method of communication',
      name: 'comms',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('It did not work')
  );
