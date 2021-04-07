var score2 = 1
function up2(){
  if(score2 < 30 ){
    score2 ++;
  }
  document.getElementById("result2").innerHTML = score2;
}

function down2(){
  if(score2 > 1 ){
    score2 --;
  }
  document.getElementById("result2").innerHTML = score2;
}

addEventListener('load', () => {
  document.getElementById("result2").innerHTML = score2;
})