// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//PLEASE NOTE: I am pulling from the links I found on this page: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// const MITbadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
// const GPLbadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
// const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"



// const MITlicense = "(https://opensource.org/licenses/MIT)"
// const GPLlicense = "(https://www.gnu.org/licenses/gpl-3.0)"
// const apacheLicense = "(https://opensource.org/licenses/Apache-2.0)"

// function renderLicenseBadge(license) {
//     if (${response.license} == "MIT") {
//         return MITbadge; 
//     } else if (${response.license} = "General Public License v3") {
//         return GPLbadge; 
//     } else if (${response.license} = "Apache") {
//         return apacheBadge; 
//     } else return " "
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title} \n
  
  ## Description \n
  ${response.description} \n

  ## Table of Contents
  *[Installation](#installation) \n
  *[Usage] (#usage)
  *[Credits] (#credits)
  *[License] (#license)

  ##Installation \n
  ${response.installation} \n

  ##Usage \n
  ${response.usage} \n

  ##Credits \n
  ${response.credits} \n

  ##License \n
  ${response.license}

`;
}

module.exports = generateMarkdown;

