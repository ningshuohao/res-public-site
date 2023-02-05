const http = require("http")
const fs = require("fs")
const url = require("url")
const util = require("util")
http.createServer((req,res) => {
    filename = "/blog"+url.parse(req.url,true).pathname
    fs.readFile(filename,(err,data) => {
        console.log(`Data is ${data}`)
        if (err){
            console.log(`Error is ${err}`)
            fs.readFile("404.htm",(err,data) => {
                console.log(`Data is ${data}`)
                res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
                res.write(data);
                res.end();
            }) 
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
            res.write(data)
            res.end()
        }
    })
}).listen(870,"127.77.59.83")
console.log(`Server running at 127.77.59.83:870.`)
