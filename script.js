const quizData = [
  {
    question: "Which K-pop band was the first to perform at Coachella?",
    a: "Twice",
    b: "BLACKPINK",
    c: "EXO",
    d: "BTS",
    correct: "b",
  },
  {
    question: "How many member does Twice have?",
    a: "9",
    b: "7",
    c: "6",
    d: "5",
    correct: "a",
  },
  {
    question: "Which K-pop group members include Hyunjin, Felix, Bang Chan and Han?",
    a: "TXT",
    b: "Bigbang",
    c: "Wanna One",
    d: "Stray Kids",
    correct: "d",
  },
  {
    question: "Which group’s songs include PTT, Why Not, Butterfly and Star?",
    a: "Twice",
    b: "BTS",
    c: "LOONA",
    d: "Monsta ",
    correct: "c",
  },
  {
    question: "Which K-pop artist was the first to reach 1 billion views on YouTube?",
    a: "Taeyeon",
    b: "Chungha",
    c: "PSY",
    d: "Kim Ryeowook ",
    correct: "c",
  },
  {
    question: "Which successful K-Pop group has the most members as of 2021?",
    a: "EXO",
    b: "NCT",
    c: "Seventeen",
    d: "LOONA ",
    correct: "b",
  },
  {
    question: "Which member of F(x) is Chinese?",
    a: "Krystal",
    b: "Amber",
    c: "Luna",
    d: "Victoria ",
    correct: "d",
  },
  {
    question: "Which girl group’s lead singer was featured in Got7’s “Girls Girls Girls” music video?",
    a: "Mamamoo",
    b: "Girls’ Generation",
    c: "Twice",
    d: "Red Velvet",
    correct: "c",
  },
  {
    question: "What is the name of the K-pop star who was in Wonder Girls and 4Minute?",
    a: "Hyuna",
    b: "Sunye",
    c: "Yubin",
    d: "Hyerim",
    correct: "a",
  },
  {
    question: "Who was the last member to join Red Velvet?",
    a: "Wendy",
    b: "Seulgi",
    c: "Irene",
    d: "Yeri",
    correct: "d",
  },
]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const ansEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
  
  deselectAns()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAns() {
  ansEls.forEach(ansEl => ansEl.checked = false)

}

function getSelected(){
  let answer
  ansEls.forEach(ansEl => {
    if (ansEl.checked) {
      answer = ansEl.id
    }
  })
  return answer
}

btn.addEventListener("click", () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
        <h2 class="content">Your score ${score}/${quizData.length} points</h2>
        <button onClick="location.reload()">Reload</button>
      `
    }
  }
})