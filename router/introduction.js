const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/page",(req,res)=>{
    res.send("this is introduciton page");
})
//!!!! 宣告readfilepromise
let readfilepromise=(datapath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(datapath,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            };
        });
    
    });
};

router.get("/data",async(req,res)=>{
    try{
        let data = await readfilepromise("./models/data.json");
        res.send(data);
    }catch{
        res.send("file eror!!!!");
    }

})

//要記得export!!!!!!
module.exports = router;