const {readFileSync, writeFileSync, readSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/output.txt',`here is the result ${first} ${second}`,{flag:'a'},(err)=>
{
    console.log('inside callback function')
}
)

