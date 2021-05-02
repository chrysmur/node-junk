import express from 'express';
import path from  'path';

import {products} from './admin.js'
// By default __dirname resolves to the current folder
// since __dirname is only defined in scripts, for REPL, we define it to path resolve to resolve to project root
const __dirname = path.resolve() 

const shopRouter =  express.Router()

shopRouter.get("/", (req, res, next) => {
  console.log(products)
    res.sendFile(path.join(__dirname, 'views', 'shop.html')) // project root then views/shop.html
  });
  

export {shopRouter}