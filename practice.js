const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Anuraag:Anuraag5726@cluster0.v0xr09s.mongodb.net/anu"
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
    if (err) throw "err"
  });
const collection=client.db("anu").collection("listofdata")
app.get("/",(req,res)=>{
    
    res.sendFile(__dirname + '/practice.html');
})
app.listen(3010,()=>{
    console.log("connecyed to the server");
})