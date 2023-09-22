//建立router
const express = require("express");
const router = express.Router();//產生router物件
const fs = require("fs");


// /books
router.get("/",(req,res)=>{
    res.send("/books");
});


// /books/page
router.get("/page",(req,res)=>{
    res.send("/books/page");
});
//
router.get("/data",(req,res)=>{
    fs.readFile("data.json","utf8",(err,data)=>{
        console.log(data);
        console.log(typeof data);//檢查資料型別

        console.log("------");

        let result = JSON.parse(data) //轉成json(object)資料型別
        console.log(result);
        console.log(typeof result);

        res.json(result);//回傳 json資料到前端

    });
});
//先宣告readfilepromise函式
let readfilepromise=(datapath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(datapath,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(JSON.parse(data));
            };
        });
    });
};

router.get("/multi-data-promise",(req,res)=>{
    let result={};
    readfilepromise("./models/data1.json")
    .then(data1=>{
        result["data1"]=data1;
        return readfilepromise("./models/data2.json");
    })
    .then(data2=>{
        result["data2"]=data2;
        return readfilepromise("./models/data3.json");
    })
    .then(data3=>{
        result["data3"]=data3;
        res.json(result);
    })
    .catch(err=>{
        res.send("file error!!");
    });
});

// actually often use this 
router.get("/multi-data-async",async(req,res)=>{
    try{
        let result={};
        let data1=await readfilepromise("./models/data1.json");
        let data2=await readfilepromise("./models/data2.json");
        let data3=await readfilepromise("./models/data3.json");
        result["data1"]=data1;
        result["data2"]=data2;
        result["data3"]=data3;
        res.json(result);
    }catch{
        res.send("file eror!!!!");
    }

});

//輸出router
module.exports = router;