import express from "express";

import {adminRouter} from "./routes/admin.js";
import {shopRouter} from "./routes/shop.js"

const app = express();

app.use(express.urlencoded({ extended: true }));

//We can match /admin to appear before all routes in the adminRouter
app.use(shopRouter);
app.use("/admin", adminRouter);

//Adding 404 page
app.use((req, res, next) => {
    console.log(req.body)
    res.status(404).send("<h1>404: Page not found</h1>")
})

app.listen(3000);
