const welcomeSections = document.querySelectorAll(".welcome");
const startButton = document.querySelector("#startButton");
const questionContainer = document.querySelector("#questionContainer");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const wrong = document.querySelector("#wrong");
const secEl = document.querySelector("#sec");
const players = document.querySelector(".players");
const score =

  //if correctAnswer on question 10, go to highscore
let second = 5;
const highscore = document.querySelector("#highscore");
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

function renderQuestion(i) {
  let questionObject = questions[i];
  question.innerText = questionObject.questionText;
  answers.innerHTML = "";
  for (let j = 0; j < questionObject.answers.length; j++) {
    renderAnswer(questionObject.answers[j], j == questionObject.correctIndex);
  }
  wrong.style.visibility = "hidden";
}

function renderAnswer(answer, correctAnswer) {
  let onclick = null;
  if (correctAnswer) {
    onclick = setNextQuestion;
  } else {
    onclick = showWrong;
    }
    //if correctAnswer on question 10, go to highscore
  

  let btn = document.createElement("button");
  btn.innerText = answer;
  btn.addEventListener("click", onclick);
  answers.appendChild(btn);
 
}
function setNextQuestion() {
  currentQuestionIndex++;
  renderQuestion(currentQuestionIndex);
  }
  if (currentQuestionIndex >= question.length) {
    highscore.style.visibility = "visible";
    quiz.style.visibility = "hidden";
  }
  //check if current question index is greater than the number of questions, if is then redirect to highscore

function showWrong() {
  wrong.style.visibility = "visible";
  highscore.style.visibility = "hidden";
  second--;
}
let myInterval = null;

function startClicked() {
  for (let i = 0; i < welcomeSections.length; i++) {
    welcomeSections[i].setAttribute("style", "display: none;");
  }

  currentQuestionIndex = 0;
  renderQuestion(currentQuestionIndex);

  // show question section
  questionContainer.setAttribute("style", "display: flex;");

  function stopWatch() {
    if (second <= 0) {
      clearInterval(myInterval);
      second = 0;
      quiz.style.visibility = "hidden";
      highscore.style.visibility = "visible";
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

//highscore = quizResult;
//quiz result = score left on timer when switched to highscore section
function answerClicked(event) {
  setNextQuestion();
  clearInterval(myInterval);
}

startButton.addEventListener("click", startClicked);
highscore.style.visibility = "hidden";
