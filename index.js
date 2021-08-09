var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question
("What's your Name?  ") ;
var userLike = readlineSync.question
("What do you like about me?  ");
console.log("")
console.log("Welcome!! " + userName.toUpperCase() + " to HOW WELL DO YOU KNOW Krishna? **The GAME** ")
console.log("             ");
console.log(" ***  LETS START!! *** ");
console.log("             ");
//Highscore
var highscore
// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yaay!! You got this Right!".toUpperCase());
    score = score + 1;
  } else {
    console.log("Ooops you are Wrong!".toUpperCase())
    console.log("Correct answer is: ", currentQuestion.answer)
  }
  console.log("Current score: ", score);
  console.log("---------------------")
  console.log("")
}

//Array of Objects
var questions =[{
  question: "Q1.) Where do I live which area? ",
  answer: "Kondhwa",
}, {
  question:"Q2.) My best friends name? ",
  answer: "Sourabh"
},{
  question:"Q3.) My favourite book? ",
  answer: "Bhagavad Gita"
},{
  question:"Q4.) Where do I work? ",
  answer: "Amazon"
},{
  question:"Q5.) Which course in education am I pursuing? ",
  answer: "Computer Engineering"
},{
  question:"Q6.) Where is my Farmhouse located? ",
  answer: "Saswad"
},{
  question:"Q7.) What is my favourite color ",
  answer: "Black"
}
,{
  question:"Q8.)Who is the most important person in my life? ",
  answer: "Mother"
},{
  question:"Q9.) Which college am I studing in? ",
  answer: "KJ college"
},{
  question:"Q10.) What is the name of my favourite car? ",
  answer: "Range rover"
},{
  question:"Q11.) Which school did I go to? ",
  answer: "Sungrace"
}
]

//Loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! You SCORED: ", score)
console.log("&")
console.log("You like  " + userLike +  "  about me! That's great!")
console.log("")
console.log("Thank you for sharing your view!!!!")
console.log("***THANK YOU SO MUCH! for taking out time for this!***")