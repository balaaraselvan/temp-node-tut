const http = require('http')

const server =  http.createServer((req,res) =>{
    console.log(req)
    if (req.url === '/')
    {
        res.end('welcome to our new home page with forward slash m')
    }
    
    if (req.url === '/about')
    {
        res.end('welcome to our Aboutpage')
    }
    
    //res.write(req)

res.end('err')

})


server.listen(8080)