import express from  'express';

const app = express()

//To pass body of the req
app.use(express.urlencoded({extended:true}))

//The first to be run all the time, call next
app.use((req, res, next) => {
    console.log("Greetings middleware")
    next()
})
app.use((req, res, next) =>{
    console.log("Input validation middleware")
    next()
})
app.use("/add-product", (req, res, next) => {
    console.log("A middleware route for adding produt")
    res.send("<form action='/product' method='POST'><input type='text' name='name'/><button type='submit'>send</button></form>")
})
app.use("/product", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})
app.use("/", (req, res, next) => {
    console.log("a middleware route for home")
    res.send("<strong>Home page </strong>")
})

app.listen(3000)