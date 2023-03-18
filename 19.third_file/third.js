// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js
const webtech=require('./webtechs')
const countries=require('./countries')
console.log(webtech)
console.log(countries[0])
console.log(Array.isArray(webtech))

console.log(Object.keys(webtech)[0])

const join=Object.values(webtech)[0].concat(Object.values(countries)[0])
console.log(join)