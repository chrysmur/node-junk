import express from 'express';

const adminRouter = express.Router();

adminRouter.get("/add-product", (req, res, next) => {
    res.send(
        "<form action='/product' method='POST'> \
            <input type='text' name='name'/>    \
            <button type='submit'>send</button> \
        </form>")
})

adminRouter.post("/product", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

export {adminRouter}