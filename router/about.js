const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("/about");
});

router.get("/test",(req,res)=>{
    let name=req.query.name;
    res.send(`/about/test, hello ${name}`);
});

module.exports = router;