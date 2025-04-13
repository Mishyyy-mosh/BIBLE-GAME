let player = {};
let score = 0;
let currentQuestionIndex = 0;


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

  const testament = document.getElementById("testament").value;
  const difficulty = document.getElementById("difficulty").value;

  // ✅ Get the correct set of questions
  if (questionBank[testament] && questionBank[testament][difficulty]) {
    questions = shuffle([...questionBank[testament][difficulty]]);
  } else {
    alert("No questions found for this selection.");
    return;
  }

  document.getElementById("setup-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  showQuestion(); // ✅ Now it will actually work
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

let questions = [];
const questionBank = {
 
  Old: {
    Easy: [
      { q: "Who built the ark?", a: "Noah", options: ["Abraham", "Moses", "Noah", "David"] },
      { q: "What was the name of the first woman?", a: "Eve", options: ["Sarah", "Eve", "Rachel", "Leah"] },
      { q: "How many plagues did God send upon Egypt?", a: "10", options: ["7", "10", "12", "5"] },
      { q: "Who led the Israelites out of Egypt?", a: "Moses", options: ["David", "Moses", "Noah", "Joshua"] },
      { q: "What was the name of Abraham's son?", a: "Isaac", options: ["Jacob", "Joseph", "Isaac", "Esau"] },
      { q: "Who interpreted Pharaoh's dreams?", a: "Joseph", options: ["Moses", "Joseph", "Daniel", "Samuel"] },
      { q: "What was the name of the mountain where Moses received the Ten Commandments?", a: "Mount Sinai", options: ["Mount Ararat", "Mount Sinai", "Mount Carmel", "Mount Zion"] },
      { q: "Who was the strongest man in the Bible?", a: "Samson", options: ["David", "Samson", "Goliath", "Solomon"] },
      { q: "Who was thrown into a lion's den?", a: "Daniel", options: ["Joseph", "Daniel", "Jonah", "Elijah"] },
      { q: "What was the name of the giant that David defeated?", a: "Goliath", options: ["Goliath", "Og", "Sihon", "Nimrod"] },
      { q: "What was the name of the first man?", a: "Adam", options: ["Adam", "Cain", "Abel", "Seth"] },
      { q: "How many days and nights did it rain during the flood?", a: "40", options: ["30", "40", "50", "60"] },
      { q: "What did God create on the seventh day?", a: "Rest", options: ["Light", "Animals", "Rest", "Man"] },
      { q: "Who was swallowed by a big fish?", a: "Jonah", options: ["Daniel", "Jonah", "Elijah", "Elisha"] },
      { q: "What was the sign of God's covenant with Noah?", a: "Rainbow", options: ["Dove", "Rainbow", "Fire", "Cloud"] },
      { q: "Who was Abraham's wife?", a: "Sarah", options: ["Eve", "Sarah", "Rebekah", "Leah"] },
      { q: "What did God create on the first day?", a: "Light", options: ["Sky", "Land", "Light", "Water"] },
      { q: "Who was the father of twelve sons?", a: "Jacob", options: ["Abraham", "Isaac", "Jacob", "Joseph"] },
      { q: "What was the name of Moses' brother?", a: "Aaron", options: ["Aaron", "Joshua", "Caleb", "Gideon"] },
      { q: "What was the name of Moses' sister?", a: "Miriam", options: ["Miriam", "Deborah", "Ruth", "Naomi"] },
      { q: "What did God create on the sixth day?", a: "Man and animals", options: ["Plants", "Fish", "Man and animals", "Birds"] },
      { q: "Who was the mother of Isaac?", a: "Sarah", options: ["Eve", "Sarah", "Rebekah", "Rachel"] },
      { q: "Who was the father of Isaac?", a: "Abraham", options: ["Adam", "Abraham", "Noah", "Jacob"] },
      { q: "What was the name of the garden where Adam and Eve lived?", a: "Garden of Eden", options: ["Garden of Gethsemane", "Garden of Eden", "Garden of Olives", "Garden of Shepherds"] },
      { q: "Who was the son of Adam and Eve who killed his brother?", a: "Cain", options: ["Abel", "Cain", "Seth", "Enosh"] },
      { q: "What was the name of the brother who was killed?", a: "Abel", options: ["Abel", "Cain", "Seth", "Enosh"] },
      { q: "What was the name of the tower that people tried to build to reach heaven?", a: "Tower of Babel", options: ["Tower of Zion", "Tower of Babel", "Tower of Jericho", "Tower of Jerusalem"] },
      { q: "Who was the father of Noah?", a: "Lamech", options: ["Methuselah", "Lamech", "Enoch", "Jared"] },
      { q: "Who was the oldest man in the Bible?", a: "Methuselah", options: ["Noah", "Abraham", "Methuselah", "Adam"] },
      { q: "What was the name of the mountain where Noah's ark rested?", a: "Mount Ararat", options: ["Mount Sinai", "Mount Ararat", "Mount Carmel", "Mount Zion"] },
      { q: "Who was the father of Joseph?", a: "Jacob", options: ["Isaac", "Jacob", "Abraham", "Moses"] },
      { q: "How many sons did Jacob have?", a: "12", options: ["10", "12", "14", "8"] },
      { q: "Who was sold into slavery by his brothers?", a: "Joseph", options: ["Benjamin", "Joseph", "Judah", "Levi"] },
      { q: "What was the name of the wife of Jacob that he loved the most?", a: "Rachel", options: ["Leah", "Rachel", "Bilhah", "Zilpah"] },
      { q: "Who was the mother of Moses?", a: "Jochebed", options: ["Miriam", "Jochebed", "Zipporah", "Elisheba"] },
      { q: "What was the name of the pharaoh who opposed Moses?", a: "Pharaoh", options: ["David", "Solomon", "Pharaoh", "Saul"] },
      { q: "What was the name of the sea that Moses parted?", a: "Red Sea", options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Sea of Galilee"] },
      { q: "Who was the successor of Moses?", a: "Joshua", options: ["Aaron", "Caleb", "Joshua", "Gideon"] },
      { q: "What was the name of the walls that fell in Jericho?", a: "Jericho", options: ["Jerusalem", "Jericho", "Ai", "Hebron"] },
      { q: "Who was the judge who used a fleece to test God?", a: "Gideon", options: ["Samson", "Gideon", "Jephthah", "Deborah"] },
      { q: "Who was the judge who was a woman?", a: "Deborah", options: ["Miriam", "Deborah", "Ruth", "Naomi"] },
      { q: "Who was the judge who made a vow and had to sacrifice his daughter?", a: "Jephthah", options: ["Samson", "Gideon", "Jephthah", "Ehud"] },
      { q: "Who was the husband of Ruth?", a: "Boaz", options: ["Elimelech", "Boaz", "Mahlon", "Chilion"] },
      { q: "Who was the prophet who anointed Saul and David?", a: "Samuel", options: ["Nathan", "Samuel", "Elijah", "Elisha"] },
      { q: "Who was the father of David?", a: "Jesse", options: ["Saul", "Jesse", "Samuel", "Jonathan"] },
      { q: "Who was the son of Saul and friend of David?", a: "Jonathan", options: ["Absalom", "Adonijah", "Jonathan", "Mephibosheth"] },
      { q: "Who was the king known for his wisdom?", a: "Solomon", options: ["David", "Solomon", "Saul", "Hezekiah"] },
      { q: "Who was the prophet who challenged the prophets of Baal?", a: "Elijah", options: ["Elisha", "Isaiah", "Elijah", "Jeremiah"] },
      { q: "Who was the prophet taken up to heaven in a whirlwind?", a: "Elijah", options: ["Elisha", "Isaiah", "Elijah", "Daniel"] },
      { q: "Who was the prophet who saw the valley of dry bones?", a: "Ezekiel", options: ["Jeremiah", "Ezekiel", "Daniel", "Hosea"] },
    ],

    Hard: [ { q: "What was the name of the land promised to Abraham's descendants?", a: "Canaan", options: ["Egypt", "Babylon", "Canaan", "Assyria"] },
    { q: "Which prophet challenged the prophets of Baal on Mount Carmel?", a: "Elijah", options: ["Elisha", "Isaiah", "Elijah", "Jeremiah"] },
    { q: "Who was the mother of Samuel?", a: "Hannah", options: ["Eve", "Sarah", "Hannah", "Rebekah"] },
    { q: "What was the name of the queen who saved the Jewish people from destruction?", a: "Esther", options: ["Ruth", "Esther", "Deborah", "Jezebel"] },
    { q: "Which book of the Old Testament focuses on wisdom and poetry?", a: "Psalms", options: ["Genesis", "Exodus", "Psalms", "Proverbs"] },
    { q: "What was the name of the first king of Israel?", a: "Saul", options: ["David", "Solomon", "Saul", "Josiah"] },
    { q: "How many sons did Jacob have?", a: "12", options: ["10", "12", "14", "8"] },
    { q: "Which prophet spoke of a 'suffering servant'?", a: "Isaiah", options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"] },
    { q: "What was the name of the priest who served in the tabernacle with Samuel?", a: "Eli", options: ["Aaron", "Eli", "Phinehas", "Hophni"] },
    { q: "What was the name of the son of Jonathan who was crippled?", a: "Mephibosheth", options: ["Absalom", "Adonijah", "Mephibosheth", "Shemaiah"] },
    { q: "What was the name of the wife of Isaac?", a: "Rebekah", options: ["Leah", "Rachel", "Rebekah", "Zilpah"] },
    { q: "What was the name of the brother of Moses?", a: "Aaron", options: ["Joshua", "Caleb", "Aaron", "Gershom"] },
    { q: "What was the name of the father-in-law of Moses?", a: "Jethro", options: ["Eli", "Jethro", "Hophni", "Phinehas"] },
    { q: "What was the name of the mountain where Elijah challenged the prophets of Baal?", a: "Mount Carmel", options: ["Mount Sinai", "Mount Carmel", "Mount Horeb", "Mount Nebo"] },
    { q: "What was the name of the king of Babylon who had a dream of a statue?", a: "Nebuchadnezzar", options: ["David", "Solomon", "Nebuchadnezzar", "Hezekiah"] },
    { q: "What was the name of the book that contains the laws for the priests?", a: "Leviticus", options: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"] },
    { q: "What was the name of the queen who was married to Ahasuerus?", a: "Esther", options: ["Ruth", "Esther", "Vashti", "Deborah"] },
    { q: "What was the name of the man who was hanged on the gallows he built?", a: "Haman", options: ["Mordecai", "Haman", "Ahasuerus", "Bigthan"] },
    { q: "What was the name of the book that tells about the rebuilding of Jerusalem?", a: "Nehemiah", options: ["Ezra", "Nehemiah", "Esther", "Haggai"] },
    { q: "What was the name of the prophet who was taken captive to Babylon?", a: "Daniel", options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"] },
    { q: "What was the name of the king who was healed after praying to God?", a: "Hezekiah", options: ["David", "Solomon", "Hezekiah", "Josiah"] },
    { q: "What was the name of the prophet who spoke about the new covenant?", a: "Jeremiah", options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"] },
    { q: "What was the name of the book that contains the songs of lament?", a: "Lamentations", options: ["Psalms", "Proverbs", "Ecclesiastes", "Lamentations"] },
    { q: "What was the name of the prophet who was a shepherd?", a: "Amos", options: ["Jonah", "Micah", "Amos", "Nahum"] },
    { q: "What was the name of the prophet who spoke about the coming of the Messiah?", a: "Micah", options: ["Hosea", "Joel", "Micah", "Habakkuk"] },
    { q: "What was the name of the prophet who was swallowed by a big fish?", a: "Jonah", options: ["Jonah", "Obadiah", "Zephaniah", "Haggai"] },
    { q: "What was the name of the prophet who spoke about the fall of Nineveh?", a: "Nahum", options: ["Nahum", "Habakkuk", "Zephaniah", "Malachi"] },
    { q: "What was the name of the prophet who questioned God's justice?", a: "Habakkuk", options: ["Joel", "Habakkuk", "Zechariah", "Malachi"] },
    { q: "What was the name of the prophet who spoke about the day of the Lord?", a: "Zephaniah", options: ["Haggai", "Zephaniah", "Malachi", "Micah"] },
    { q: "What was the name of the prophet who encouraged the rebuilding of the temple?", a: "Haggai", options: ["Haggai", "Zechariah", "Malachi", "Jonah"] },
    { q: "What was the name of the prophet who spoke about the coming of the righteous king?", a: "Zechariah", options: ["Zechariah", "Malachi", "Amos", "Obadiah"] },
    { q: "What was the name of the last prophet of the Old Testament?", a: "Malachi", options: ["Malachi", "Haggai", "Zechariah", "Micah"] },
    { q: "What was the name of the mountain where Moses received the law a second time?", a: "Mount Horeb", options: ["Mount Sinai", "Mount Horeb", "Mount Carmel", "Mount Zion"] },
    { q: "What was the name of the first high priest?", a: "Aaron", options: ["Moses", "Aaron", "Joshua", "Samuel"] },
    { q: "What was the name of the book that tells about the census of Israel?", a: "Numbers", options: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"] },
    { q: "What was the name of the judge who killed Eglon?", a: "Ehud", options: ["Gideon", "Samson", "Ehud", "Jephthah"] },
    { q: "What was the name of the woman who killed Sisera?", a: "Jael", options: ["Deborah", "Jael", "Miriam", "Ruth"] },
    { q: "What was the name of the king who built the first temple?", a: "Solomon", options: ["David", "Solomon", "Saul", "Hezekiah"] },
    { q: "What was the name of the queen of Sheba?", a: "Queen of Sheba", options: ["Esther", "Queen of Sheba", "Ruth", "Deborah"] },
    { q: "What was the name of the prophet who was fed by ravens?", a: "Elijah", options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"] },
    { q: "What was the name of the prophet who healed Naaman?", a: "Elisha", options: ["Elijah", "Elisha", "Daniel", "Ezekiel"] },
    { q: "What was the name of the book that tells about the history of Israel from Joshua to Samuel?", a: "Judges", options: ["Joshua", "Judges", "Ruth", "1 Samuel"] },
    { q: "What was the name of the book that tells about the love story of Ruth and Boaz?", a: "Ruth", options: ["Ruth", "Esther", "Song of Solomon", "Lamentations"] },
    { q: "What was the name of the book that contains the proverbs of Solomon?", a: "Proverbs", options: ["Proverbs", "Psalms", "Ecclesiastes", "Job"] },
    { q: "What was the name of the book that tells about the vanity of life?", a: "Ecclesiastes", options: ["Job", "Proverbs", "Ecclesiastes", "Psalms"] },
    { q: "What was the name of the book that is a collection of love poems?", a: "Song of Solomon", options: ["Song of Solomon", "Lamentations", "Proverbs", "Ecclesiastes"] },
    { q: "What was the name of the book that tells about the suffering of Job?", a: "Job", options: ["Job", "Psalms", "Proverbs", "Ecclesiastes"] },
    { q: "What was the name of the book that tells about the fall of Jerusalem?", a: "Lamentations", options: ["Lamentations", "Jeremiah", "Ezekiel", "Daniel"] },
    { q: "What was the name of the book that tells about the restoration of Israel?", a: "Ezra", options: ["Ezra", "Nehemiah", "Esther", "Haggai"] },
  ],

    ReallyHard: [  { q: "In what book is the Song of Deborah found?", a: "Judges", options: ["Joshua", "Judges", "Ruth", "1 Samuel"] },
  { q: "What was the name of the city that Joshua conquered after marching around it for seven days?", a: "Jericho", options: ["Ai", "Jerusalem", "Jericho", "Hebron"] },
  { q: "Which prophet was taken to heaven in a whirlwind?", a: "Elijah", options: ["Elisha", "Elijah", "Ezekiel", "Daniel"] },
  { q: "What was the name of the king who had a dream of a tree being cut down?", a: "Nebuchadnezzar", options: ["David", "Solomon", "Nebuchadnezzar", "Hezekiah"] },
  { q: "What does the name 'Melchizedek' mean?", a: "King of righteousness", options: ["King of peace", "King of righteousness", "Priest of God", "Prophet of truth"] },
  { q: "Which book describes the rebuilding of the walls of Jerusalem?", a: "Nehemiah", options: ["Ezra", "Nehemiah", "Esther", "Haggai"] },
  { q: "What was the name of the judge who made a rash vow that cost him his daughter?", a: "Jephthah", options: ["Gideon", "Samson", "Jephthah", "Barak"] },
  { q: "In which book is the 'valley of dry bones' vision found?", a: "Ezekiel", options: ["Jeremiah", "Ezekiel", "Daniel", "Zechariah"] },
  { q: "What was the name of the person who was the ancestor of king David?", a: "Ruth", options: ["Naomi", "Ruth", "Boaz", "Orpah"] },
  { q: "What was the name of the son of Moses and Zipporah?", a: "Gershom", options: ["Eleazar", "Gershom", "Phinehas", "Ithamar"] },
  { q: "What was the name of the tribe that was not given an inheritance of land?", a: "Levi", options: ["Judah", "Levi", "Benjamin", "Ephraim"] },
  { q: "What was the name of the king of Moab who oppressed Israel?", a: "Eglon", options: ["Balak", "Eglon", "Sisera", "Jabin"] },
  { q: "What was the name of the prophet who told Hezekiah to set his house in order?", a: "Isaiah", options: ["Isaiah", "Jeremiah", "Ezekiel", "Micah"] },
  { q: "What was the name of the prophet who was thrown into a cistern?", a: "Jeremiah", options: ["Jeremiah", "Daniel", "Ezekiel", "Zechariah"] },
  { q: "What was the name of the king who burned the scroll of Jeremiah?", a: "Jehoiakim", options: ["Josiah", "Jehoiakim", "Zedekiah", "Hezekiah"] },
  { q: "What was the name of the prophet who saw a vision of four beasts?", a: "Daniel", options: ["Daniel", "Ezekiel", "Zechariah", "Hosea"] },
  { q: "What was the name of the prophet who was told to marry a prostitute?", a: "Hosea", options: ["Hosea", "Joel", "Amos", "Jonah"] },
  { q: "What was the name of the prophet who saw a plague of locusts?", a: "Joel", options: ["Joel", "Obadiah", "Micah", "Habakkuk"] },
  { q: "What was the name of the prophet who spoke against Edom?", a: "Obadiah", options: ["Obadiah", "Jonah", "Nahum", "Zephaniah"] },
  { q: "What was the name of the prophet who was angry at God for sparing Nineveh?", a: "Jonah", options: ["Jonah", "Micah", "Habakkuk", "Haggai"] },
  { q: "What was the name of the prophet who spoke about the fall of Nineveh?", a: "Nahum", options: ["Nahum", "Habakkuk", "Zephaniah", "Malachi"] },
  { q: "What was the name of the prophet who spoke about the judgment of Judah?", a: "Habakkuk", options: ["Habakkuk", "Zephaniah", "Haggai", "Zechariah"] },
  { q: "What was the name of the prophet who spoke about the day of the Lord?", a: "Zephaniah", options: ["Zephaniah", "Haggai", "Zechariah", "Malachi"] },
  { q: "What was the name of the prophet who encouraged the rebuilding of the temple?", a: "Haggai", options: ["Haggai", "Zechariah", "Malachi", "Jonah"] },
  { q: "What was the name of the prophet who spoke about the coming of the righteous king?", a: "Zechariah", options: ["Zechariah", "Malachi", "Amos", "Obadiah"] },
  { q: "What was the name of the last prophet of the Old Testament?", a: "Malachi", options: ["Malachi", "Haggai", "Zechariah", "Micah"] },
  { q: "What was the name of the mountain where Moses died?", a: "Mount Nebo", options: ["Mount Sinai", "Mount Horeb", "Mount Carmel", "Mount Nebo"] },
  { q: "What was the name of the book that tells about the second giving of the law?", a: "Deuteronomy", options: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"] },
  { q: "What was the name of the judge who killed 600 Philistines with an ox goad?", a: "Shamgar", options: ["Gideon", "Samson", "Shamgar", "Jephthah"] },
  { q: "What was the name of the woman who was the mother of Samson?", a: "Manoah's wife", options: ["Deborah", "Jael", "Miriam", "Manoah's wife"] },
  { q: "What was the name of the king who built the second temple?", a: "Zerubbabel", options: ["David", "Solomon", "Zerubbabel", "Hezekiah"] },
  { q: "What was the name of the queen who refused to come before the king?", a: "Vashti", options: ["Esther", "Queen of Sheba", "Ruth", "Vashti"] },
  { q: "What was the name of the prophet who was taken to heaven in a chariot of fire?", a: "Elijah", options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"] },
  { q: "What was the name of the prophet who saw a vision of a valley full of dry bones?", a: "Ezekiel", options: ["Elijah", "Elisha", "Daniel", "Ezekiel"] },
  { q: "What was the name of the book that tells about the history of Israel from Samuel to Solomon?", a: "1 and 2 Samuel", options: ["1 and 2 Samuel", "1 and 2 Kings", "1 and 2 Chronicles", "1 and 2 Judges"] },
  { q: "What was the name of the book that tells about the history of Israel from Solomon to the exile?", a: "1 and 2 Kings", options: ["1 and 2 Kings", "1 and 2 Chronicles", "1 and 2 Samuel", "1 and 2 Judges"] },
  { q: "What was the name of the book that tells about the history of Israel from Adam to the exile?", a: "1 and 2 Chronicles", options: ["1 and 2 Chronicles", "1 and 2 Kings", "1 and 2 Samuel", "1 and 2 Judges"] },
  { q: "What was the name of the book that contains the prayers and praises of Israel?", a: "Psalms", options: ["Psalms", "Proverbs", "Ecclesiastes", "Job"] },
  { q: "What was the name of the book that contains the wisdom of Solomon?", a: "Proverbs", options: ["Proverbs", "Psalms", "Ecclesiastes", "Job"] },
  { q: "What was the name of the book that tells about the meaninglessness of life?", a: "Ecclesiastes", options: ["Job", "Proverbs", "Ecclesiastes", "Psalms"] },
  { q: "What was the name of the book that tells about the love between a man and a woman?", a: "Song of Solomon", options: ["Song of Solomon", "Lamentations", "Proverbs", "Ecclesiastes"] },
  { q: "What was the name of the book that tells about the trials of a righteous man?", a: "Job", options: ["Job", "Psalms", "Proverbs", "Ecclesiastes"] },
  { q: "What was the name of the book that tells about the weeping over Jerusalem?", a: "Lamentations", options: ["Lamentations", "Jeremiah", "Ezekiel", "Daniel"] },
  { q: "What was the name of the book that tells about the return from exile?", a: "Ezra", options: ["Ezra", "Nehemiah", "Esther", "Haggai"] },
  { q: "What was the name of the book that tells about the rebuilding of the walls of Jerusalem?", a: "Nehemiah", options: ["Nehemiah", "Ezra", "Esther", "Zechariah"] },
  { q: "What was the name of the book that tells about the deliverance of the Jews from Haman?", a: "Esther", options: ["Esther", "Ezra", "Nehemiah", "Malachi"] },
  { q: "What was the name of the book that tells about the rebuilding of the temple?", a: "Haggai", options: ["Haggai", "Zechariah", "Malachi", "Jonah"] },
  { q: "What was the name of the book that tells about the visions of Zechariah?", a: "Zechariah", options: ["Zechariah", "Malachi", "Amos", "Obadiah"] },
  { q: "What was the name of the book that tells about the coming of Elijah?", a: "Malachi", options: ["Malachi", "Haggai", "Zechariah", "Micah"] },
],
    Extreme: [ { q: "What is the significance of the 'Urim and Thummim'?", a: "Means of divine communication", options: ["Musical instruments", "Means of divine communication", "Sacrificial tools", "Royal garments"] },
    { q: "Explain the concept of the 'Day of Atonement' (Yom Kippur) in Leviticus.", a: "Annual day for Israel's atonement", options: ["Weekly Sabbath", "Annual day for Israel's atonement", "Monthly new moon festival", "Daily sacrifice"] },
    { q: "What is the literary structure of the book of Job?", a: "Poetic dialogue within a narrative framework", options: ["Historical narrative", "Collection of proverbs", "Poetic dialogue within a narrative framework", "Prophetic oracles"] },
    { q: "Describe the symbolism of the bronze serpent in Numbers 21.", a: "Symbol of healing through faith", options: ["Symbol of judgment", "Symbol of healing through faith", "Symbol of rebellion", "Symbol of idolatry"] },
    { q: "What are the implications of the 'Covenant of Salt' mentioned in Numbers 18:19?", a: "Perpetual and incorruptible covenant", options: ["Temporary agreement", "Perpetual and incorruptible covenant", "Conditional promise", "Symbolic offering"] },
    { q: "What are the Messianic prophecies found in the book of Isaiah?", a: "Prophecies of the coming Messiah", options: ["Prophecies of judgment", "Prophecies of the coming Messiah", "Prophecies of restoration", "Prophecies of exile"] },
    { q: "Explain the significance of the 'writing on the wall' in the book of Daniel.", a: "Divine judgment and the fall of Babylon", options: ["Royal decree", "Divine judgment and the fall of Babylon", "Prophetic warning", "Historical record"] },
    { q: "What is the significance of the 'goel' (kinsman-redeemer) in the book of Ruth?", a: "Representation of God's redemption", options: ["Royal title", "Representation of God's redemption", "Military leader", "Priestly role"] },
    { q: "What are the different interpretations of the 'Leviathan' in the Old Testament?", a: "Symbol of chaos or a powerful creature", options: ["Symbol of peace", "Symbol of chaos or a powerful creature", "Symbol of creation", "Symbol of salvation"] },
    { q: "What is the significance of the offerings mentioned in Leviticus?", a: "Means of atonement and fellowship with God", options: ["Means of taxation", "Means of atonement and fellowship with God", "Means of social gathering", "Means of trade"] },
    { q: "Explain the significance of the 'cities of refuge' in the book of Numbers.", a: "Places of protection for those who committed unintentional manslaughter", options: ["Military fortresses", "Places of protection for those who committed unintentional manslaughter", "Royal palaces", "Religious shrines"] },
    { q: "What is the purpose of the 'Year of Jubilee' described in Leviticus 25?", a: "Restoration of land and freedom", options: ["Annual harvest festival", "Restoration of land and freedom", "Military celebration", "Royal coronation"] },
    { q: "Describe the role of the 'Nazirite vow' in the Old Testament.", a: "Vow of consecration to God", options: ["Vow of poverty", "Vow of silence", "Vow of consecration to God", "Vow of military service"] },
    { q: "What is the significance of the 'Tabernacle' in the wilderness?", a: "Portable sanctuary for God's presence", options: ["Royal residence", "Portable sanctuary for God's presence", "Military headquarters", "Marketplace"] },
    { q: "Explain the concept of 'the ban' (herem) in the conquest of Canaan.", a: "Command to devote conquered cities and people to destruction", options: ["Command to establish trade agreements", "Command to devote conquered cities and people to destruction", "Command to form alliances", "Command to collect tribute"] },
    { q: "What are the different interpretations of the 'Song of Songs'?", a: "Allegorical representation of God's love for Israel or Christ's love for the church", options: ["Historical account", "Collection of proverbs", "Allegorical representation of God's love for Israel or Christ's love for the church", "Military epic"] },
    { q: "Describe the significance of the 'covenant with David' in 2 Samuel 7.", a: "Promise of an everlasting dynasty", options: ["Promise of military victory", "Promise of an everlasting dynasty", "Promise of wealth and prosperity", "Promise of religious purity"] },
    { q: "What is the purpose of the 'book of the law' found in the temple during Josiah's reign?", a: "Call to national repentance and covenant renewal", options: ["Record of royal decrees", "Call to national repentance and covenant renewal", "Collection of wisdom sayings", "Military strategy manual"] },
    { q: "Explain the concept of 'divine wisdom' as presented in the book of Proverbs.", a: "Skillful living in accordance with God's will", options: ["Accumulation of knowledge", "Skillful living in accordance with God's will", "Military strategy", "Political power"] },
    { q: "What are the different interpretations of the 'suffering servant' in Isaiah 53?", a: "Messianic prophecy of Jesus Christ", options: ["Historical figure", "Messianic prophecy of Jesus Christ", "Symbol of Israel", "Allegory of human suffering"] },
    { q: "Describe the symbolism of the 'new covenant' in Jeremiah 31.", a: "Inward transformation and forgiveness of sins", options: ["Military alliance", "Inward transformation and forgiveness of sins", "Political treaty", "Economic agreement"] },
    { q: "What is the significance of the 'valley of dry bones' vision in Ezekiel 37?", a: "Symbol of Israel's restoration", options: ["Symbol of military defeat", "Symbol of Israel's restoration", "Symbol of economic prosperity", "Symbol of religious purity"] },
    { q: "Explain the concept of 'theodicy' as addressed in the book of Job.", a: "Justification of God's ways in the face of suffering", options: ["Denial of suffering", "Justification of God's ways in the face of suffering", "Rejection of God's existence", "Celebration of human power"] },
    { q: "What are the different interpretations of the 'son of man' in Daniel 7?", a: "Messianic figure with dominion and glory", options: ["Historical king", "Messianic figure with dominion and glory", "Symbol of Israel", "Allegory of human power"] },
    { q: "Describe the significance of the 'day of the Lord' in the prophetic books.", a: "Day of judgment and salvation", options: ["Day of military victory", "Day of judgment and salvation", "Day of economic prosperity", "Day of religious celebration"] },
    { q: "What is the purpose of the 'book of the twelve' (minor prophets) as a collection?", a: "Call to repentance and restoration", options: ["Military strategy manual", "Call to repentance and restoration", "Collection of wisdom sayings", "Historical record"] },
    { q: "Explain the concept of 'the remnant' in the Old Testament.", a: "Faithful few who remain after judgment", options: ["Military elite", "Faithful few who remain after judgment", "Economic leaders", "Political rulers"] },
    { q: "What are the different interpretations of the 'wisdom literature' (Job, Proverbs, Ecclesiastes)?", a: "Exploration of life's meaning and purpose", options: ["Collection of historical accounts", "Exploration of life's meaning and purpose", "Military strategy manuals", "Political treatises"] },
    { q: "Describe the significance of the 'covenant with Abraham' in Genesis 15.", a: "Promise of land, descendants, and blessing", options: ["Promise of military victory", "Promise of land, descendants, and blessing", "Promise of wealth and prosperity", "Promise of religious purity"] },
    { q: "What is the purpose of the 'book of Deuteronomy' in the Pentateuch?", a: "Renewal of the covenant and preparation for entering Canaan", options: ["Record of royal decrees", "Renewal of the covenant and preparation for entering Canaan", "Collection of wisdom sayings", "Military strategy manual"] },
    { q: "Explain the concept of 'the image of God' (imago Dei) in Genesis 1.", a: "Humanity's unique relationship with God", options: ["Humanity's physical resemblance to God", "Humanity's unique relationship with God", "Humanity's military power", "Humanity's economic wealth"] },
    { q: "What are the different interpretations of the 'garden of Eden' narrative?", a: "Symbol of humanity's original state and fall", options: ["Historical account", "Symbol of humanity's original state and fall", "Military epic", "Political allegory"] },
    { q: "Describe the significance of the 'flood narrative' in Genesis 6-9.", a: "Judgment and salvation of humanity", options: ["Historical account of a local flood", "Judgment and salvation of humanity", "Military epic", "Political allegory"] },
    { q: "What is the purpose of the 'book of Exodus' in the Pentateuch?", a: "Deliverance from slavery and covenant at Sinai", options: ["Record of royal decrees", "Deliverance from slavery and covenant at Sinai", "Collection of wisdom sayings", "Military strategy manual"] },
    { q: "Explain the concept of 'the law' (Torah) in the Old Testament.", a: "Instruction and guidance for living in covenant with God", options: ["Collection of legal codes", "Instruction and guidance for living in covenant with God", "Military strategy manual", "Political treatise"] },
    { q: "What are the different interpretations of the 'Exodus event'?", a: "Act of divine deliverance and redemption", options: ["Historical migration", "Act of divine deliverance and redemption", "Military victory", "Political revolution"] },
    { q: "Describe the significance of the 'covenant with Noah' in Genesis 9.", a: "Promise of God's commitment never to destroy all life by flood again", options: [ "Promise of military victory over enemies","Promise of God's commitment never to destroy all life by flood again","Promise of economic prosperity for Noah's descendants","Promise of political dominion over all nations"]},
  ],
  },

  New: {
    Easy: [{ q: "Who was the mother of Jesus?", a: "Mary", options: ["Martha", "Mary", "Elizabeth", "Salome"] },
  { q: "Where was Jesus born?", a: "Bethlehem", options: ["Jerusalem", "Bethlehem", "Nazareth", "Capernaum"] },
  { q: "Who baptized Jesus?", a: "John the Baptist", options: ["Peter", "John the Baptist", "Andrew", "James"] },
  { q: "How many disciples did Jesus have?", a: "12", options: ["10", "12", "14", "16"] },
  { q: "Who betrayed Jesus?", a: "Judas Iscariot", options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"] },
  { q: "Where was Jesus crucified?", a: "Golgotha", options: ["Bethlehem", "Golgotha", "Nazareth", "Jerusalem"] },
  { q: "Who was the first apostle to see the resurrected Jesus?", a: "Mary Magdalene", options: ["Mary Magdalene", "Peter", "John", "Thomas"] },
  { q: "Who wrote the book of Acts?", a: "Luke", options: ["Matthew", "Mark", "Luke", "John"] },
  { q: "Who wrote most of the New Testament letters?", a: "Paul", options: ["Peter", "John", "Paul", "James"] },
  { q: "What is the name of the last book of the bible?", a: "Revelation", options: ["Hebrews", "Revelation", "Jude", "Philemon"] },
  { q: "Who was the earthly father of Jesus?", a: "Joseph", options: ["David", "Joseph", "Abraham", "Moses"] },
  { q: "What angel announced Jesus' birth to Mary?", a: "Gabriel", options: ["Michael", "Gabriel", "Raphael", "Uriel"] },
  { q: "What was the name of the king who tried to kill baby Jesus?", a: "Herod", options: ["Pilate", "Herod", "Caesar", "Tiberius"] },
  { q: "What was Jesus' occupation before his ministry?", a: "Carpenter", options: ["Fisherman", "Carpenter", "Tax collector", "Shepherd"] },
  { q: "In what river was Jesus baptized?", a: "Jordan River", options: ["Nile River", "Jordan River", "Tigris River", "Euphrates River"] },
  { q: "What was Jesus' first miracle?", a: "Turning water into wine", options: ["Healing a blind man", "Raising Lazarus", "Turning water into wine", "Walking on water"] },
  { q: "Who walked on water with Jesus?", a: "Peter", options: ["Andrew", "Peter", "James", "John"] },
  { q: "What was the name of the tax collector who followed Jesus?", a: "Matthew", options: ["Zacchaeus", "Matthew", "Levi", "Simon"] },
  { q: "Who was the brother of Peter?", a: "Andrew", options: ["James", "John", "Andrew", "Philip"] },
  { q: "What was the name of the disciple known as 'the beloved'?", a: "John", options: ["Peter", "James", "John", "Thomas"] },
  { q: "Who denied Jesus three times?", a: "Peter", options: ["Judas", "Peter", "Thomas", "Matthew"] },
  { q: "What happened on Pentecost?", a: "Descent of the Holy Spirit", options: ["Jesus' birth", "Jesus' resurrection", "Descent of the Holy Spirit", "The Last Supper"] },
  { q: "Who was the first Christian martyr?", a: "Stephen", options: ["Peter", "Stephen", "Paul", "James"] },
  { q: "Who was converted on the road to Damascus?", a: "Paul", options: ["Peter", "John", "Paul", "Barnabas"] },
  { q: "What is the 'Golden Rule'?", a: "Treat others as you want to be treated", options: ["Love your enemies", "Turn the other cheek", "Treat others as you want to be treated", "Forgive seventy times seven"] },
  { q: "What is the name of the prayer Jesus taught his disciples?", a: "The Lord's Prayer", options: ["The Lord's Prayer", "The Apostles' Creed", "The Nicene Creed", "The Shema"] },
  { q: "Who was the Roman governor who sentenced Jesus to death?", a: "Pontius Pilate", options: ["Herod", "Pontius Pilate", "Caesar", "Tiberius"] },
  { q: "What was the name of the man who helped Jesus carry the cross?", a: "Simon of Cyrene", options: ["Joseph of Arimathea", "Nicodemus", "Simon of Cyrene", "Barabbas"] },
  { q: "How many books are in the New Testament?", a: "27", options: ["25", "27", "29", "31"] },
  { q: "What is the name of the book that tells about the early church?", a: "Acts", options: ["Romans", "Acts", "Galatians", "Ephesians"] },
  { q: "What is the name of the book that tells about the end times?", a: "Revelation", options: ["Hebrews", "Revelation", "Jude", "Philemon"] },
  { q: "What is the name of the book that tells about the life of Jesus?", a: "Gospels", options: ["Acts", "Gospels", "Epistles", "Revelation"] },
  { q: "What are the first four books of the New Testament?", a: "Matthew, Mark, Luke, John", options: ["Acts, Romans, Corinthians, Galatians", "Matthew, Mark, Luke, John", "Hebrews, James, Peter, John", "Revelation, Jude, Philemon, Titus"] },
  { q: "Who was the disciple known as 'doubting'?", a: "Thomas", options: ["Peter", "James", "John", "Thomas"] },
  { q: "What was the name of the man Jesus raised from the dead?", a: "Lazarus", options: ["Jairus", "Lazarus", "Bartimaeus", "Malchus"] },
  { q: "What was the name of the short tax collector who climbed a tree?", a: "Zacchaeus", options: ["Matthew", "Zacchaeus", "Levi", "Simon"] },
  { q: "What was the name of the place where Jesus prayed before his arrest?", a: "Garden of Gethsemane", options: ["Garden of Eden", "Garden of Gethsemane", "Garden of Olives", "Garden of Shepherds"] },
  { q: "Who was the high priest who questioned Jesus?", a: "Caiaphas", options: ["Annas", "Caiaphas", "Gamaliel", "Nicodemus"] },
  { q: "What was the name of the criminal released instead of Jesus?", a: "Barabbas", options: ["Barabbas", "Simon", "Joseph", "Nicodemus"] },
  { q: "What was the name of the man who buried Jesus?", a: "Joseph of Arimathea", options: ["Joseph of Arimathea", "Nicodemus", "Simon of Cyrene", "Barabbas"] },
  { q: "How many days after the resurrection did Jesus ascend to heaven?", a: "40", options: ["30", "40", "50", "60"] },
  { q: "What was the name of the first Gentile convert?", a: "Cornelius", options: ["Cornelius", "Lydia", "Aquila", "Priscilla"] },
  { q: "Who was Paul's companion on his missionary journeys?", a: "Barnabas", options: ["Silas", "Timothy", "Barnabas", "Titus"] },
  { q: "What was the name of the island where John wrote Revelation?", a: "Patmos", options: ["Crete", "Patmos", "Malta", "Cyprus"] },
  { q: "What was the name of the first church in Europe?", a: "Philippi", options: ["Corinth", "Ephesus", "Philippi", "Thessalonica"] },
  { q: "What was the name of the woman who sold purple cloth?", a: "Lydia", options: ["Lydia", "Priscilla", "Chloe", "Phoebe"] },
  { q: "What was the name of the couple who were tentmakers with Paul?", a: "Aquila and Priscilla", options: ["Aquila and Priscilla", "Ananias and Sapphira", "Philemon and Apphia", "Jason and Sosipater"] },
  { q: "What was the name of the slave whose letter Paul wrote?", a: "Onesimus", options: ["Onesimus", "Titus", "Timothy", "Epaphroditus"] },
  { q: "What was the name of the book written to Jewish Christians?", a: "Hebrews", options: ["Hebrews", "James", "Jude", "Revelation"] },
  { q: "What was the name of the brother of Jesus who wrote a book?", a: "James", options: ["James", "Jude", "John", "Peter"] },

],
    Hard: [{ q: "What was the name of the tax collector who followed Jesus?", a: "Matthew", options: ["Zacchaeus", "Matthew", "Levi", "Simon"] },
    { q: "Who was the Roman governor who sentenced Jesus to death?", a: "Pontius Pilate", options: ["Herod", "Pontius Pilate", "Caesar", "Tiberius"] },
    { q: "What was the name of the man who helped Jesus carry the cross?", a: "Simon of Cyrene", options: ["Joseph of Arimathea", "Nicodemus", "Simon of Cyrene", "Barabbas"] },
    { q: "In which book is the 'Sermon on the Mount' found?", a: "Matthew", options: ["Mark", "Luke", "Matthew", "John"] },
    { q: "Who was the first Christian martyr?", a: "Stephen", options: ["Peter", "Stephen", "Paul", "James"] },
    { q: "What was the name of the Pharisee who secretly followed Jesus?", a: "Nicodemus", options: ["Joseph of Arimathea", "Nicodemus", "Gamaliel", "Annas"] },
    { q: "What was the name of the island where John wrote the book of Revelation?", a: "Patmos", options: ["Crete", "Patmos", "Malta", "Cyprus"] },
    { q: "What was the name of the church that Paul wrote to that was in Corinth?", a: "Corinthians", options: ["Ephesians", "Philippians", "Corinthians", "Colossians"] },
    { q: "What was the name of the person who’s house the early church met in?", a: "Mary, the mother of John Mark", options: ["Lydia", "Mary, the mother of John Mark", "Priscilla", "Chloe"] },
    { q: "What was the name of the Roman centurion who was converted by Peter?", a: "Cornelius", options: ["Julius", "Cornelius", "Felix", "Festus"] },
    { q: "What was the name of the man who replaced Judas Iscariot?", a: "Matthias", options: ["Matthias", "Barnabas", "Silas", "Timothy"] },
    { q: "What was the name of the couple struck dead for lying about their offering?", a: "Ananias and Sapphira", options: ["Aquila and Priscilla", "Ananias and Sapphira", "Philemon and Apphia", "Jason and Sosipater"] },
    { q: "What was the name of the sorcerer who opposed Paul and Barnabas?", a: "Elymas", options: ["Simon Magus", "Elymas", "Apollos", "Demetrius"] },
    { q: "What was the name of the young man who fell asleep during Paul's sermon?", a: "Eutychus", options: ["Titus", "Timothy", "Eutychus", "Philemon"] },
    { q: "What was the name of the goddess worshipped in Ephesus?", a: "Artemis", options: ["Aphrodite", "Artemis", "Athena", "Hera"] },
    { q: "What was the name of the Jewish teacher who taught Apollos?", a: "Aquila and Priscilla", options: ["Apollos", "Aquila and Priscilla", "Barnabas", "Silas"] },
    { q: "What was the name of the man who was stoned in Lystra?", a: "Paul", options: ["Barnabas", "Silas", "Paul", "Timothy"] },
    { q: "What was the name of the island where Paul was shipwrecked?", a: "Malta", options: ["Crete", "Patmos", "Malta", "Cyprus"] },
    { q: "What was the name of the governor before whom Paul was tried?", a: "Felix", options: ["Festus", "Felix", "Agrippa", "Gallio"] },
    { q: "What was the name of the king before whom Paul defended himself?", a: "Agrippa", options: ["Festus", "Felix", "Agrippa", "Gallio"] },
    { q: "What was the name of the lawyer who accused Paul?", a: "Tertullus", options: ["Tertullus", "Lysias", "Ananias", "Demetrius"] },
    { q: "What was the name of the high priest who ordered Paul to be struck?", a: "Ananias", options: ["Annas", "Caiaphas", "Ananias", "Gamaliel"] },
    { q: "What was the name of the commander who protected Paul?", a: "Claudius Lysias", options: ["Claudius Lysias", "Julius", "Cornelius", "Felix"] },
    { q: "What was the name of the silversmith who stirred up a riot against Paul?", a: "Demetrius", options: ["Demetrius", "Tertullus", "Lysias", "Ananias"] },
    { q: "What was the name of the man who was healed of blindness by Ananias?", a: "Paul", options: ["Barnabas", "Silas", "Paul", "Timothy"] },
    { q: "What was the name of the man who was called 'the son of encouragement'?", a: "Barnabas", options: ["Barnabas", "Silas", "Timothy", "Titus"] },
    { q: "What was the name of the young pastor who Paul mentored?", a: "Timothy", options: ["Titus", "Timothy", "Onesimus", "Epaphroditus"] },
    { q: "What was the name of the pastor who was left in Crete?", a: "Titus", options: ["Titus", "Timothy", "Onesimus", "Epaphroditus"] },
    { q: "What was the name of the messenger who brought Paul's letter to Philippi?", a: "Epaphroditus", options: ["Titus", "Timothy", "Onesimus", "Epaphroditus"] },
    { q: "What was the name of the woman who was a deaconess in Cenchreae?", a: "Phoebe", options: ["Lydia", "Priscilla", "Chloe", "Phoebe"] },
    { q: "What was the name of the woman who hosted a church in her house?", a: "Chloe", options: ["Lydia", "Priscilla", "Chloe", "Phoebe"] },
    { q: "What was the name of the man who was a leader of the synagogue in Corinth?", a: "Crispus", options: ["Crispus", "Sosthenes", "Gallio", "Justus"] },
    { q: "What was the name of the man who was beaten before Gallio?", a: "Sosthenes", options: ["Crispus", "Sosthenes", "Gallio", "Justus"] },
    { q: "What was the name of the man who was a Roman official in Achaia?", a: "Gallio", options: ["Crispus", "Sosthenes", "Gallio", "Justus"] },
    { q: "What was the name of the man who was a Gentile worshipper of God in Corinth?", a: "Justus", options: ["Crispus", "Sosthenes", "Gallio", "Justus"] },
    { q: "What was the name of the man who was a Jewish tentmaker with Paul?", a: "Aquila", options: ["Aquila", "Apollos", "Barnabas", "Silas"] },
    { q: "What was the name of the man who was an eloquent speaker from Alexandria?", a: "Apollos", options: ["Aquila", "Apollos", "Barnabas", "Silas"] },
    { q: "What was the name of the man who was a Jewish convert from Crete?", a: "Titus", options: ["Titus", "Timothy", "Onesimus", "Epaphroditus"] },
    { q: "What was the name of the man who was a runaway slave?", a: "Onesimus", options: ["Onesimus", "Titus", "Timothy", "Epaphroditus"] },
    { q: "What was the name of the man who was a fellow prisoner with Paul?", a: "Epaphras", options: ["Epaphras", "Titus", "Timothy", "Onesimus"] },
    { q: "What was the name of the man who was a physician and companion of Paul?", a: "Luke", options: ["Luke", "Mark", "John", "Peter"] },
    { q: "What was the name of the man who was a cousin of Barnabas?", a: "Mark", options: ["Luke", "Mark", "John", "Peter"] },
    { q: "What was the name of the man who was a disciple of Jesus and wrote a gospel?", a: "John", options: ["Luke", "Mark", "John", "Peter"] },
    { q: "What was the name of the man who was a disciple of Jesus and wrote two epistles?", a: "Peter", options: ["Luke", "Mark", "John", "Peter"] },
    { q: "What was the name of the man who was a disciple of Jesus and wrote an epistle?", a: "Jude", options: ["Jude", "James", "John", "Peter"] },
    { q: "What was the name of the man who was a brother of Jesus and wrote an epistle?", a: "James", options: ["Jude", "James", "John", "Peter"] },
    { q: "What was the name of the book written to the Hebrews?", a: "Hebrews", options: ["Hebrews", "James", "Jude", "Revelation"] },
    { q: "What was the name of the book written to the twelve tribes scattered among the nations?", a: "James", options: ["Hebrews", "James", "Jude", "Revelation"] },
    { q: "What was the name of the book written to warn against false teachers?", a: "Jude", options: ["Hebrews", "James", "Jude", "Revelation"] },
    { q: "What was the name of the book written to reveal the end times?", a: "Revelation", options: ["Hebrews", "James", "Jude", "Revelation"] },
  ],
    ReallyHard: [  { q: "What is the significance of the 'Parable of the Good Samaritan'?", a: "Love your neighbor as yourself", options: ["Importance of wealth", "Love your neighbor as yourself", "Power of prayer", "Necessity of fasting"] },
    { q: "What are the 'Fruits of the Spirit' listed in Galatians 5?", a: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control", options: ["Wealth, power, fame", "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control", "Anger, greed, envy", "Pride, lust, gluttony"] },
    { q: "What was the name of the man raised from the dead by Jesus?", a: "Lazarus", options: ["Jairus", "Lazarus", "Bartimaeus", "Malchus"] },
    { q: "What was the name of the person who was stoned to death after Stephen?", a: "Paul (Saul)", options: ["Barnabas", "Silas", "Paul (Saul)", "Timothy"] },
    { q: "What was the name of the person who was converted to Christianity on the road to Damascus?", a: "Paul (Saul)", options: ["Barnabas", "Silas", "Paul (Saul)", "Timothy"] },
    { q: "What is the significance of the 'Armor of God' in Ephesians 6?", a: "Spiritual protection against evil", options: ["Physical protection", "Spiritual protection against evil", "Military strategy", "Economic prosperity"] },
    { q: "What was the name of the person who wrote the book of Hebrews?", a: "Unknown (traditionally attributed to Paul or a close associate)", options: ["Luke", "Mark", "Unknown (traditionally attributed to Paul or a close associate)", "Peter"] },
    { q: "What was the name of the person who wrote the book of James?", a: "James, brother of Jesus", options: ["John", "James, brother of Jesus", "Jude", "Peter"] },
    { q: "What are the 'Seven Churches of Revelation'?", a: "Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea", options: ["Jerusalem, Antioch, Alexandria", "Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea", "Rome, Corinth, Athens", "Damascus, Babylon, Nineveh"] },
    { q: "What is the significance of the book of Philemon?", a: "A plea for forgiveness and reconciliation", options: ["A book of prophecy", "A plea for forgiveness and reconciliation", "A historical account", "A collection of proverbs"] },
    { q: "What was the name of the woman at the well who spoke with Jesus?", a: "The Samaritan woman", options: ["Mary Magdalene", "Martha", "The Samaritan woman", "Salome"] },
    { q: "What was the name of the man who asked Jesus 'What is truth?'?", a: "Pontius Pilate", options: ["Herod", "Pontius Pilate", "Caesar", "Tiberius"] },
    { q: "What was the name of the disciple who was a Zealot?", a: "Simon the Zealot", options: ["Matthew", "Thomas", "Simon the Zealot", "Philip"] },
    { q: "What was the name of the man who was healed at the Beautiful Gate?", a: "A lame beggar", options: ["Lazarus", "A lame beggar", "Malchus", "Bartimaeus"] },
    { q: "What was the name of the man who was struck blind for opposing the apostles?", a: "Elymas (Bar-Jesus)", options: ["Simon Magus", "Elymas (Bar-Jesus)", "Apollos", "Demetrius"] },
    { q: "What was the name of the council that addressed the issue of Gentile converts?", a: "Council of Jerusalem", options: ["Council of Nicaea", "Council of Jerusalem", "Council of Chalcedon", "Council of Ephesus"] },
    { q: "What was the name of the man who was bitten by a viper on Malta?", a: "Paul", options: ["Barnabas", "Silas", "Paul", "Timothy"] },
    { q: "What was the name of the book that warns against gnostic teachings?", a: "1 John", options: ["1 John", "2 Peter", "Jude", "Hebrews"] },
    { q: "What was the name of the book that discusses the priesthood of Jesus?", a: "Hebrews", options: ["Hebrews", "James", "Jude", "Revelation"] },
    { q: "What was the name of the book that warns against false teachers and apostasy?", a: "2 Peter", options: ["1 John", "2 Peter", "Jude", "Hebrews"] },
    { q: "What was the name of the book that encourages believers to contend for the faith?", a: "Jude", options: ["1 John", "2 Peter", "Jude", "Hebrews"] },
    { q: "What was the name of the book that contains symbolic visions of the end times?", a: "Revelation", options: ["Hebrews", "James", "Jude", "Revelation"] },
    { q: "What was the name of the parable that teaches about persistent prayer?", a: "The Parable of the Persistent Widow", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Talents", "The Parable of the Prodigal Son"] },
    { q: "What was the name of the parable that teaches about the importance of forgiveness?", a: "The Parable of the Unforgiving Servant", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Lost Sheep"] },
    { q: "What was the name of the parable that teaches about the unexpected nature of God's kingdom?", a: "The Parable of the Mustard Seed", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Pearl"] },
    { q: "What was the name of the parable that teaches about the importance of being ready for Jesus' return?", a: "The Parable of the Ten Virgins", options: ["The Parable of the Wedding Feast", "The Parable of the Ten Virgins", "The Parable of the Sheep and the Goats", "The Parable of the Fig Tree"] },
    { q: "What was the name of the parable that teaches about the judgment of the nations?", a: "The Parable of the Sheep and the Goats", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Talents", "The Parable of the Sheep and the Goats"] },
    { q: "What was the name of the parable that teaches about the importance of using our gifts for God?", a: "The Parable of the Talents", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Talents"] },
    { q: "What was the name of the parable that teaches about the joy of finding the lost?", a: "The Parable of the Lost Sheep", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Lost Sheep"] },
    { q: "What was the name of the parable that teaches about the importance of welcoming outsiders?", a: "The Parable of the Wedding Feast", options: ["The Parable of the Wedding Feast", "The Parable of the Ten Virgins", "The Parable of the Sheep and the Goats", "The Parable of the Fig Tree"] },
    { q: "What was the name of the parable that teaches about the danger of greed?", a: "The Parable of the Rich Fool", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Talents"] },
    { q: "What was the name of the parable that teaches about the joy of repentance?", a: "The Parable of the Prodigal Son", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Prodigal Son", "The Parable of the Sheep and the Goats"] },
    { q: "What was the name of the parable that teaches about the importance of listening to God's word?", a: "The Parable of the Sower", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Talents", "The Parable of the Sheep and the Goats"] },
    { q: "What was the name of the parable that teaches about the hidden growth of God’s kingdom?", a: "The Parable of the Leaven", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Lost Sheep"] },
    { q: "What was the name of the parable that teaches about the value of God’s kingdom?", a: "The Parable of the Hidden Treasure", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Lost Sheep"] },
    { q: "What was the name of the parable that teaches about the cost of following Jesus?", a: "The Parable of the Tower Builder and the Warring King", options: ["The Parable of the Wedding Feast", "The Parable of the Ten Virgins", "The Parable of the Sheep and the Goats", "The Parable of the Tower Builder and the Warring King"] },
    { q: "What was the name of the parable that teaches about the urgency of repentance?", a: "The Parable of the Fig Tree", options: ["The Parable of the Wedding Feast", "The Parable of the Ten Virgins", "The Parable of the Sheep and the Goats", "The Parable of the Fig Tree"] },
    { q: "What was the name of the parable that teaches about the importance of prayer and fasting?", a: "The Parable of the Pharisee and the Tax Collector", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Pharisee and the Tax Collector"] },
    { q: "What was the name of the parable that teaches about the importance of humility?", a: "The Parable of the Lowest Seat", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Talents", "The Parable of the Lowest Seat"] },
    { q: "What was the name of the parable that teaches about the importance of being merciful?", a: "The Parable of the Good Samaritan", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Talents"] },
    { q: "What was the name of the parable that teaches about the importance of being faithful with little?", a: "The Parable of the Shrewd Manager", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Shrewd Manager"] },
    { q: "What was the name of the parable that teaches about the importance of inviting the poor and disabled?", a: "The Parable of the Great Banquet", options: ["The Parable of the Wedding Feast", "The Parable of the Ten Virgins", "The Parable of the Sheep and the Goats", "The Parable of the Great Banquet"] },
    { q: "What was the name of the parable that teaches about the importance of being watchful?", a: "The Parable of the Thief in the Night", options: ["The Parable of the Sower", "The Parable of the Persistent Widow", "The Parable of the Talents", "The Parable of the Thief in the Night"] },
    { q: "What was the name of the parable that teaches about the importance of being fruitful?", a: "The Parable of the Barren Fig Tree", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Barren Fig Tree"] },
    { q: "What was the name of the parable that teaches about the importance of being wise?", a: "The Parable of the Shrewd Steward", options: ["The Parable of the Leaven", "The Parable of the Mustard Seed", "The Parable of the Hidden Treasure", "The Parable of the Shrewd Steward"] },
    { q: "What was the name of the parable that teaches about the importance of being a good neighbor?", a: "The Parable of the Good Samaritan", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Fool", "The Parable of the Talents"] },
    { q: "What was the name of the parable that teaches about the importance of being persistent in prayer?", a: "The Parable of the Persistent Friend", options: ["The Parable of the Sower", "The Parable of the Persistent Friend", "The Parable of the Talents", "The Parable of the Sheep and the Goats"] },
    { q: "What was the name of the parable that teaches about the importance of being generous?", a: "The Parable of the Rich Man and Lazarus", options: ["The Parable of the Good Samaritan", "The Parable of the Unforgiving Servant", "The Parable of the Rich Man and Lazarus", "The Parable of the Talents"] },

  ],
    Extreme: [  { q: "Explain the theological significance of the 'Logos' in John 1.", a: "The pre-existent Christ, the Word of God, through whom all things were created", options: ["A philosophical concept", "The pre-existent Christ, the Word of God, through whom all things were created", "A historical figure", "A symbol of divine wisdom"] },
    { q: "What are the different interpretations of the 'Kingdom of God' in the Gospels?", a: "Present and future, both a spiritual reality and a physical kingdom", options: ["Solely a future physical kingdom", "Present and future, both a spiritual reality and a physical kingdom", "Only a spiritual reality", "A political entity"] },
    { q: "Discuss the historical context of the 'Olivet Discourse' in Matthew 24.", a: "Jesus' predictions about the destruction of Jerusalem and the end times", options: ["A collection of parables", "Jesus' predictions about the destruction of Jerusalem and the end times", "A summary of the Law", "A description of heaven"] },
    { q: "What are the implications of the 'New Covenant' discussed in Hebrews?", a: "Superiority of Christ's priesthood and sacrifice over the Old Covenant", options: ["Continuation of the Old Covenant", "Superiority of Christ's priesthood and sacrifice over the Old Covenant", "Rejection of the Old Testament", "A political agreement"] },
    { q: "Explain the concept of 'justification by faith' in Romans.", a: "Salvation comes through faith in Jesus Christ, not works of the Law", options: ["Salvation through good works", "Salvation comes through faith in Jesus Christ, not works of the Law", "Salvation through knowledge", "Salvation through ritual"] },
    { q: "What are the different interpretations of the book of Revelation?", a: "Preterist, historicist, futurist, and idealist views", options: ["Only historical", "Preterist, historicist, futurist, and idealist views", "Only symbolic", "Only literal"] },
    { q: "Describe the significance of the 'high priestly prayer' of Jesus in John 17.", a: "Jesus' prayer for his disciples and future believers, emphasizing unity and sanctification", options: ["A prayer for worldly success", "Jesus' prayer for his disciples and future believers, emphasizing unity and sanctification", "A prayer for political power", "A prayer for material wealth"] },
    { q: "What are the implications of the concept of 'adoption' in Romans 8?", a: "Believers are adopted as God's children, receiving inheritance and privileges", options: ["Believers become servants of God", "Believers are adopted as God's children, receiving inheritance and privileges", "Believers are simply followers of Jesus", "Believers have no special status"] },
    { q: "Explain the significance of the 'Body of Christ' metaphor in 1 Corinthians 12.", a: "The church as a unified body with diverse gifts and functions", options: ["The church as a political organization", "The church as a unified body with diverse gifts and functions", "The church as a social club", "The church as a business entity"] },
    { q: "What is the significance of the book of Jude?", a: "Warning against false teachers and exhortation to contend for the faith", options: ["A book of prophecy", "Warning against false teachers and exhortation to contend for the faith", "A historical account", "A collection of proverbs"] },
    { q: "Discuss the eschatological themes in 1 Thessalonians.", a: "Emphasis on the return of Christ, the resurrection, and the day of the Lord", options: ["Emphasis on worldly success", "Emphasis on the return of Christ, the resurrection, and the day of the Lord", "Emphasis on political power", "Emphasis on material wealth"] },
    { q: "What is the significance of the 'household codes' in Ephesians and Colossians?", a: "Guidelines for Christian conduct within families and social relationships", options: ["Guidelines for political conduct", "Guidelines for Christian conduct within families and social relationships", "Guidelines for business practices", "Guidelines for military strategy"] },
    { q: "Explain the concept of 'kenosis' in Philippians 2.", a: "Christ's self-emptying in his incarnation and obedience", options: ["Christ's divine power", "Christ's self-emptying in his incarnation and obedience", "Christ's political authority", "Christ's material wealth"] },
    { q: "What are the different interpretations of the 'man of lawlessness' in 2 Thessalonians 2?", a: "Various views, including a future individual or a symbolic representation of evil", options: ["A historical figure", "Various views, including a future individual or a symbolic representation of evil", "A political leader", "A military commander"] },
    { q: "Describe the pastoral concerns addressed in the Pastoral Epistles (1 & 2 Timothy, Titus).", a: "Church leadership, doctrine, and combating false teaching", options: ["Political strategy", "Church leadership, doctrine, and combating false teaching", "Business practices", "Military tactics"] },
    { q: "What is the significance of the 'mystery of godliness' in 1 Timothy 3:16?", a: "The incarnation, life, death, resurrection, and ascension of Christ", options: ["A philosophical concept", "The incarnation, life, death, resurrection, and ascension of Christ", "A political doctrine", "A military secret"] },
    { q: "Explain the concept of 'election' in Romans 9-11.", a: "God's sovereign choice of individuals and Israel for salvation", options: ["Human merit", "God's sovereign choice of individuals and Israel for salvation", "Political power", "Material wealth"] },
    { q: "What are the different interpretations of the 'new creation' in 2 Corinthians 5:17?", a: "Spiritual transformation and reconciliation with God", options: ["Physical creation", "Spiritual transformation and reconciliation with God", "Political revolution", "Economic reform"] },
    { q: "Describe the significance of the 'fruit of the Spirit' in Galatians 5.", a: "Evidence of the Holy Spirit's work in a believer's life", options: ["Physical strength", "Evidence of the Holy Spirit's work in a believer's life", "Political influence", "Material possessions"] },
    { q: "What is the significance of the 'pleroma' in Colossians 1:19?", a: "The fullness of deity dwelling in Christ", options: ["A philosophical term", "The fullness of deity dwelling in Christ", "A political title", "A military rank"] },
    { q: "Explain the concept of 'the image of God' in 2 Corinthians 4:4 and Colossians 1:15.", a: "Christ as the visible representation of the invisible God", options: ["A physical image", "Christ as the visible representation of the invisible God", "A political symbol", "A military emblem"] },
    { q: "What are the different interpretations of the 'millennium' in Revelation 20?", a: "Various views, including literal, symbolic, and amillennial interpretations", options: ["Only literal", "Various views, including literal, symbolic, and amillennial interpretations", "Only symbolic", "Only allegorical"] },
    { q: "Describe the significance of the 'new Jerusalem' in Revelation 21-22.", a: "The eternal dwelling place of God and his people", options: ["A political capital", "The eternal dwelling place of God and his people", "A military fortress", "A business center"] },
    { q: "What is the significance of the 'lamb' in Revelation?", a: "Symbol of Jesus Christ, the sacrificial Lamb of God", options: ["A political symbol", "Symbol of Jesus Christ, the sacrificial Lamb of God", "A military emblem", "A business logo"] },
    { q: "Explain the concept of 'the wrath of God' in Romans 1:18-32.", a: "God's just response to human sin and unrighteousness", options: ["God's arbitrary anger", "God's just response to human sin and unrighteousness", "God's political power", "God's military force"] },
    { q: "What are the different interpretations of the 'rapture'?", a: "Various views, including pre-tribulation, mid-tribulation, and post-tribulation", options: ["Only pre-tribulation", "Various views, including pre-tribulation, mid-tribulation, and post-tribulation", "Only mid-tribulation", "Only post-tribulation"] },
    { q: "Describe the significance of the 'seals, trumpets, and bowls' in Revelation.", a: "Symbolic representations of God's judgment and wrath", options: ["Literal historical events", "Symbolic representations of God's judgment and wrath", "Political strategies", "Military tactics"] },
    { q: "What is the significance of the 'mark of the beast' in Revelation 13?", a: "Symbol of allegiance to the antichrist and opposition to God", options: ["A physical mark", "Symbol of allegiance to the antichrist and opposition to God", "A political symbol", "A military emblem"] },
    { q: "Explain the concept of 'the antichrist' in 1 John 2:18-22 and 2 John 7.", a: "Opposition to Christ and denial of his incarnation", options: ["A political leader", "Opposition to Christ and denial of his incarnation", "A military commander", "A business tycoon"] },
    { q: "What are the different interpretations of the 'lake of fire' in Revelation 20:11-15?", a: "Symbol of eternal punishment and separation from God", options: ["A physical place", "Symbol of eternal punishment and separation from God", "A political prison", "A military dungeon"] },
    { q: "Describe the significance of the 'new heavens and new earth' in Revelation 21:1.", a: "The restoration of creation and the renewal of all things", options: ["A political revolution", "The restoration of creation and the renewal of all things", "A military conquest", "An economic reform"] },
    { q: "What is the significance of the 'tree of life' in Revelation 22:2?", a: "Symbol of eternal life and restoration in God's presence", options: ["A physical tree", "Symbol of eternal life and restoration in God's presence", "A political symbol", "A military trophy"] },
    { q: "Explain the concept of 'the bride of Christ' in Revelation 21:9-10.", a: "The church as the purified and glorified people of God", options: ["A political alliance", "The church as the purified and glorified people of God", "A military force", "A business partnership"] },
    { q: "What are the different interpretations of the 'beast from the sea' and 'beast from the earth' in Revelation 13?", a: "Various symbolic interpretations, representing political and religious powers", options: ["Literal historical figures", "Various symbolic interpretations, representing political and religious powers", "Political parties", "Military organizations"] },
    { q: "Describe the significance of the 'white horse rider' in Revelation 19:11-16.", a: "Symbol of Christ's victorious return and judgment", options: ["A political leader", "Symbol of Christ's victorious return and judgment", "A military commander", "A business tycoon"] },
    { q: "What is the significance of the 'book of life' in Revelation 20:12, 15?", a: "Record of those who are saved and have eternal life", options: ["A political register", "Record of those who are saved and have eternal life", "A military roster", "A business ledger"] },
    { q: "Explain the concept of 'the great tribulation' in Revelation 7:14.", a: "Period of intense suffering and persecution before Christ's return", options: ["A political conflict", "Period of intense suffering and persecution before Christ's return", "A military campaign", "An economic crisis"] },
    { q: "What are the different interpretations of the 'four horsemen of the apocalypse' in Revelation 6?", a: "Symbolic representations of conquest, war, famine, and death", options: ["Literal historical events", "Symbolic representations of conquest, war, famine, and death", "Political parties", "Military units"] },
    { q: "Describe the significance of the 'seven golden lampstands' and 'seven stars' in Revelation 1:12-20.", a: "Symbolic representations of the seven churches and their messengers", options: ["Physical objects", "Symbolic representations of the seven churches and their messengers", "Political symbols", "Military emblems"] },
    { q: "What is the significance of the 'scroll with seven seals' in Revelation 5?", a: "Symbol of God's sovereign plan and judgment", options: ["A political document", "Symbol of God's sovereign plan and judgment", "A military treaty", "A business contract"] },
    { q: "Explain the concept of 'the dragon' in Revelation 12.", a: "Symbol of Satan and his opposition to God and his people", options: ["A physical creature", "Symbol of Satan and his opposition to God and his people", "A political leader", "A military commander"] },
    { q: "What are the different interpretations of the 'woman clothed with the sun' in Revelation 12:1-6?", a: "Various views, including Israel, the church, and Mary", options: ["Only Israel", "Various views, including Israel, the church, and Mary", "Only the church", "Only Mary"] },
    { q: "Describe the significance of the 'new name' given to believers in Revelation 2:17 and 3:12.", a: "Symbol of intimate relationship with God and new identity in Christ", options: ["A political title", "Symbol of intimate relationship with God and new identity in Christ", "A military rank", "A business designation"] },
    { q: "What is the significance of the 'river of the water of life' in Revelation 22:1?", a: "Symbol of God's provision of eternal life and restoration", options: ["A physical river", "Symbol of God's provision of eternal life and restoration", "A political boundary", "A military obstacle"] },
    { q: "Explain the concept of 'the bottomless pit' in Revelation 9:1-2.", a: "Symbol of the abode of evil spirits and demonic forces", options: ["A physical location", "Symbol of the abode of evil spirits and demonic forces", "A political prison", "A military stronghold"] },
    { q: "What are the different interpretations of the 'great harlot' in Revelation 17?", a: "Various views, including Rome, apostate religion, and worldly power", options: ["Only Rome", "Various views, including Rome, apostate religion, and worldly power", "Only apostate religion", "Only worldly power"] },
    { q: "Describe the significance of the 'throne room vision' in Revelation 4-5.", a: "Symbolic representation of God's sovereignty and worship in heaven", options: ["A political assembly", "Symbolic representation of God's sovereignty and worship in heaven", "A military council", "A business meeting"] },
    { q: "What is the significance of the 'altar of incense' in Revelation 8:3-5?", a: "Symbol of the prayers of the saints ascending to God", options: ["A physical altar", "Symbol of the prayers of the saints ascending to God", "A political platform", "A military shrine"] },
  ],
  },
};

  
function loadQuestions() {
  const testament = document.getElementById("testament").value; // "Old" or "New"
  const difficulty = document.getElementById("difficulty").value; // "Easy", "Hard", etc.

  if (questionBank[testament] && questionBank[testament][difficulty]) {
    questions = shuffle([...questionBank[testament][difficulty]]);
  } else {
    alert("Selected question set not found.");
    questions = [];
  }
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
