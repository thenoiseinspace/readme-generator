const inquirer = require('inquirer');
//linking fs here allows us to write to a file
const fs = require('fs');
//imports the other js file to generate the page
const generator = require("./generator");

//prompting user for answers
//this is based on activity 19
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

    //it's breaking--is this a scopiing problem? 
  }
  );

  //Making the write to file in this file but grabbing data from generator file
  //generator page is a bunch of functions that have template literals

   //This section comes from the Node documentation 

const content = {
  finalTitle, finalDescription, finalInstallation, finalUsage, finalCredits
}; 

//this generates a folder called Output and a file called generated-readme. It prints the content to the readme and puts that file in the folder. 
 fs.writeFile('/Output/generated-readme.md', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})


