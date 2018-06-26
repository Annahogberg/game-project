$(document).ready(function() {
  var maingame = new mainGame(cards);
  maingame.shuffleCard(cards);
  var randomcard = maingame.randomPick(cards);
  console.log(randomcard);
  var pickedcard = maingame.pickedCard;
  var html = "";
  maingame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="front"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html +=
      '<div class="back ' + pic.status + " " + pic.actividad + " " + pic.hairStyle + " " 
      + pic.hairColor + " " + pic.skinColor + " " + pic.facialHair + '"';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });
  $(".2nd").hide();

  document.getElementById("board").innerHTML = html;

  $(".2nd").click(function (){
    maingame.hints++
    console.log(maingame.hints);
    $("#hints").text(maingame.hints);
  });

  $(".btn-status").click(function (){
    $(".btn-status-second").show();
    $(".btn-coach").on("click", function (){
      if (maingame.checkIfFeature("status", "coach")) {
        $(".player, .btn-player, .btn-coach").remove();
      } else alert("try again");
    })
    $(".btn-player").on("click", function (){
      if (maingame.checkIfFeature("status", "player")) {  
        $(".coach, .btn-player, .btn-coach").remove();
      } else alert("try again");
    })
  })

  $(".btn-activity").click(function (){
    $(".btn-activity-second").show();
    $(".btn-activo").on("click", function (){
      if (maingame.checkIfFeature("actividad", "activo")){
        $(".retired, .btn-retired, .btn-activo").remove();
      } else alert("try again");
    })
    $(".btn-retired").on("click", function (){
      if (maingame.checkIfFeature("actividad", "retired")){
        $(".activo, .btn-retired, .btn-activo").remove();
      } else alert("try again");
    })
  })

  $(".btn-hair-style").click(function (){
    $(".btn-hair-style-second").show();
    $(".btn-bald").on("click", function (){
      if (maingame.checkIfFeature("hairStyle", "bald")){
        $(".short, .medium, .btn-hair-color, .btn-medium-style, .btn-short, .btn-bald").remove();
      } else alert("try again");
    })
    $(".btn-short").on("click", function (){
      if (maingame.checkIfFeature("hairStyle", "short")){
        $(".bald, .medium, .btn-medium-style, .btn-short, .btn-bald").remove();
      } else alert("try again");
    })
    $(".btn-medium-style").on("click", function (){
      if(maingame.checkIfFeature("hairStyle", "medium")){
        $(".bald, .short, .btn-medium-style, .btn-short, .btn-bald").remove();
      } else alert("try again");
    })
  })

  $(".btn-hair-color").click(function (){
    $(".btn-hair-color-second").show();
    $(".btn-brown").on("click", function (){
      if(maingame.checkIfFeature("hairColor", "brown")){
        $(".blond, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
      } else alert("try again");
    })
    $(".btn-blond").on("click", function (){
      if(maingame.checkIfFeature("hairColor", "blond")){
        $(".brown, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
      } else alert("try again");
    })
    $(".btn-red").on("click", function (){
      if(maingame.checkIfFeature("hairColor", "red")) {
        $(".brown, .blond, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
      } else alert("try again");
    })
    $(".btn-gray").on("click", function (){
      if(maingame.checkIfFeature("hairColor", "gray")){
        $(".brown, .blond, .red, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
      } else alert("try again");
    })
  })

  $(".btn-facial-hair").click(function (){
    $(".btn-facial-hair-second").show();
    $(".btn-yes").on("click", function (){
      $(".no-facial, .btn-yes, .btn-no").remove();
    })
    $(".btn-no").on("click", function (){
      $(".yes-facial, .btn-yes, .btn-no").remove();
    })
  })

  
  });




  ////


  $(document).ready(function() {
    var maingame = new mainGame(cards);
    maingame.shuffleCard(cards);
    var randomcard = maingame.randomPick(cards);
    console.log(randomcard);
    var html = "";
    maingame.cards.forEach(function(pic, index) {
      html += '<div class= "card" id="card_' + pic.name + '">';
      html += '<div class="front"';
      html += '    name="' + pic.img + '">';
      html += "</div>";
      html +=
        '<div class="back ' + pic.status + " " + pic.actividad + " " + pic.hairStyle + " " 
        + pic.hairColor + " " + pic.skinColor + " " + pic.facialHair + '"';
      html += 'style="background: url(img/' + pic.img + ') no-repeat">';
      html += "</div>";
      html += "</div>";
    });
    $(".2nd").hide();
  
    document.getElementById("board").innerHTML = html;
  
    $(".btn-status").click(function (){
      $(".btn-status-second").show();
      $(".btn-coach").on("click", function (){
        if (maingame.checkIfFeature("status", "coach")) {
          $(".player, .btn-player, .btn-coach").remove();
        } else alert("try again");
      })
      $(".btn-player").on("click", function (){
        if (maingame.checkIfFeature("status", "player")) {  
          $(".coach, .btn-player, .btn-coach").remove();
        } else alert("try again");
      })
    })
  
    $(".btn-activity").click(function (){
      $(".btn-activity-second").show();
      $(".btn-activo").on("click", function (){
        if (maingame.checkIfFeature("actividad", "activo")){
          $(".retired, .btn-retired, .btn-activo").remove();
        } else alert("try again");
      })
      $(".btn-retired").on("click", function (){
        if (maingame.checkIfFeature("actividad", "retired")){
          $(".activo, .btn-retired, .btn-activo").remove();
        } else alert("try again");
      })
    })
  
    $(".btn-hair-style").click(function (){
      $(".btn-hair-style-second").show();
      $(".btn-bald").on("click", function (){
        if (maingame.checkIfFeature("hairStyle", "bald")){
          $(".short, .medium, .btn-hair-color, .btn-medium-style, .btn-short, .btn-bald").remove();
        } else alert("try again");
      })
      $(".btn-short").on("click", function (){
        if (maingame.checkIfFeature("hairStyle", "short")){
          $(".bald, .medium, .btn-medium-style, .btn-short, .btn-bald").remove();
        } else alert("try again");
      })
      $(".btn-medium-style").on("click", function (){
        if(maingame.checkIfFeature("hairStyle", "medium")){
          $(".bald, .short, .btn-medium-style, .btn-short, .btn-bald").remove();
        } else alert("try again");
      })
    })
  
    $(".btn-hair-color").click(function (){
      $(".btn-hair-color-second").show();
      $(".btn-brown").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "brown")){
          $(".blond, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
        } else alert("try again");
      })
      $(".btn-blond").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "blond")){
          $(".brown, .red, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
        } else alert("try again");
      })
      $(".btn-red").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "red")) {
          $(".brown, .blond, .gray, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
        } else alert("try again");
      })
      $(".btn-gray").on("click", function (){
        if(maingame.checkIfFeature("hairColor", "gray")){
          $(".brown, .blond, .red, .bald, .btn-gray, .btn-red, .btn-blond, .btn-brown").remove();
        } else alert("try again");
      })
    })
  
    $(".btn-facial-hair").click(function (){
      $(".btn-facial-hair-second").show();
      $(".btn-yes").on("click", function (){
        $(".no-facial, .btn-yes, .btn-no").remove();
      })
      $(".btn-no").on("click", function (){
        $(".yes-facial, .btn-yes, .btn-no").remove();
      })
    })
  
    $(".2nd").click(function (){
      maingame.hints++
      console.log(maingame.hints);
      $("#hints").text(maingame.hints);
    });
  
    $(".back").click(function(){
  
    console.log(maingame.pickedCard);
    if (maingame.checkIfPair()){
      $("#guessed").text(maingame.guessed);
    }
    })
  });
  