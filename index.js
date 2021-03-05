const fs = require('fs')
const inquirer = require('inquirer')

const path = require("path")

const renderreadme = require("./utils/generateMarkdown.js")

let Readme =[]

const question= ()=> {inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  }, {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"
      
    ]
  }, 
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?"
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: "
  }
])
  .then(res => {
       console.log(res)
       Readme.push(res)
    if (res.choices) {
        question()
        } else {
      fs.writeFileSync(path.join(__dirname, "README.md"), renderreadme(res))
      }
     })
     .catch(err => console.log(err))
 }

question()
