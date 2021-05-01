import express from  'express';
import http from 'http'

const app = express()

//Middleware 1
app.use((req, res, next) => {
    console.log("in middleware 1")
    next() // Calling next will move to the next middleware, without it, the server will never finish. Cant call next after res.send
})

//Middleware 2
app.use((req, res, next) => {
    console.log("in middleware 2")

    //The default  res headers is text/html
    //We can overwrite it with res.setHeader( "application/json") say, for returning json data
    res.send("by middleware 2")
})

// In the express application source code, this is how the application server is created
const server = http.createServer(app)
server.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

//Given that http.createserver is already called by the app instance, we can just call app.listen
//It is an either way 
app.listen(3000, ()=>{
    console.log("listening on port 3000")
})


