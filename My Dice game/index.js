var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src",images1);
document.querySelector(".img2").setAttribute("src",images2);

if(randomNumber1 > randomNumber2){
  document.querySelector(".heading").innerHTML = "🚩 Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector(".heading").innerHTML = "Player 2 wins 🚩";
}
else {
  document.querySelector(".heading").innerHTML = "🚩 draw 🚩";
}
