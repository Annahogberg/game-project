$(document).ready(function() {
  var maingame = new mainGame(cards);
  maingame.shuffleCard(cards);
  maingame.draw();


  $(".2nd, .first").hide();

  $(".start").click(function (){
    $(".first").show();
  })

    $(".btn-status").click(function (){
      $(".btn-status-second").show();
      $(".btn-activity, .btn-hair-style, .btn-hair-color, .btn-facial-hair").hide();
      $(".btn-coach").on("click", function (){
        if (maingame.checkIfFeature("status", "coach")) {
          $(".player, .btn-player, .btn-coach").hide();
          $(".btn-activity, .btn-hair-style, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-player").on("click", function (){
        if (maingame.checkIfFeature("status", "player")) {  
          $(".coach, .btn-player, .btn-coach").hide();
          $(".btn-activity, .btn-hair-style, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
    })

    $(".btn-activity").click(function (){
      $(".btn-activity-second").show()
      $(".btn-status, .btn-hair-style, .btn-hair-color, .btn-facial-hair").hide();
      $(".btn-activo").on("click", function (){
        if (maingame.checkIfFeature("actividad", "activo")){
          $(".retired, .btn-retired, .btn-activo").hide();
          $(".btn-status, .btn-hair-style, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-retired").on("click", function (){
        if (maingame.checkIfFeature("actividad", "retired")){
          $(".activo, .btn-retired, .btn-activo").hide();
          $(".btn-status, .btn-hair-style, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
    })

    $(".btn-hair-style").click(function (){
      $(".btn-hair-style-second").show();
      $(".btn-status, .btn-activity, .btn-hair-color, .btn-facial-hair").hide();
      $(".btn-bald").on("click", function (){
        if (maingame.checkIfFeature("hairStyle", "bald")){
          $(".short, .medium, .btn-hair-color, .btn-medium-style, .btn-short, .btn-bald").hide();
          $(".btn-status, .btn-activity, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-short").on("click", function (){
        if (maingame.checkIfFeature("hairStyle", "short")){
          $(".bald, .medium, .btn-medium-style, .btn-short, .btn-bald").hide();
          $(".btn-status, .btn-activity, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-medium-style").on("click", function (){
        if(maingame.checkIfFeature("hairStyle", "medium")){
          $(".bald, .short, .btn-medium-style, .btn-short, .btn-bald").hide();
          $(".btn-status, .btn-activity, .btn-hair-color, .btn-facial-hair").show();
        } else alert("try again");
      })
      
    })

    $(".btn-hair-color").click(function (){
      $(".btn-hair-color-second").show();
      $(".btn-status, .btn-activity, .btn-hair-style, .btn-facial-hair").hide();
      $(".btn-brown").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "brown")){
          $(".blond, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").hide();
          $(".btn-status, .btn-activity, .btn-hair-style, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-blond").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "blond")){
          $(".brown, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").hide();
          $(".btn-status, .btn-activity, .btn-hair-style, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-red").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "red")) {
          $(".brown, .blond, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").hide();
          $(".btn-status, .btn-activity, .btn-hair-style, .btn-facial-hair").show();
        } else alert("try again");
      })
      $(".btn-gray").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "gray")){
          $(".brown, .blond, .red, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").hide();
          $(".btn-status, .btn-activity, .btn-hair-style, .btn-facial-hair").show();
        } else alert("try again");
      })
    })

    $(".btn-facial-hair").click(function (){
      $(".btn-facial-hair-second").show();
      $(".btn-yes").on("click", function (){
        if(maingame.checkIfFeature("facialHair", "yes")){
        $(".no-facial, .btn-yes, .btn-no").remove();
      } else alert("try again");
      })
      $(".btn-no").on("click", function (){
        $(".yes-facial, .btn-yes, .btn-no").remove();
      })
    })

    $(".2nd").click(function (){
      maingame.hints++
      if (maingame.checkWhatPlayer == maingame.player1){
        $("#hints1").text(maingame.hints);
      } else {
        $("#hints2").text(maingame.hints);
      }
      // console.log(maingame.hints);
      // $("#hints1").text(maingame.hints);
    });

    $(".imagen").live('click', function() {
      maingame.pickedCard = $(this);
      if (maingame.checkIfPair()) {
        if (maingame.checkWhatPlayer == maingame.player1){
          $("#guessed1").text(maingame.guessed);
        } else {
          $("#guessed2").text(maingame.guessed);
        }
        // $("#guessed1").text(maingame.guessed);
        // maingame.draw();
      }
  });
  });
