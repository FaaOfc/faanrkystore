let currentAnswer = 0;
let currentScore = 0;
let questionCount = 0;
const totalQuestions = 10;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const mode = document.getElementById('mode').value;
  let num1, num2, op, ops;

  switch (mode) {
    case 'baby':
      num1 = getRandomInt(1, 10);
      num2 = getRandomInt(1, 10);
      ops = ['+'];
      break;
    case 'noob':
      num1 = getRandomInt(10, 50);
      num2 = getRandomInt(1, 10);
      ops = ['+', '-'];
      break;
    case 'normal':
      num1 = getRandomInt(10, 100);
      num2 = getRandomInt(10, 100);
      ops = ['+', '-', '*'];
      break;
    case 'pro':
      num1 = getRandomInt(50, 200);
      num2 = getRandomInt(1, 20);
      ops = ['+', '-', '*', '/'];
      break;
    case 'sepuh':
      num1 = getRandomInt(1000, 9999);
      num2 = getRandomInt(1, 999);
      ops = ['+', '-', '*', '/'];
      break;
    case 'dewa':
      num1 = getRandomInt(10000, 99999);
      num2 = getRandomInt(1, 9999);
      ops = ['+', '-', '*', '/'];
      break;
  }

  op = ops[Math.floor(Math.random() * ops.length)];
  if (op === '/' && num2 === 0) num2 = 1;

  switch (op) {
    case '+': currentAnswer = num1 + num2; break;
    case '-': currentAnswer = num1 - num2; break;
    case '*': currentAnswer = num1 * num2; break;
    case '/': currentAnswer = Math.round((num1 / num2) * 100) / 100; break;
  }

  document.getElementById('question').textContent = `What is ${num1} ${op} ${num2}?`;
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';
}

function submitAnswer() {
  const userInput = document.getElementById('answer').value;
  const userAnswer = parseFloat(userInput);
  const result = document.getElementById('result');

  if (isNaN(userAnswer)) {
    result.textContent = "Masukan Angkanya";
    result.style.color = "yellow";
    return;
  }

  if (Math.abs(userAnswer - currentAnswer) < 0.01) {
    currentScore++;
    result.textContent = "Benar!!";
    result.style.color = "lightgreen";
  } else {
    result.textContent = `Salah, Jawabannya ${currentAnswer}`;
    result.style.color = "red";
  }

  questionCount++;
  updateScore();

  if (questionCount < totalQuestions) {
    setTimeout(generateQuestion, 1000);
  } else {
    setTimeout(() => {
      document.getElementById('question').textContent =
        `Game Selesai, Skor Akhir ${currentScore * 10}/${totalQuestions * 10}`;
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

function appendToAnswer(val) {
  const input = document.getElementById('answer');
  input.value += val;
}

function deleteLast() {
  const input = document.getElementById('answer');
  input.value = input.value.slice(0, -1);
}
