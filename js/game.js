var mainGame = function (cards) {
  this.cards = cards;
  this.guessed = 0;
  this.pickedCard;
  this.randomCard;
  this.hints = 0;
  this.maxHints = 50;
  // this.audiosilbido = new Audio('silbido');
  // this.audiogol = new Audio('gol');
  // this.audiouy = new Audio('uy');
 };

mainGame.prototype.shuffleCard = function (cardsArr) {
  this.cards =  _.shuffle(cardsArr);
  return _.shuffle(cardsArr);
};

mainGame.prototype.randomPick = function (items) {  
  this.randomCard = items[Math.floor(Math.random()*items.length)];
  return this.randomCard;
}

mainGame.prototype.checkIfFeature = function (field, value) {
  return this.randomCard[field] == value
};

mainGame.prototype.checkIfPair = function (){
  console.log(this.pickedCard[0].offsetParent.attributes[1].nodeValue == "card_" + this.randomCard.name);
  if(this.pickedCard[0].offsetParent.attributes[1].nodeValue == "card_" + this.randomCard.name) {
    this.guessed++;
    return true;
    //this.audiogol.play();
  } else {
    //this.audiosilbido.play();
  }
  //this.audiouy.play();
  return false;
  };


mainGame.prototype.checkIfWin = function (){
  if (this.guessed == 24){
    if (this.hints < this.maxHints){
      alert("Has ganado!");
    } else {

    }
  } else {

  }
}

mainGame.prototype.draw = function(){
  var randomcard = this.randomPick(cards);
  console.log(randomcard);
  var html = "";
  this.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="front"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html +=
      '<div class="back ' + pic.status + " " + pic.actividad + " " + pic.hairStyle + " " 
      + pic.hairColor + " " + pic.facialHair + '"';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("board").innerHTML = html;
}