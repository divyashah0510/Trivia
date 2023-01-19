const quizData = [
    {
        question: "I was very anxious, worried or scared about a lot of things in my life.",
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly",
        correct: "",
    },
    {
        question: "I felt that my worry was out of my control.",
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly",
        correct: "",

    },
    {
        question: "I felt restless, agitated, frantic or tensed.",
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly",
        correct: "",

    },
    {
        question: "I had trouble sleeping - I could not fall or stay asleep,and / or did not feel-well rested when I woke up.",
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly",
        correct: "",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})