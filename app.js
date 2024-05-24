const express = require('express');
const fs = require('fs');
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Anuraag:Anuraag@cluster0.v0xr09s.mongodb.net/anu";
const app = express();
app.set('view engine','ejs');
const dataFilePath = "C:/Users/Sankhar/Downloads/data.json"; // the file path to your data file
const client = new MongoClient(uri,{useNewUrlParser:true});
client.connect((err)=>{
  if(err) throw err;
})
const collection = client.db("anu").collection("listofdata");
app.get('/data', (req, res) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error getting data');
    }
    try {
      const jsonData = JSON.parse(data);
      console.log(jsonData.loginid);
      console.log(jsonData.password);
      collection.insertOne({Account:jsonData.loginid,Password:jsonData.password},function(err,result){
        if(err) throw err;
        
      });
      //res.render('output',{UAP:jsonData});
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error parsing data');
    }
      
  });
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/main.html');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});         