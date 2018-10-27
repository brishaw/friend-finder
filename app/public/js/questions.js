var questionSet = [
  {
    question: "Are you looking for a...",
    answer: ["Woman", "Man", "Either", "Surprise Me","I don't want to answer this"]
  },
  {
    question: "Would you like it...",
    answer: ["Always above 70°", "Always below 70°", "Summer & Winter", "All 4 seasons", "I don't really care"]
  }
];

console.log(questionSet);

console.log(questionSet[0].question);

console.log(questionSet[0].answer);

console.log(questionSet.length);

var questionDiv = $("#question");
var checkBoxDiv = $("#check-box");
