let score = JSON.parse(localStorage.getItem('score'))
if (!score)  {
   score = {
   wins:0,
   looses:0,
   ties:0
   }
}


updateScore();
let isautoPlaying = false;
let intervalId;
 function autoPlay(){
  if(!isautoPlaying){
  intervalId = setInterval(function(){
    const playerMove  = pickComputerMove();
    playGame(playerMove);
  },1000);
  isautoPlaying = true;
}else{
    clearInterval(intervalId);
    isautoPlaying = false
}
 }

 function playGame(playerMove){
   const computerMove = pickComputerMove();
 let result = '';
 if(playerMove === 'Rock'){
 if (computerMove === 'Rock'){
   result = 'tie';
 }else if (computerMove === 'paper'){
   result = 'you loose';
 }else if (computerMove === 'scissor'){
   result = 'you win';
 }
}
 if(playerMove === 'Paper'){
 if (computerMove === 'Rock'){
   result = 'you loose';
 }else if (computerMove === 'paper'){
   result = 'Tie';
 }else if (computerMove === 'scissor'){
   result = 'you win';const computerMove = pickComputerMove();

let result = '';
if (computerMove === 'rock'){
result = 'Tie';
}else if (computerMove === 'paper'){
result = 'you loose';
}else if (computerMove === 'scissor'){
result = 'you win'
}
alert(`You picked Rock . computer picked ${computerMove} ${result}`);
 }
}
 if(playerMove === 'Scissor'){
 if (computerMove === 'Rock'){
   result = 'you win';
 }else if (computerMove === 'paper'){
   result = 'you loose';
 }else if (computerMove === 'scissor'){
   result = 'Tie';
 }
}
 if(result === 'you win'){
   score.wins += 1;
 }else if(result === 'you loose'){
   score.looses += 1;
 }else if (result === 'Tie'){
   score.ties += 1;
 }
 
 updateScore();
 document.querySelector('.js-result')
 .innerHTML = `${result}`;
 document.querySelector('.js-moves')
 .innerHTML = 
 `you picked 
 <img src= "images/${playerMove}-img.png"
 class="move-icon">
 computer picked
 <img src="images/${computerMove}-img.png"
 class="move-icon">`;
 localStorage.setItem('score',JSON.stringify(score));
}
   
function updateScore(){
   document.querySelector('.js-score')
.innerHTML = `wins:${score.wins}, looses:${score.looses}, ties:${score.ties}`;
 }
 
 function pickComputerMove(){
   const randomNumber = Math.random();
let computerMove = '';
if (randomNumber >= 0 && randomNumber < 1/3){
   computerMove = 'Rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
   computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1){
   computerMove = 'scissor';
}
  return computerMove;

}