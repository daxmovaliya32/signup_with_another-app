const express = require("express");
const app = express();
const passport = require("passport");
require('dotenv').config();
require("./passport-setupp")

app.use(passport.initialize())
// app.use(passport.session())
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);

app.get("/",(req,res)=>{
    res.render("pages/index.ejs");
})

app.get("/success",(req,res)=>{
    res.render("pages/profile.ejs")
})

app.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/google/callback",passport.authenticate("google",{failureRedirect:'failed'}),(req,res)=>{

    res.redirect("/success");
})

app.listen(process.env.port,()=>{
    console.log(`server running on ${process.env.port}`);
}) 