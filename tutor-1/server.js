const express = require("express");
const app = express();
const booksrouter=require("./router/books.js");
const aboutrouter=require("./router/about.js");
const hellorouter=require("./router/hello.js");
const introducitonrouter=require("./router/introduction.js");


//api 設計
app.get("/",(req,res)=>{
    res.send("hello");
});

app.use("/introduction",introducitonrouter);
app.use("/hello",hellorouter);

// 將/books裡的request 導入到booksrouter處理
app.use("/books",booksrouter);

// 將/about裡的request 導入到aboutrouter處理
app.use("/about",aboutrouter);

app.listen(8088,()=>{
    console.log("server is running");
})