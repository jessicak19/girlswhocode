/* .js files add interaction to your website */

// fact generator 

var factList = [
  "Over 1 in 4 of today’s 20-year-olds will become disabled before they retire.", 
  "The average long-term disability claim lasts 34.6 months.",
  "Only about 9 percent of disabilities are caused by accidents.",
  "About 91 percent of disabilities are caused by illnesses.",
  "Musculoskeletal and connective tissue disorders and diseases are the number one cause of disability.  Diseases of the nervous system and sensory organs are the number two cause.",
  "Most disabilities are not work related.",
  "Only 31% of the workforce is covered by employer provided disability insurance.",
  "You are more likely to incur a disability than you are to die prematurely.",
  "65 percent of individuals living in poverty for at least three years had a disability.",
  "Only 34% of Social Security Disability Insurance (SSDI) claimants are actually approved to receive benefits.",
  "About 13% of Americans currently have a disability.",
  "Only 37% of working-age adults with disabilities are employed.  24% are employed full-time.",
  "The median household income for a household with a working-age adult who has a disability was $45,500 in 2017."];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


