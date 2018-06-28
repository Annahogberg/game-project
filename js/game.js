var mainGame = function() {
  this.options = {
    status: [
      { name: "Coach", value: "coach", hideClass: ".player" },
      { name: "Player", value: "player", hideClass: ".coach" }
    ],
    actividad: [
      { name: "Activo", value: "activo", hideClass: ".retired" },
      { name: "Retired", value: "retired", hideClass: ".activo" }
    ],
    hairStyle: [
      { name: "Bald", value: "bald", hideClass: ".medium, .short" },
      { name: "Short", value: "short", hideClass: ".bald, .medium" },
      { name: "Medium", value: "medium", hideClass: ".bald, .short" }
    ],
    hairColor: [
      { name: "Brown", value: "brown", hideClass: ".blond, .red, .gray" },
      { name: "Blond", value: "blond", hideClass: ".brown, .red, .gray" },
      { name: "Red", value: "red", hideClass: ".brown, .blond, .gray" },
      { name: "Gray", value: "gray", hideClass: ".brown, .blond, .red" }
    ],
    facialHair: [
      { name: "Yes", value: "yes", hideClass: ".no" },
      { name: "No", value: "no", hideClass: ".yes" }
    ]
  };

  this.cards = cards;
  this.currentPlayer = "player1";

  this.players = {
    player1: {
      guessed: 0,
      randomCard: "",
      hints: 0,
      wrongs: 0,
    },
    player2: {
      guessed: 0,
      randomCard: "",
      hints: 0,
      wrongs: 0,
    }
  };
  this.audiosilbido = new Audio('./sound/silbato.mp3');
  this.audiogol = new Audio('./sound/gol.mp3');
  this.audiocampeones = new Audio('./sound/campeones.mp3');
};

mainGame.prototype.shuffleCard = function() {
  this.cards = _.shuffle(this.cards);
};

mainGame.prototype.randomPick = function(items) {
  this.randomCard = items[Math.floor(Math.random() * items.length)];
  console.log(this.randomCard);
  return true;
};

mainGame.prototype.checkIfFeature = function(field, value) {
  return this.randomCard[field] == value;
};

mainGame.prototype.checkIfPair = function(pickedCard) {
  if (pickedCard == "card_" + this.randomCard.name) {
    this.audiogol.play();
    alert("Correct!! Keep going!");
    return true;
  } else {
    this.players[this.currentPlayer].wrongs++;
    $("#" + this.currentPlayer + " .wrongs").text(this.players[this.currentPlayer].wrongs);
    this.audiosilbido.play();
  }
  return false;
};

mainGame.prototype.restart = function() {
    this.players.guessed = 0;
    this.players.hints = 0;
  };

mainGame.prototype.checkIfWin = function() {
  var playerOneHints = this.players.player1.hints;
  var playerTwoHints = this.players.player2.hints;
  var playerOneWrongs = this.players.player1.wrongs;
  var playerTwoWrongs = this.players.player2.wrongs;

  var scorePlayerOne = playerOneHints + playerOneWrongs * 1.5
  var scorePlayerTwo = playerTwoHints + playerTwoWrongs * 1.5

  if (this.players.player1.guessed == 2 && this.players.player2.guessed == 2) {
    if (scorePlayerOne < scorePlayerTwo) {
      this.audiocampeones.play();
      alert("Player 2 lost, the score of Player 1 was better");
    } else if (scorePlayerOne > scorePlayerTwo ){
      this.audiocampeones.play();
      alert("Player 1 lost, congrats Player 2!")
    }else if (scorePlayerOne == scorePlayerTwo) {
      this.audiocampeones.play();
      alert("You're equally good! Congrats!!!");
    }
  } 
};

mainGame.prototype.draw = function() {
  this.randomPick(cards);
  var html = "";
  this.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html +=
      '<div class="imagen ' + pic.status + " " + pic.actividad + " " +
      pic.hairStyle + " " + pic.hairColor +
      " " +
      pic.facialHair +
      '"';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("board").innerHTML = html;
};

mainGame.prototype.changePlayer = function() {
  if (this.currentPlayer == "player1") {
    this.currentPlayer = "player2";
  } else {
    this.currentPlayer = "player1";
  }
};
