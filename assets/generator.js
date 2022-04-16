//response.main, 

// const arya = {
//     first: "Arya",
//     last: "Stark",
//     origin: "Winterfell",
//     allegiance: "House Stark"
//   };
  
//   const greeting = `My name is ${arya.first}!
//   I am loyal to ${arya.allegiance}.`;
  
//   console.log(greeting); // prints
  // My name is Arya!
  // I am loyal to House Stark.

// const finalTitle = `Project Title:\n ${response.title}`
// const finalDescription = `Project Description:\n ${response.description}`
// const finalInstallation = `Project Installation: \n ${response.installation}`
// const finalUsage = `Project Usage: \n ${response.usage}`
// const finalCredits = `Project Credits: \n ${response.credits}`
// const finalLicense = `Project License: \n ${response.license}`


//////////////////////////////

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

