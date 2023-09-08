const {readFile, writeFile, readFileSync} = require('fs')
readFile('./content/first.txt', 'utf8', (err,result) =>

{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log(result)
    }
    console.log('inside callback function of read')
}
)
writeFile('./content/writeFileAsyncOuttxt','Data written by 10-fs-aync using writeFile aSync routine',{flag :"a"},(err)=>
{
    console.log('inside callback function of write')
}
)