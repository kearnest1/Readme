const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {  
        type: 'input',
        name: 'project',
        message: 'What is your projects name?'
      },
      {  
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project:'
      },
      {  
        type: 'input',
        name: 'license',
        message: 'What kind of license does your project have?'
      },
      {  
        type: 'input',
        name: 'command',
        message: 'What command should be ran to run tests?'
      },
      {  
        type: 'input',
        name: 'user',
        message: 'Any important informration for the user to know about the project?'
      }
    ]);
  };

//   promptUser().then(answers => console.log(answers));
promptUser()
  .then(answers => console.log(answers))
  .then(generateMarkdown.js)
  .then(projectAnswers => console.log(projectAnswers));

// // function to write README file
const writeToFile = fileName = data => {
    inquirer.prompt(questions).then((response)); 
    {
        return writeToFile("README.md",generateMarkdown.js(response));
    }
};

// // function to initialize program
const init = () => {
    return inquirer.prompt;

};
// function call to initialize program
init()
// .then(userAnswers => {
//     return generateMarkdown(userAnswers);
// })
// .catch(err => {
//     console.log(err);
// })
;