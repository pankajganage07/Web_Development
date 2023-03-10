
const express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});



app.post("/bmicalculator", (req, res) => {

var height = Number(req.body.height);
var weight = Number(req.body.weight);

var result = height + weight ;

  res.send("BMI: " + result );
});


app.listen(3000, () => {
  console.log("calculator listening to port 3000");
});
