import express from "express";

import path from "path";
import rootDir from "../helpers/path.js";

const adminRouter = express.Router();
const __dirname = path.resolve();

const products = []; // We want to share data across calls

adminRouter.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddproduct: true
  });
});

adminRouter.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { adminRouter, products };
