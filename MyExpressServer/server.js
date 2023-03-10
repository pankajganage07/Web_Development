const express = require('express');

const app = express();

app.get("/",function(req, res) {
  res.send("<h1>HELLO, PANKAJ HERE</h1>");
});

app.get("/contact", (req,res)=> {
  res.send("contact me at pankaj@gmail.com");
});

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>swim</li><li>code</li></ul>")
});


app.get("/about", (req, res)=>{
  res.send("hello, I am pankaj");
} );

app.listen(3000, ()=>{
  console.log("hello from server");
});
