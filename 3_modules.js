//Demo of require & module.exports
const names = require('./4_names')
//const stringNameRequire = require('./4_names_string.js')
console.log(names)
names.exportedFunction(names.stringName)
names.exportedFunction(names.namesList.john)
//console.log(`from 3_modules requireStringName ${stringNameRequire}`)
//const sayHi = require('./5_utils')
//const sayHi2 = require('./5_utils');
//sayHi2(names.john)
