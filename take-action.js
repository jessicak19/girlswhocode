// quiz to determine what you should do // 
var volScore = 0;
var socScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// listen for click on buttons and call fuction if clicked
q1a1.addEventListener("click", soc);
q1a2.addEventListener("click", vol);
q2a1.addEventListener("click", vol);
q2a2.addEventListener("click", soc);
q3a1.addEventListener("click", soc);
q3a2.addEventListener("click", vol);

// track score 
function soc() {
  socScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "socScore =" + socScore);

  if (questionCount == 3) {
  console.log("The quiz is done!");
  updateResult();
}
}

function vol() {
  volScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "volScore =" + volScore);

  if (questionCount == 3) {
  console.log("The quiz is done!");
  updateResult();
}
}

// update quiz result 
function updateResult(){
   if (socScore >= 2){
     result.innerHTML = "You should CAMPAIGN ON SOCIAL MEDIA!";
    console.log("You should CAMPAIGN ON SOCIAL MEDIA!");
    } else if (volScore >= 2){
      result.innerHTML = "You should VOLUNTEER WITH DISABILITY ORGANIZATIONS!";
    console.log("You should VOLUNTEER WITH DISABILITY ORGANIZATIONS!");
    };
}

// event listerners 
var button = document.getElementById("restart");
button.addEventListener("click", restart)

function restart() {
  result.innerHTML = "You should...";
  socScore = 0;
  volScore = 0;
  questionCount = 0;
}
