// when ready and creation of buttons

$(document).ready(function() {
  maingame = new mainGame(cards);
  maingame.shuffleCard(cards);
  maingame.draw();

  $("#current_player").text(maingame.currentPlayer);
  $(".2nd, .first").hide();

  $(".start").click(function (){
    $(".first").show();
  })

  $("ul.first button").on('click', function () {
    $(".randomcard").html('');
    var type = $(this).data('type');
    $("ul.second").html('');

    maingame.options[type].forEach(function (option, index) {
      $("ul.second").append('<li><button class="btn" data-attr="' + type + '" data-value="' 
      + option.value + '" data-hide="' + option.hideClass + '">' + option.name +'</button></li>')
    });
  });

  $('ul.second').on('click', 'button', function() {
    $(".randomcard").html('');
    $('#status_message').html('');

    var value = $(this).data('value');
    var attr = $(this).data('attr');
    var hide = $(this).data('hide');

    if (maingame.checkIfFeature(attr, value)) {
      $(hide).hide();
      $('#status_message').html(maingame.currentPlayer + ': correct answer!');
    } else {
      $('#status_message').html(maingame.currentPlayer + ': ' + value + ' is wrong!');
    }

    maingame.players[maingame.currentPlayer].hints++;
    $("#" + maingame.currentPlayer + " .hints").text(maingame.players[maingame.currentPlayer].hints);
  });

  $(".imagen").live('click', function() {
    var picked = $(this)[0].offsetParent.attributes[1].nodeValue
    if (maingame.checkIfPair(picked)) {
      $(".randomcard").html($(this)[0]);
      maingame.players[maingame.currentPlayer].guessed++;
      $("#" + maingame.currentPlayer + " .guessed").text(maingame.players[maingame.currentPlayer].guessed);
      if (maingame.checkIfWin()) {
        maingame.restart();
      } else {
        maingame.changePlayer();
        $("#current_player").text(maingame.currentPlayer);
      };
      maingame.draw();
    }
  });
});
