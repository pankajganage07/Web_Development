const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();
var items = ["buy", "cook", "eat"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');



app.get('/', function(req, res) {

let day = date();

  // res.sendFile(__dirname + "/index.html")

  res.render('lists', {listTitle: day, passingvalue: items });
});

app.post("/", function(req,res){
  console.log(req.body);
  var item = req.body.taskinput;

if(req.body.list === "work") {
  workItems.push(item);
  res.redirect("/work")
}
else{
  items.push(item);
  console.log(item);
  res.redirect("/");
}


  // res.render('lists', {passingvalue: req.body.taskinput});
});


// when something is posted to app.js

// app.post('/', function(req, res) {
//    item = req.body.newitem;
//
// items.push(item);
// // res.redirect("/");
// });


app.get("/work", function(req,res){
  res.render('lists', {listTitle: "work List", passingvalue: workItems});
});

// app.post('/work', function(req,res){
// var item = req.body.taskinput;
// console.log(req.body.list);
// if (req.body.list === "work"){
//   workItems.push(item);
//   res.redirect("/work");
// }
// else{
//
//   items.push(item);
//
//   res.redirect('/');
// }
//
//
// });

app.get("/about", function(req, res){
  res.render('about')
});


app.listen(3000, function() {
  console.log("server started on port 3000")
});
