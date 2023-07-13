const express = require("express");

require('dotenv').config();
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);

app.get("/",(req,res)=>{
    res.render("pages/index");
})

app.listen(process.env.port,()=>{
    console.log(`server running on ${process.env.port}`);
}) 