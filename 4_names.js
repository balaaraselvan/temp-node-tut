//local
const secret = 'SUPER SECRET'

//shared
const john = 'John'
const peter = 'Peter'

module.exports.namesList = {john, peter}
module.exports.stringName = 'string Name'
const exportedFunctionDefinition = (strVar) => {
    console.log(`Hello there ${strVar} `)
  }
  module.exports.exportedFunction = exportedFunctionDefinition


