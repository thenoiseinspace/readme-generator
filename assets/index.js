//Note: Please see index.html for citations for specific sections
// Packages needed for this application
const inquirer = require('inquirer');
//linking fs here allows us to write to a file
const fs = require('fs');
//This connects the other js file
const generator = require('./generator'); 

// Array of questions for user input
const questions = [ ];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {

  fs.writeFile(fileName, content, err => {
    if (err) {
      console.error(err)
      return
    }
  //file written successfully
    })
}

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
      type: 'input',
      message: 'What license governs the usage of your project?',
      name: 'license',
    },
  

  ])
  .then((response) => 
    console.log(response) 
      ? console.log('Success!')
      : console.log('It is broken!')
  );
}


//     writeToFile(`${response.title}.md`);
//   );
// }

// Call function to initialize app
init();
