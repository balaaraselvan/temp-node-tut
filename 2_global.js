// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log(`filename ${__filename}`)

console.log(`process is ${process}`)
setInterval(myFunction,1000)

function myFunction()
{console.log(`called from myFunction`)}

//setInterval(() => {
 // console.log('hello world again')
//}, 3)