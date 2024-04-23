// Basic Import
const express = require ('express');

const app = new express();

const router = require('./src/Route/api');

//const bodyParser = require('body-parser');
const path = require('path');


//Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const  mongoose = require ('mongoose');
//const {router} = require("express/lib/application");


//Security Middleware Implement
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

const limiter = rateLimit({windowMs:15*60*100,max:3000});
app.use(limiter);


// Mongo Db Database Connection in Atlas start
let URI="mongodb+srv://<username>:<password>@cluster0.vohntst.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0";

let OPTION ={user:'crud', pass:'crud', autoIndex:true}
mongoose.connect(URI, OPTION).then(() => {
    console.log("Database Connection Success")
}).catch((err)=>{
    console.log(err)
})

//Database Connection in local database start
// let URL="mongodb://localhost:27017/crud"
// let OPTION= {user:"",pass:"",autoIndex:true}
// mongoose.connect(URL,OPTION).then(()=>{
//     console.log("Database Connection Success");

// }).catch((err)=>{

//     console.log(err);
// })

app.set('etag', false);


//Managing Backend API routing
app.use("/api",router);

// Managing Front end routing and Tagging with backend with dist for deployment purpose
app.use(express.static('client/dist'));
app.get("*",function (req,res){
    req.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

module.exports = app;

