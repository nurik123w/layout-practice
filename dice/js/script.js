
function refresh(){
 let randomNum = Math.floor(Math.random()*6)+1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;

      if(randomNum>randomNum2){
        document.getElementById('header').firstElementChild.innerText ="Player 1 Wins";
      }else if(randomNum2>randomNum) {
        document.getElementById('header').firstElementChild.innerText= "Player 2 Wins";
      }else{
        document.getElementById('header').firstElementChild.innerText= "Draw";
      }

      let randomImageSrc = "images/dice"+randomNum+".png";
      document.querySelector(".diceImg1 img").setAttribute("src", randomImageSrc);
  
      let randomImageSrc2 = "images/dice"+randomNum2+".png";
      document.querySelector(".diceImg2 img").setAttribute("src", randomImageSrc2);
}
