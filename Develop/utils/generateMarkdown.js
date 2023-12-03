// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function license (licenseValue) {
 switch (licenseValue){
  case (licenseValue = 0):
    type = ""
    return type
  case (licenseValue = 1):
   type = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  return type
  case (licenseValue = 2):
    type = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return type
  case (licenseValue = 3):
    type = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    return type
  case (licenseValue = 4):
    type = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    return type
    default:
      type = ""
      return type
 }}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
module.exports = {license};

