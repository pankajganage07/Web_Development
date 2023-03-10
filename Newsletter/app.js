const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
  var firstName = req.body.fName;
  console.log(firstName);
})

app.listen(3000, function(){
  console.log("listening to port 3000")
})



// api key
// df63a857d1824e31ac1a3196cea88c81-us9

// list id
// 16c4e4d601
