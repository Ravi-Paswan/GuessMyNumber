'use strict';
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.guess').value=55);
let score=20;
let highScore=0;
var secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.check').addEventListener
('click',function(){
const guess = Number(document.querySelector('.guess').value);
if(!guess){
  document.querySelector('.message').textContent=`⛔No number entered`;
}
else if (guess===secretNumber) {
  document.querySelector('.message').textContent=`🎊You won`;
  document.querySelector('.number').textContent=`${secretNumber}`;
  document.querySelector('body').style.backgroundColor='#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.score').textContent=score;
  if(score>highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
  }
}
else{
  if (score>0) {
     document.querySelector('.message').textContent=guess>secretNumber?`📈too high`:`📈too low`;
     score--;
     document.querySelector('.score').textContent=score;
   } else {
     document.querySelector('.message').textContent='You  lost';
   }
}
// else if (guess>secretNumber) {
//   if (score>0) {
//     document.querySelector('.message').textContent=`📈too high`;
//     score--;
//     document.querySelector('.score').textContent=score;
//   } else {
//     document.querySelector('.message').textContent='You  lost';
//   }
//
// }
// else if (guess<secretNumber) {
//   if (score>0) {
//     document.querySelector('.message').textContent=`📉too low`;
//     score--;
//     document.querySelector('.score').textContent=score;
//   } else {
//      document.querySelector('.message').textContent='You  lost';
//   }
// }
});

// Playing the game Again
document.querySelector('.again').addEventListener('click',function(){
  secretNumber = (Math.trunc(Math.random()*20)+1) ;
  score=20;
  document.querySelector('.message').textContent='Start guessing...'
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.guess').value=' ';
})
