const express = require('express');
const https = require('node:https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  console.log(req.body.cityName);
  var nameOfCity = req.body.cityName;

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + nameOfCity + "&appid=ddc8f99c9a8a2002479139ede5290221&units=metric";

https.get(url, function(response){


  response.on('data', function(data){
       res.set("Content-Type", "text/html");

    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imgUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
    res.write("<h3> The current weather condition is " + weatherDescription + " </h3>");
    res.write("<h1> The temperature in " + nameOfCity + " is " + temp + " degree Celcius </h1>");
    res.write("<img src = "+ imgUrl +">");
    res.send();

  });
});

});


app.listen(3000, function() {
  console.log("server running on port 3000");
});
