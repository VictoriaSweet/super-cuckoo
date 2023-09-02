// ** begining of quiz**
const welcomeSections = document.querySelectorAll(".welcome");
const startButton = document.querySelector("#startButton");
const quiz = document.querySelector("#quiz");
// ** questions **
const timer = document.querySelector("#sec");
const questionContainer = document.querySelector("#questionContainer");
const question = document.querySelector("#question");
const wrong = document.querySelector("#wrong");
const answers = document.querySelector("#answers");
//** scores ** */
const highscore = document.querySelector("#highscore");
const scores = document.querySelector("#scores");

let second = 45;
let currentQuestionIndex = 0;
let myInterval = null;

//**questions of the quiz
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
  
];

//** */ function to render questions
function renderQuestion(i) {
  let questionObject = questions[i];
  const qNum = i + 1;
  question.innerText = qNum + ": " + questionObject.questionText;
  answers.innerHTML = "";
  for (let j = 0; j < questionObject.answers.length; j++) {
    renderAnswer(questionObject.answers[j], j == questionObject.correctIndex);
  }
  //** */ hide visibility of wrong
  wrong.style.visibility = "hidden";
}

function renderAnswer(answer, correctAnswer) {
  let onclick = null;
  if (correctAnswer) {
    onclick = setNextQuestion;
  } else {
    onclick = showWrong;
  }

  let btn = document.createElement("button");
  btn.innerText = answer;
  btn.addEventListener("click", onclick);
  answers.appendChild(btn);
}
//** */ set the next question
function setNextQuestion() {
  currentQuestionIndex++;

  // if the quiz in on the last page, end quiz (prompt for name, show highscore)
  if (currentQuestionIndex == questions.length) {
    quizEnd();
    return;
  }

  renderQuestion(currentQuestionIndex);
}

function showWrong() {
  wrong.style.visibility = "visible";
  highscore.style.visibility = "hidden";
  second--;
}
//** hide welcome **
function startClicked() {
  for (let i = 0; i < welcomeSections.length; i++) {
    welcomeSections[i].style.display = "none";
  }

  // **start the timer**
  timer.innerText = second;

  currentQuestionIndex = 0;
  renderQuestion(currentQuestionIndex);

  // **show question section**
  questionContainer.style.display = "flex";

  //** timer **
  function stopWatch() {
    if (second <= 0) {
      second = 0;

      quizEnd();
    }

    let secString = second;

    if (second < 10) {
      secString = "0" + secString;
    }

    timer.innerText = secString;
    second--;
  }

  myInterval = setInterval(stopWatch, 1000);
}

//**show highscores
function renderHighscores() {
  //**creating key as highscoresKey
  const key = "highscoresKey";

  // grabbing key defined as highscoreskey from local storage
  const localStorageHighscores = localStorage.getItem(key);

  // setup new highscore
  let name = prompt("New High Score!", "Please input name");
  let score = second++;
  let newHighscore = { name: name, score: score };

  let highscores = [];

  // we have something in the storage
  if (localStorageHighscores != null) {
    // **if key is found in local storage, show found key in console
    console.log(`key ${key} found in localStorage`);
    highscores = JSON.parse(localStorageHighscores);
  }

  //put new highscore in array before we stringify
  highscores.push(newHighscore);

  //**turn highscores (currently an object) into a string
  const highscoresJSON = JSON.stringify(highscores);

  // **setting key (variable) highscoresJSON (value) into local storage
  localStorage.setItem(key, highscoresJSON);

  // loop through highscores and render rows per score
  for (let i = 0; i < highscores.length; i++) {
    let btn = document.createElement("div");
    btn.innerText = highscores[i].name + " " + highscores[i].score;
    scores.appendChild(btn);
  }

  wrong.style.visibility = "hidden";
  highscore.style.visibility = "visible";
}

function quizEnd() {
  clearInterval(myInterval);
  quiz.style.visibility = "hidden";
  renderHighscores();
}

// set item - assign to local storage
// get item -- call from local storage

startButton.addEventListener("click", startClicked);
