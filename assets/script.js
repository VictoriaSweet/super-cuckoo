const welcome = document.querySelector("#welcome");
const startButton = document.querySelector("#startButton");
const questionContainer = document.querySelector("#questionContainer");
const question = document.querySelector("#question");
const answer1 = document.querySelector ("#answer1");
const answer2 = document.querySelector ("#answer2");
const answer3 = document.querySelector ("#answer3");
const answer4 = document.querySelector ("#answer4");

let currentQuestionIndex = 0;

const questions = [
    {
        questionText: "What is CSS an acronym for?",
        correctAnswer: "Cascading Style Sheets",
        wrongAnswers: [
            "Cats Steal Sushi",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
    {
        questionText: "What is the purpose of HTML in a webpage?",
        correctAnswer: "set up the structure of the webpage",
        wrongAnswers: [
            "flksklfjdf",
            "Corn Stealing Squirrel",
            "Crafty Style Shit",
        ],
    },
];


function setNextQuestion() {
    const questionObject = questions[currentQuestionIndex];

    question.innerText = questionObject.questionText;
    answer1.innerText = questionObject.correctAnswer;
    answer2.innerText = questionObject.wrongAnswers[0];
    answer3.innerText = questionObject.wrongAnswers[1];
    answer4.innerText = questionObject.wrongAnswers[2];

    currentQuestionIndex++;
}

function startClicked() {
    // hide welcome section
    welcome.setAttribute("style", "display: none;");

    currentQuestionIndex = 0;
    setNextQuestion();

    // show question section
    questionContainer.setAttribute("style", "display: block;");
}

function answerClicked(event) {
    // First lookup how to get the value of the clicked element from an onClickEvent

    // TODO: Did they select the correct answer?
    // if yes
    // Show Correct!
    // else
    // Show Wrong! and don't setNextQuestion

    setNextQuestion();
}

startButton.addEventListener("click", startClicked);

answer1.addEventListener ("click", answerClicked);
answer2.addEventListener ("click", answerClicked);
answer3.addEventListener ("click", answerClicked);
answer4.addEventListener ("click", answerClicked);