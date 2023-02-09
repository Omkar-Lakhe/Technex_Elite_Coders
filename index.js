const express = require('express');
const bodyParser = require('body-parser');
// const ejs= require("ejs");
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
// const { Router } = require('express');
app.use(express.json());
// console.log(process.env.API_KEY);

app.use(express.static("public"));
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

mongoose.connect("mongodb+srv://Kamran:vUzQtTvmyj70jI15@cluster0.1svmwsn.mongodb.net/startup");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.post("/signupInvester", function(res, req){
    const newUser = new User({
        email: res.body.email ,
        password: res.body.password,
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("secrets");
            console.log("success");
        }
    })
})

const Router = express.Router();

Router.route('/').post( (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        email, 
        password,
    })
    newUser.save();
});




app.listen(3001, function(){
    console.log("express server");
})


