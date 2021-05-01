import express from "express";
import path from 'path'

import {adminRouter} from "./routes/admin.js";
import {shopRouter} from "./routes/shop.js"
import rootDir from './helpers/path.js'

const app = express();


app.use(express.urlencoded({ extended: true })); //parsing the req body
app.use(express.static(path.join(rootDir, "public"))) //loading static content
//We can match /admin to appear before all routes in the adminRouter
app.use(shopRouter);
app.use("/admin", adminRouter);

//Adding 404 page
app.use((req, res, next) => {
    console.log(req.body)
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3000);
