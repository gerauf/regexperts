$(document).ready(function(){

  setInterval(moveSnowden, 50);
  var keys = {};
  var switcher;

  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });

  $('.modal-trigger').leanModal();


  function moveSnowden() {
    for (var key in keys) {
      if(keys[key] && switcher){
        $("#left-hand").animate({top: "-=50"}, 100);
        $("#right-hand").animate({top: "+=50"}, 100);
        switcher = false;
      } else {
        $("#left-hand").animate({top: "+=50"}, 100);
        $("#right-hand").animate({top: "-=50"}, 100);
        switcher = true;
      }
    }
  }

  // $('#input-score').on('click', function(){
  //   $(this).toggleClass("disabled");
  //   console.log("on");
  // });

  $(document).keypress(function(event){
    if(event.keyCode == 13 && $('#next-level').is(':visible')){
        $("#next-level").click();
    }
  });
});
