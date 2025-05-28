let currentAnswer = 0;
let currentScore = 0;
let questionCount = 0;
let totalQuestions = 10;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const mode = document.getElementById('mode').value;
  let num1, num2, op, ops;

  switch (mode) {
    case 'easy':
      num1 = getRandomInt(1, 10);
      num2 = getRandomInt(1, 10);
      ops = ['+'];
      break;
    case 'medium':
      num1 = getRandomInt(10, 50);
      num2 = getRandomInt(1, 10);
      ops = ['+', '-'];
      break;
    case 'normal':
      num1 = getRandomInt(10, 100);
      num2 = getRandomInt(10, 100);
      ops = ['+', '-', '*'];
      break;
    case 'hard':
      num1 = getRandomInt(50, 200);
      num2 = getRandomInt(1, 20);
      ops = ['+', '-', '*', '/'];
      break;
    case 'impossible':
      num1 = getRandomInt(100, 999);
      num2 = getRandomInt(1, 99);
      ops = ['+', '-', '*', '/'];
      break;
  }

  op = ops[Math.floor(Math.random() * ops.length)];

  let question = `${num1} ${op} ${num2}`;
  currentAnswer = eval(question);
  currentAnswer = Math.round(currentAnswer * 100) / 100;

  document.getElementById('question').textContent = `What is ${question}?`;
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';
}

function submitAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  const result = document.getElementById('result');

  if (isNaN(userAnswer)) {
    result.textContent = "Please enter a number.";
    result.style.color = "yellow";
    return;
  }

  if (Math.abs(userAnswer - currentAnswer) < 0.01) {
    currentScore++;
    result.textContent = "Correct!";
    result.style.color = "lightgreen";
  } else {
    result.textContent = `Wrong. The correct answer was ${currentAnswer}`;
    result.style.color = "red";
  }

  questionCount++;
  updateScore();

  if (questionCount < totalQuestions) {
    setTimeout(generateQuestion, 1000);
  } else {
    setTimeout(() => {
      document.getElementById('question').textContent = `Game over! Your final score: ${currentScore}/${totalQuestions}`;
      document.getElementById('result').textContent = '';
    }, 1000);
  }
}

function updateScore() {
  document.getElementById('score').textContent = `Score: ${currentScore} / ${totalQuestions}`;
}

function startGame() {
  currentScore = 0;
  questionCount = 0;
  updateScore();
  generateQuestion();
}

    // Cek orientasi layar untuk perangkat mobile
function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    // Landscape
    document.body.style.justifyContent = 'center';
  } else {
    // Portrait
    document.body.style.justifyContent = 'flex-start';
    alert("Untuk pengalaman terbaik, putar layar ke posisi *landscape*.");
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
