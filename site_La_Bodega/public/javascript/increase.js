var score = 0
function up(){
  if(score < 30 ){
    score ++;
  }
  document.getElementById("result").innerHTML = score;
}

function down(){
  if(score > 1 ){
    score --;
  }
  document.getElementById("result").innerHTML = score;
}



