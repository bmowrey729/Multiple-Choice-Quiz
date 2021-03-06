var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var newScore = document.getElementById("score")
var newtime = document.getElementById("timeleft")
var restartBtn = document.getElementById("restart-btn")
var newWins = document.getElementById("wins")
var newLosses = document.getElementById("losses")
var wins = 0
var losses = localStorage.getItem("losses")
var score = 0
var timeleft = 30


var questionContainerEl = document.getElementById("question-container")

var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById("answer-buttons")



var shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
restartBtn.addEventListener('click', restartGame)
function restartGame() {
    document.location.reload(true)
}

function startGame() {
    newScore.innerText = score
    newtime.innerText = timeleft
    newWins.innerText = wins
    newLosses.innerText = losses
    startBtn.classList.add('hide')
    restartBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    countdown()
    setNextQuestion()
}

function countdown() {
    setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(timeleft = 0)
            losses++
   newLosses.textContent = losses
   localStorage.setItem("losses", losses)


            questionContainerEl.classList.add('hide')
            restartBtn.classList.remove('hide')


            timeleft = 30

        }
        newtime.innerText = timeleft
        timeleft -= 1
    }, 1000)
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex++])
}

function showQuestion(question) {

    questionEl.innerText = question.question

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
    })
}

function resetState() {
    nextBtn.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
            (answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(correct)
    if (correct) {
        score++
        newScore.innerText = score
    } else { timeleft = timeleft - 5 }


    if (shuffledQuestions.length > currentQuestionIndex) {
        nextBtn.classList.remove('hide')

    } else {
        startBtn.innerText = "Restart"
        startBtn.classList.remove('hide')

    }
}



nextBtn.addEventListener('click', nextQuestion)
function nextQuestion() {
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

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

    {
        question: 'Which film did Steven Spielberg win his first Oscar for Best Director?',
        answers: [
            { text: 'Jaws', correct: false },
            { text: 'Catch Me If You Can', correct: false },
            { text: 'E.T.', correct: false },
            { text: 'Schindlers List', correct: true }
        ]
    },
    {
        question: 'Which film won the first Academy Award for Best Picture?',
        answers: [
            { text: 'All Quiet On The Western Front', correct: false },
            { text: 'Sunrise', correct: false },
            { text: 'Wings', correct: true },
            { text: 'Metropolis', correct: false }
        ]
    },

    {
        question: 'What is the name of Quint’s shark-hunting boat in Jaws?',
        answers: [
            { text: 'The Whale', correct: false },
            { text: 'The Orca', correct: true },
            { text: 'The Dolphin', correct: false },
            { text: 'The Shark', correct: false }
        ]
    },

    {
        question: 'What was the first feature-length animated film ever released?',
        answers: [
            { text: 'Pinocchio', correct: false },
            { text: 'Fantasia', correct: false },
            { text: 'Snow White', correct: true },
            { text: 'Dumbo', correct: false }
        ]
    },

    {
        question: 'What short film featured Mickey Mouse’s first appearance?',
        answers: [
            { text: 'Plane Crazy', correct: true },
            { text: 'Circle Of Life', correct: false },
            { text: 'The Band Concert', correct: false },
            { text: 'The Barnyard Concert', correct: false }
        ]
    },

    {
        question: 'How many languages is C-3PO fluent in?',
        answers: [
            { text: 'Over Five Million', correct: false },
            { text: 'Over Six Million', correct: true },
            { text: 'Over Seven Million', correct: false },
            { text: 'Over Eight Million', correct: false }
        ]
    },

    {
        question: 'What is the name of Han Solo’s ship?',
        answers: [
            { text: 'Flagship', correct: false },
            { text: 'Patrol Cruiser', correct: false },
            { text: 'Empire Ship', correct: false },
            { text: 'Millennium Falcon', correct: true }
        ]
    },

    {
        question: ' In what month were all six original Star Wars films released?',
        answers: [
            { text: 'March', correct: false },
            { text: 'April', correct: false },
            { text: 'May', correct: true },
            { text: 'June', correct: false }
        ]
    },

    {
        question: 'Which species stole the plans to the Death Star?',
        answers: [
            { text: 'Sullustan', correct: false },
            { text: 'Human', correct: false },
            { text: 'Bothan', correct: true },
            { text: 'Cerean', correct: false }
        ]
    },

    {
        question: 'How many regular season games are played in the NFL?',
        answers: [
            { text: '12', correct: false },
            { text: '18', correct: false },
            { text: '16', correct: true },
            { text: '20', correct: false }
        ]
    },
    {
        question: 'What franchise team is the oldest in professional football history?',
        answers: [
            { text: 'Green Bay Packers', correct: false },
            { text: 'Arizona Cardinals', correct: true },
            { text: 'New England Patriots', correct: false },
            { text: 'Chicago Bears', correct: false }
        ]
    },

    {
        question: 'What year did the Cold War officially end?',
        answers: [
            { text: '1998', correct: false },
            { text: '1989', correct: true },
            { text: '1990', correct: false },
            { text: '1991', correct: false }
        ]
    },



    {
        question: 'How many people make up the U.S. electoral college?',
        answers: [
            { text: '442', correct: false },
            { text: '530', correct: true },
            { text: '352', correct: false },
            { text: '270', correct: false }
        ]
    },

    {
        question: 'In what month is Earth closest to the sun?',
        answers: [
            { text: 'May', correct: false },
            { text: 'January', correct: true },
            { text: 'October', correct: false },
            { text: 'April', correct: false }
        ]
    },

    {
        question: 'When was the idea of the atom first introduced in historical records?',
        answers: [
            { text: '400 B.C.', correct: false },
            { text: '450 B.C.', correct: true },
            { text: '500 B.C.', correct: false },
            { text: '550 B.C.', correct: false }
        ]
    },

    {
        question: 'How many new species continue to be discovered every year?',
        answers: [
            { text: '16,000', correct: false },
            { text: '18,000', correct: true },
            { text: '32,000', correct: false },
            { text: '34,000', correct: false }
        ]
    },




]













