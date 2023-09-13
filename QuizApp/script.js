const questions = [
    {
        question: "What does 'JS' stand for in JavaScript?",
        answers: [
            {text: "JustScript", correct: false},
            {text: "JavaScript", correct: true},
            {text: "JScript", correct: false},
            {text: "JavaSource", correct: false},
        ]
    },
    {
        question: "What is the main purpose of JavaScript?",
        answers: [
            {text: "Styling web pages", correct: false},
            {text: "Creating interactive web pages", correct: true},
            {text: "Managing databases", correct: false},
            {text: "Writing server-side code", correct: false},
        ]
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answers: [
            {text: "var", correct: true},
            {text: "let", correct: false},
            {text: "const", correct: false},
            {text: "variable", correct: false},
        ]
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: [
            {text: "String", correct: false},
            {text: "Boolean", correct: false},
            {text: "Float", correct: true},
            {text: "Object", correct: false},
        ]
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        answers: [
            {text: "10", correct: false},
            {text: "55", correct: true},
            {text: "Error", correct: false},
            {text: "505", correct: false},
        ]
    },
    {
        question: "What does the '=== 'operator in JavaScript do?",
        answers: [
            {text: "Checks for equality without type conversion", correct: true},
            {text: "Assigns a value to a variable", correct: false},
            {text: "Performs strict addition", correct: false},
            {text: "Checks for equality with type conversion", correct: false},
        ]
    },
    {
        question: "What is the purpose of 'addEventListener' in JavaScript?",
        answers: [
            {text: "Creating animations", correct: false},
            {text: "Handling events like clicks or keypresses", correct: true},
            {text: "Styling elements", correct: false},
            {text: "Making AJAX requests", correct: false},
        ]
    },
    {
        question: "What is a 'closure' in JavaScript?",
        answers: [
            {text: "A way to protect variables from being modified", correct: false},
            {text: "A way to organize code into modules", correct: false},
            {text: "A function that has access to its own scope, and an outer scope", correct: true},
            {text: "A type of loop", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            {text: "Refers to the current HTML element", correct: false},
            {text: "Refers to the current JavaScript file", correct: false},
            {text: "Refers to the current object or context", correct: true},
            {text: "Refers to the previous element", correct: false},
        ]
    },
    {
        question: "What is an example of a JavaScript framework?",
        answers: [
            {text: "Node.js", correct: false},
            {text: "React", correct: true},
            {text: "MongoDB", correct: false},
            {text: "Express.js", correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 questionElement.innerHTML = questionNo + "." + currentQuestion.question;

 currentQuestion.answers.forEach( answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
         button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
 });
}

function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();