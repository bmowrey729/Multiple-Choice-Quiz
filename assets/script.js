var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var score = 0

var questionContainerEl = document.getElementById("question-container")

var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById("answer-buttons")
var answerBtn1 = document.getElementById('btn1')
var answerBtn2 = document.getElementById('btn2')
var answerBtn3 = document.getElementById('btn3')
var answerBtn4 = document.getElementById('btn4')


var shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)


function startGame() {
    console.log("started game")
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function showQuestion(question) {
    questionEl.innerText = question.question
    answerBtn1.innerText = question.answers[0].text
    answerBtn2.innerText = question.answers[1].text
    answerBtn3.innerText = question.answers[2].text
    answerBtn4.innerText = question.answers[3].text
    console.log(question.answers[0].correct)
    
   }
   

answerBtn1.addEventListener('click', addScore)

 function addScore() {
    console.log(questions[0].answers[0].correct)
    if (questions[0].answers[0].correct == true) {
        score++
    } else {
        if (score > 0) { score-- };        
    }
    console.log(score)
    questionContainerEl.classList.add('hide')
    nextBtn.classList.remove('hide')
 }
 nextBtn.addEventListener('click', nextQuestion)
 function nextQuestion(){
    questionContainerEl.classList.remove('hide')
     setNextQuestion()

 }
 

         function setNextQuestion() {
            showQuestion(shuffledQuestions[currentQuestionIndex++])
        }

       //function selectAnswer(e){
        //const selectedButton = e.target
        //}

        var questions = [
            {
                question: 'What is a group of turkeys called?',
                answers: [
                    { text: 'A clutch', correct: false },
                    { text: 'A rafter', correct: true },
                    { text: 'A brood', correct: false },
                    { text: 'A peep', correct: false }
                ]
            
            },

            {
                question: 'What was Google’s original name? ',
                answers: [
                    { text: 'Googo', correct: false },
                    { text: 'Oneshot', correct: false },
                    { text: 'Typist', correct: false },
                    { text: 'Backrub', correct: true }
                ]
            
            },

            {
                question: 'What year was the first color photograph taken?',
                answers: [
                    { text: '1861', correct: true },
                    { text: '1885', correct: false },
                    { text: '1894', correct: false },
                    { text: '1899', correct: false }
                ]
            
            },

            {
                question: 'What was the number of Twitter’s original character limit?',
                answers: [
                    { text: '125', correct: false },
                    { text: '135', correct: false },
                    { text: '140', correct: true },
                    { text: '280', correct: false }
                ]
            
            },

            
        ]
        

        
