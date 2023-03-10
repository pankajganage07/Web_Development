var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];


var started = false;

var level = 0;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }
});


function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("sucess");

    if(userClickedPattern.length === gamePattern.length){
      setTimeout(()=>{
        nextSequence();
      }, 4000);
    }
  }
  else {
    var answer = false;
    console.log("wrong");
      var aud = new Audio("sounds/wrong.mp3");
      aud.play();
      $("body").addClass("game-over");

      setTimeout(()=>{
        $("body").removeClass("game-over")
      }, 200);

      $("h1").text("game over press any key to restart.");
      startOver();
    }



}





function nextSequence() {

level++;
$("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
   userClickedPattern = [];
}











$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
  var playingSound = new Audio("sounds/" + name + ".mp3");
  playingSound.play();
}


function animatePress(currentColor) {
  $(".btn").click(function() {
    $(this).addClass("pressed");

    setTimeout(function(){
      $(".btn").removeClass("pressed");
    }, 100);
  });
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;
}
