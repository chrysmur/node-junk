import express from "express";
import path from "path";
import expressHbs from "express-handlebars";

import { adminRouter } from "./routes/admin.js";
import { shopRouter } from "./routes/shop.js";
import rootDir from "./helpers/path.js";

const app = express();
/*app.engine(
  "hbs",
  expressHbs({ layoutsDir: "views/layouts", defaultLayout: "main-layout", extname:"hbs" })
);
app.set("view engine", "hbs") */
//app.set("view engine", "pug");
app.set('view engine', 'ejs')
app.set("views", "views");

app.use(express.urlencoded({ extended: true })); //parsing the req body
app.use(express.static(path.join(rootDir, "public"))); //loading static content
//We can match /admin to appear before all routes in the adminRouter
app.use(shopRouter);
app.use("/admin", adminRouter);

//Adding 404 page
app.use((req, res, next) => {
  console.log(req.body);
  res.status(404).render("404", { pageTitle: "Not Found" });
});

app.listen(3000);
