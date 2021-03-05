var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var score = 0
var indexEl = 0

var questionContainerEl = document.getElementById("question-container")

var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById("answer-buttons")
const answerBtn1 = document.getElementById('btn1')
const answerBtn2 = document.getElementById('btn2')
const answerBtn3 = document.getElementById('btn3')
const answerBtn4 = document.getElementById('btn4')




startBtn.addEventListener('click', startGame)


function startGame() {
    startBtn.classList.add('hide')

   

    for (let i = 0; i < questions.length; i++) {    
        questionContainerEl.classList.remove('hide')
    

        questionEl.innerText = questions[indexEl].question
        answerBtn1.innerText = questions[indexEl].answers[0].text
        answerBtn2.innerText = questions[indexEl].answers[1].text
        answerBtn3.innerText = questions[indexEl].answers[2].text
        answerBtn4.innerText = questions[indexEl].answers[3].text
        //Btn1 answer
        answerBtn1.addEventListener('click', addScore0)

        function addScore0() {

            if (questions[indexEl].answers[0].correct == true) {
                score++
            } else {
                if (score > 0) { score-- };
            }                
                indexEl++ 
                console.log(score) 
                console.log(indexEl)  
                questionContainerEl.classList.add('hide')           
                
            }

            //Btn2 answer
            answerBtn2.addEventListener('click', addScore1)

            function addScore1() {

                if (questions[indexEl].answers[1].correct == true) {
                    score++
                } else {
                    if (score > 0) { score-- };
                }
                indexEl++   
                console.log(score) 
                console.log(indexEl)      
                
            }
            //Btn3 answer
            answerBtn3.addEventListener('click', addScore2)

            function addScore2() {

                if (questions[indexEl].answers[2].correct == true) {
                    score++
                } else {
                    if (score > 0) { score-- };
                }
                indexEl++     
                console.log(score) 
                console.log(indexEl)     
            }
            //Btn4
            answerBtn4.addEventListener('click', addScore3)

            function addScore3() {

                if (questions[indexEl].answers[3].correct == true) {
                    score++
                } else {
                    if (score > 0) { score-- };
                }
                indexEl++ 
                console.log(score) 
                console.log(indexEl)         
            }
        }
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

            ]

        
