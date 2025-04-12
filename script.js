let player = {};
let score = 0;
let currentQuestionIndex = 0;
let questions = [];

function startGame() {
  player.name = document.getElementById("name").value;
  player.age = document.getElementById("age").value;
  player.experience = document.getElementById("experience").value;

  if (!player.name || !player.age || !player.experience) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("setup-screen").classList.remove("hidden");
}

function beginQuiz() {
  score = 0;
  updateScore();
  currentQuestionIndex = 0;
  document.getElementById("setup-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  loadQuestions();
  showQuestion();
}

function updateScore() {
  document.getElementById("score-board").innerText = `Score: ${score}`;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestions() {
  questions = [
    { q: "Who led the Israelites out of Egypt?", a: "Moses", options: ["David", "Moses", "Noah", "Joshua"] },
    { q: "What did God create on the first day?", a: "Light", options: ["Light", "Animals", "Land", "Water"] },
    { q: "Who was swallowed by a great fish?", a: "Jonah", options: ["Moses", "Noah", "Jonah", "Peter"] },
    { q: "Where was Jesus born?", a: "Bethlehem", options: ["Nazareth", "Bethlehem", "Jerusalem", "Egypt"] },
    { q: "What is the last book of the Bible?", a: "Revelation", options: ["Genesis", "Matthew", "Psalms", "Revelation"] },
    { q: "Who built the ark?", a: "Noah", options: ["Moses", "Noah", "Adam", "Elijah"] },
    { q: "Who was the strongest man in the Bible?", a: "Samson", options: ["David", "Samson", "Saul", "Solomon"] },
    { q: "What did Jesus turn water into?", a: "Wine", options: ["Milk", "Oil", "Wine", "Honey"] },
    { q: "Who betrayed Jesus?", a: "Judas", options: ["Peter", "James", "Judas", "Thomas"] },
    { q: "How many disciples did Jesus have?", a: "12", options: ["10", "12", "14", "7"] },

    { q: "What is the first book of the Bible?", a: "Genesis", options: ["Genesis", "Exodus", "Psalms", "Matthew"] },
    { q: "What is the Golden Rule?", a: "Do unto others as you would have them do to you", options: ["Love your enemies", "Pray always", "Do unto others as you would have them do to you", "Honor your parents"] },
    { q: "Who was thrown into the lion's den?", a: "Daniel", options: ["Joseph", "Moses", "Daniel", "Samuel"] },
    { q: "What is the longest book in the Bible?", a: "Psalms", options: ["Proverbs", "Isaiah", "Psalms", "Genesis"] },
    { q: "Who denied Jesus three times?", a: "Peter", options: ["Judas", "John", "Peter", "Thomas"] },
    { q: "Who was the first man?", a: "Adam", options: ["Adam", "Abraham", "Moses", "Noah"] },
    { q: "Who was the first woman?", a: "Eve", options: ["Sarah", "Ruth", "Eve", "Mary"] },
    { q: "How many days did God take to create the world?", a: "6", options: ["7", "6", "5", "4"] },
    { q: "On what day did God rest?", a: "7th", options: ["1st", "6th", "7th", "3rd"] },
    { q: "Who killed Goliath?", a: "David", options: ["Samuel", "David", "Saul", "Solomon"] },

    { q: "Which apostle was a tax collector?", a: "Matthew", options: ["Peter", "John", "Matthew", "Thomas"] },
    { q: "Which apostle walked on water with Jesus?", a: "Peter", options: ["Paul", "James", "Peter", "Judas"] },
    { q: "Who received the Ten Commandments?", a: "Moses", options: ["Aaron", "David", "Moses", "Elijah"] },
    { q: "Which book comes after the Gospels?", a: "Acts", options: ["Revelation", "Romans", "Acts", "Hebrews"] },
    { q: "Who was known for his wisdom?", a: "Solomon", options: ["David", "Solomon", "Moses", "Job"] },
    { q: "Which woman became queen and saved her people?", a: "Esther", options: ["Ruth", "Mary", "Esther", "Deborah"] },
    { q: "Who is the father of many nations?", a: "Abraham", options: ["Jacob", "Joseph", "Abraham", "Isaac"] },
    { q: "What did Jesus feed the 5,000 with?", a: "Five loaves and two fish", options: ["Bread and wine", "Manna", "Five loaves and two fish", "Figs and dates"] },
    { q: "Which disciple doubted Jesus' resurrection?", a: "Thomas", options: ["Judas", "John", "Thomas", "James"] },
    { q: "What is the shortest verse in the Bible?", a: "Jesus wept", options: ["Jesus wept", "Love one another", "Pray without ceasing", "It is finished"] },

    { q: "Who interpreted Pharaoh’s dreams?", a: "Joseph", options: ["Moses", "Aaron", "Joseph", "Daniel"] },
    { q: "What river was Jesus baptized in?", a: "Jordan", options: ["Euphrates", "Nile", "Jordan", "Tigris"] },
    { q: "How many days and nights did it rain during the flood?", a: "40", options: ["30", "40", "7", "100"] },
    { q: "Who was the first king of Israel?", a: "Saul", options: ["David", "Solomon", "Saul", "Samuel"] },
    { q: "What did God give the Israelites to eat in the desert?", a: "Manna", options: ["Bread", "Quail", "Manna", "Fish"] },
    { q: "What did God confuse at the Tower of Babel?", a: "Language", options: ["Names", "Steps", "Language", "Weapons"] },
    { q: "What animal tempted Eve?", a: "Serpent", options: ["Lion", "Serpent", "Bird", "Wolf"] },
    { q: "How many books are in the Bible?", a: "66", options: ["60", "70", "66", "72"] },
    { q: "Which Gospel writer was a doctor?", a: "Luke", options: ["Mark", "Luke", "John", "Matthew"] },
    { q: "Who was raised from the dead after four days?", a: "Lazarus", options: ["Jesus", "Elijah", "Lazarus", "Paul"] },

    { q: "What is the first commandment?", a: "You shall have no other gods before me", options: ["Honor parents", "Keep Sabbath", "Do not steal", "You shall have no other gods before me"] },
    { q: "Who anointed David as king?", a: "Samuel", options: ["Eli", "Nathan", "Samuel", "Elijah"] },
    { q: "What fruit did Eve eat?", a: "Unknown fruit", options: ["Apple", "Fig", "Unknown fruit", "Grapes"] },
    { q: "Which prophet challenged Baal’s prophets?", a: "Elijah", options: ["Isaiah", "Ezekiel", "Elijah", "Daniel"] },
    { q: "What is the root of all evil?", a: "Love of money", options: ["Greed", "Lying", "Sin", "Love of money"] },
    { q: "Who wrote most of the Psalms?", a: "David", options: ["Moses", "David", "Solomon", "Asaph"] },
    { q: "What did Jesus do in the temple?", a: "Drove out merchants", options: ["Preached", "Healed", "Drove out merchants", "Prayed"] },
    { q: "Which apostle wrote Revelation?", a: "John", options: ["Peter", "James", "John", "Paul"] },
    { q: "How many plagues did Egypt face?", a: "10", options: ["7", "10", "12", "5"] }
  ];
  shuffle(questions);
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  const container = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");

  container.innerText = questionObj.q;
  choicesContainer.innerHTML = "";

  shuffle(questionObj.options).forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => handleAnswer(option);
    choicesContainer.appendChild(button);
  });
}

function handleAnswer(selected) {
  const correctAnswer = questions[currentQuestionIndex].a;
  if (selected === correctAnswer) {
    score += 10;
  } else {
    score -= 5;
  }

  updateScore();

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    submitGame();
  }
}

function useHint() {
  if (score >= 10) {
    score -= 10;
    updateScore();
    alert("Hint: The answer starts with " + questions[currentQuestionIndex].a.charAt(0));
  } else {
    alert("Not enough points for a hint.");
  }
}

function submitGame() {
  alert(`Game Over! Your score is: ${score}`);
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("leaderboard-screen").classList.remove("hidden");

  const listItem = document.createElement("li");
  listItem.innerText = `${player.name} - ${score} pts`;
  document.getElementById("leaderboard-list").appendChild(listItem);
}

function quitGame() {
  if (confirm("Are you sure you want to quit?")) {
    submitGame();
  }
}

function restartGame() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("leaderboard-list").innerHTML = "";
  document.getElementById("leaderboard-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
}
