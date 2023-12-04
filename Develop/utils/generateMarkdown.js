// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function license (licenseValue) {
 switch (licenseValue){
  case (licenseValue = 0):
    Ltype = ""
    return Ltype
  case (licenseValue = 1):
   Ltype = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  return Ltype
  case (licenseValue = 2):
    Ltype = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return Ltype
  case (licenseValue = 3):
    Ltype = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    return Ltype
  case (licenseValue = 4):
    Ltype = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    return Ltype
    default:
      Ltype = ""
      return Ltype
 }}




module.exports = {license};

