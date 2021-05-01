import express from 'express';

const shopRouter =  express.Router()

shopRouter.get("/", (req, res, next) => {
    res.send("<strong> Home shop </strong>");
  });
  

export {shopRouter}