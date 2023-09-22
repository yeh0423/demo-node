// 非同步處理機制
//處理讀取檔案
const fs =require("fs");

// use resdfilesync
/*
let d1 = fs.readFileSync("models/data1.json","utf8");
console.log("d1 success");
let d2 = fs.readFileSync("models/data2.json","utf8");
console.log("d2 success");
let d3 = fs.readFileSync("models/data3.json","utf8");
console.log("d3 success");

console.log(JSON.parse(d1));
console.log(JSON.parse(d2));
console.log(JSON.parse(d3));
*/

/*
//use promise
//1.宣告promise
let readfilepromise = (datapath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(datapath,"utf8",(err,data)=>{
            if(err){
                reject(err);//傳失敗狀況的資料
            }else{
                resolve(JSON.parse(data));//傳成功的data
            };
        });
    });
};
//2.使用promise
readfilepromise("./models/data.json")
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });
*/
//use promise 讀取三個檔案
let output={};
readfilepromise("./models/data1.json")
    .then(data1=>{
        output["data1"]=data1;
        return readfilepromise("./models/data2.json")//return to next .then
    })
    .then(data2=>{
        output["data2"]=data2;
        return readfilepromise("./models/data3.json")
    })
    .then(data3=>{
        output["data3"]=data3;
        console.log(output);
    })  
    .catch(err=>{
        console.log(err);
    })
//promise 特性
let filpcoin=()=>{
    return new Promise((resolve,reject)=>{//promise會回傳resolve or reject
        setTimeout(()=>{
            if(Math.random()>0.1){
                resolve("上課");
            }else{
                reject("翹課");
            }
        } , 1000 );
    });
};
/*
filpcoin()
    .then(result=>{
        console.log("filpcoin .then");
        console.log(result);//.then 接 resolve
    })
    .catch(err=>{
        console.log("filpcoin .catch");
        console.log(err);// .catch 接 reject
    });
*/
//promise.all
//a. 全部完成 進入.then
//b. 只要有一個失敗 就進入.catch區
Promise.all([
    filpcoin(),
    filpcoin(),
    filpcoin()
    ])
    .then(r=>{
        console.log("promise.all  .then");
        console.log(r);
    })
    .catch(err=>{
        console.log("promise.all  .catch");
        console.log(err);
    })

//////////////////////////////////////////////////
//  async/await  //
let filpcoin=()=>{
    return new Promise((resolve,reject)=>{//promise會回傳resolve or reject
        setTimeout(()=>{
            if(Math.random()>0.1){
                resolve("上課");
            }else{
                reject("翹課");
            }
        } , 1000 );
    });
};

//use async /await

let main=async()=>{
    //使用 try/catch 作錯誤處理
    try{
    let r=await function();//轉成同步語言執行-->執行完才會往下走
    console.log("async/await success");
    console.log(r);
    }catch(err){
    console.log(err);  
    };
};

main();

