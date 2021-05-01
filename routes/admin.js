import express from 'express';

import path from'path';
import rootDir from '../helpers/path.js'

const adminRouter = express.Router();
const __dirname = path.resolve()

adminRouter.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"))
})

adminRouter.post("/add-product", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

export {adminRouter}