const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/",(req,res)=>{
    let name=req.query.name;// ?name=input
    res.send(`hello,${name}!welcome to node.js!`);
});

router.get("/gretting",(req,res)=>{
    res.send("hello world!");
});



module.exports = router;