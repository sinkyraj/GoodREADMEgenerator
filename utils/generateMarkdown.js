// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-orange.svg)
  ## Description
${data.description}
## Table of content
* [Installation](#installation)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
* [Username](#username)
* [Email](#email)
## Installation
${data.installation}
## License
${data.license}
## Tests
${data.tests}
## Questions
${data.questions}
## Username
${data.username}
## Email
${data.email}
  
`;
}

module.exports = generateMarkdown;
