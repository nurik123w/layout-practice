let color = ["red","blue","green","yellow"];
let gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;

function nextSequence(){
  userPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  let randomNum = Math.floor(Math.random()*4);
  let randomColor = color[randomNum];
  gamePattern.push(randomColor);
  setTimeout(function(){
    animate(randomColor);
    makeSound(randomColor);
  },1000);
}

function startOver(){
  gamePattern=[];
  started=false;
  level=0;
}

function animate(e){
  $("#"+e).fadeIn(100).fadeOut(100).fadeIn(100);
}

function makeSound(e){
  let audio = new Audio("sounds/"+e+".mp3");
  audio.play();
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userPattern[currentLevel]){
      if(gamePattern.length==userPattern.length){
          nextSequence();  
      }
  }else{
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    makeSound("wrong");
    $('#level-title').text("Game Over, press Any Key to Restart")
    startOver();
  }
}

$('.btn').click(function() {
  let id = this.id;
  userPattern.push(id);
  checkAnswer(userPattern.length-1);
  animate(id);
  makeSound(id);
});

$(document).keypress(function() {  
  if(started==false){
    nextSequence();
    started=true;
  }
});
