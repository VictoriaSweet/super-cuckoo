const welcome = document.querySelector("#welcome");
const startButton = document.querySelector("#startButton");
const questionContainer = document.querySelector("#questionContainer");
const question = document.querySelector("#question");
const answer1 = document.querySelector ("#answer1");
const answer2 = document.querySelector ("#answer2");
const answer3 = document.querySelector ("#answer3");
const answer4 = document.querySelector ("#answer4");


let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let second = 00;
let count = 00;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        count--;
 
        if (count == 100) {
            second--;
            count = 0;
        }

        let secString = second;
        let countString = count;
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('sec').innerText = secString;
        document.getElementById('count').innerText = countString;
        setTimeout(stopWatch, 10);
    }
}

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
            "Make the sight look pretty",
            "Hot Tomcats Make Love",
            "Make the site look pretty",
        ],
    },
    {
        questionText: "What is an ordered list in HTML?",
        correctAnswer: "Numbered list",
        wrongAnswers: [
            "My order in the doordash app",
            "A list item",
            "Bullet points identifying topics",
        ],
    },
    {
        questionText: "Which of the folowing selections are NOT a primitive javascript data type?",
        correctAnswer: "Letters",
        wrongAnswers: [
            "Boolean",
            "Strings",
            "Undefined",
        ],
    },
    {
        questionText: "What does the term 'DRY' represent in coding?",
        correctAnswer: "Don't Repeat Yourself",
        wrongAnswers: [
            "Do Repeat Yourself",
            "Dogs Really Yelp",
            "Don't Regret Yodeling",
        ],
    },
    {
        questionText: "What is the purpose of .concat() in javascript?",
        correctAnswer: "To combine two or more strings or arrays",
        wrongAnswers: [
            "Awareness of convicted cats who are guilty of scratching the couch.",
            "Combining two or more webpages together.",
            "It is latin for 'with cats' adds a meow alert to every onclick event.",
        ],
    },
    {
        questionText: "What is the purpose of Alt text within an image?",
        correctAnswer: "To provide an explanation of the image or figure provided to those who are utilizing screen readers for accesibility purposes.",
        wrongAnswers: [
            "A subliminal message to initiate a comeback of Alt rock ",
            "A reference to an image or figure that would make more sense for those who don't understand the first image or figure.",                                                                  
            "An alternative website that would provide more information than the current website.",
        ],                                                                                                          
    },
    {
        questionText: "What is the ?",
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