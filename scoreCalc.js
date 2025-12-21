const QUESTIONS = [
  "How often do you feel restless or fidget with your hands/feet when seated?",
  "How often do you find it difficult to stay focused on tasks that require sustained effort?",
  "How often do you interrupt others during conversations or activities?",
  "How often do you struggle to keep track of tasks, deadlines, or belongings?",
  "How often do you avoid tasks that require sustained organization or effort?"
];

const SCORE_MAP = {
  "Never": 0,
  "Rarely": 1,
  "Sometimes": 2,
  "Often": 3,
  "Very Often": 4
};


let currentIndex = 0;
let totalScore = 0;


const scoreEl = document.querySelector(".score");
const questionEl = document.querySelector("#question");
const optionBtns = document.querySelectorAll(".option-btn button");


function updateScore() {
  scoreEl.textContent = `Score : ${totalScore}`;
}

function showQuestion() {
  if (currentIndex < QUESTIONS.length) {
    questionEl.textContent = QUESTIONS[currentIndex];
  } else {
    showResult();
  }
}

function handleAnswer(e) {
  const value = SCORE_MAP[e.target.textContent];
  totalScore += value;
  updateScore();

  currentIndex++;
  showQuestion();
}

function showResult() {
  let feedback = "";
  if (totalScore <= 10) {
    feedback = "You reported few ADHD-like traits. You may not strongly relate to ADHD characteristics.";
  } else if (totalScore <= 20) {
    feedback = "You reported some ADHD-like traits. You may find certain situations challenging.";
  } else {
    feedback = "You reported many ADHD-like traits. Consider learning more and consulting a professional.";
  }

  questionEl.textContent = feedback;
  document.querySelector(".option-btn").innerHTML = ""; // clear buttons
}


optionBtns.forEach(btn => btn.addEventListener("click", handleAnswer));
updateScore();
showQuestion();