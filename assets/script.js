const welcomeSections = document.querySelectorAll(".welcome");
const startButton = document.querySelector("#startButton");
const questionContainer = document.querySelector("#questionContainer");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");

const secEl = document.querySelector("#sec");

let second = 5;
secEl.innerText = second;

let currentQuestionIndex = 0;

const questions = [
  {
    questionText: "What is CSS an acronym for?",
    answers: [
      "Cats Steal Sushi",
      "Corn Stealing Squirrel",
      "Cascading Style Sheets",
      "Crafty Style Shit",
    ],
    correctIndex: 2,
  },

  {
    questionText: "What is the purpose of HTML in a webpage?",
    answers: [
      "Make the sight look pretty",
      "set up the structure of the webpage",
      "Hot Tomcats Make Love",
      "Make the site look pretty",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is an ordered list in HTML?",
    answers: [
      "My order in the doordash app",
      "A list item",
      "Bullet points identifying topics",
      "Numbered list",
    ],
    correctIndex: 1,
  },
  {
    questionText:
      "Which of the folowing selections are NOT a primitive javascript data type?",
    answers: ["Boolean", "Strings", "Letters", "Undefined"],
    correctIndex: 2,
  },
  {
    questionText: "What does the term 'DRY' represent in coding?",
    answers: [
      "Do Repeat Yourself",
      "Don't Repeat Yourself",
      "Dogs Really Yelp",
      "Don't Regret Yodeling",
    ],
    correctIndex: 1,
  },
  {
    questionText: "What is the purpose of .concat() in javascript?",
    answers: [
      "Awareness of convicted cats who are guilty of scratching the couch.",
      "Combining two or more webpages together.",
      "It is latin for 'with cats' adds a meow alert to every onclick event.",
      "To combine two or more strings or arrays",
    ],
    correctIndex: 3,
  },
  {
    questionText: "What is the purpose of Alt text within an image?",
    answers: [
      "A subliminal message to initiate a comeback of Alt rock ",
      "A reference to an image or figure that would make more sense for those who don't understand the first image or figure.",
      "To provide an explanation of the image or figure provided to those who are utilizing screen readers for accesibility purposes.",
      "An alternative website that would provide more information than the current website.",
    ],
    correctIndex: 2,
  },
  {
    questionText: "question8",
    answers: ["answer", "answer", "answer", "answer"],
    correctIndex: 0,
  },
  {
    questionText: "question ?",
    answers: ["sanswer", "answer", "answer", "answer"],
    correctIndex: 0,
  },
  {
    questionText: "question 10?",
    answers: ["answer", "answer", "answer", "answer"],
    correctIndex: 0,
  },
];

for (let i = 0; i < questions.length; i++) {
  let questionObject = questions[i];
  for (let j = 0; j < questionObject.answers.length; j++) {
    question.innerText=questionObject.questionText;
    render(questionObject.answers[j], j == questionObject.correctIndex);
  }
}
function render(answer, correctAnswer) {
  let onclick = null;
  if (correctAnswer) {
    onclick = setNextQuestion;
  } else {
    onclick = showWrong; //show wrong and try again()
  }

  let btn = document.createElement("button");
  btn.innerText = answer;
  btn.addEventListener("click", onclick);
  answers.appendChild(btn);
}
function setNextQuestion() {}
function showWrong() {}
let myInterval = null;

function startClicked() {
  for (let i = 0; i < welcomeSections.length; i++) {
    // hide welcomeSections
    welcomeSections[i].setAttribute("style", "display: none;");
  }

  currentQuestionIndex = 0;
  setNextQuestion();

  // show question section
  questionContainer.setAttribute("style", "display: flex;");

  function stopWatch() {
    if (second == 0) {
      clearInterval(myInterval);
    }

    let secString = second;

    if (second < 10) {
      secString = "0" + secString;
    }

    secEl.innerText = secString;
    second--;
  }

  myInterval = setInterval(stopWatch, 1000);
}

function answerClicked(event) {
  // First lookup how to get the value of the clicked element from an onClickEvent

  // TODO: Did they select the correct answer?
  // if yes
  // Show Correct!
  // else
  // Show Wrong! and don't setNextQuestion

  setNextQuestion();

  //  if (myInterval 0) # go to highscore page
  clearInterval(myInterval);
}

startButton.addEventListener("click", startClicked);
