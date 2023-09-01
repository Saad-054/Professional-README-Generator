function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usgae](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description
${data.description}


## Installation
${data.installation}

## Usage
${data.usage}

##License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me through:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
 `;
  }

  module.exports = generateMarkdown;