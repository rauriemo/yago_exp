
$(document).ready(function(){
  // Fullscreen on double clicking document
  $('#dronestream').dblclick(function(event){
    console.log("double clicking window")
    event.preventDefault();
    $(document).toggleFullscreen();
    return false
  });

  $('div.button').toggleClass('opacity-off');
  $('#command-placeholder').toggleClass('opacity-off')
  console.log("in the index.js file")

  $('body').keydown(function(event){
    console.log("in the keydown")
    if (event.which == 84){
      console.log("pressed t")
      $('#yago-drop-down').slideUp("slow");
      $('#commands').slideUp("slow");
      $('#command-placeholder').removeClass('opacity-off');
    }
    else if (event.which == 76) {
      console.log("pressed l")
      $('#yago-drop-down').slideDown("slow");
      $('#commands').slideUp("slow");
      $('#command-placeholder').removeClass('opacity-off');
    }
    else if (event.which == 67) {
      console.log("pressed c")
      $('#commands').slideToggle("slow")
      if ($('#command-placeholder').hasClass('opacity-off')){
      setTimeout(function(){
        $('#command-placeholder').toggleClass('opacity-off')
      }, 600)
      } else {
        $('#command-placeholder').toggleClass('opacity-off')
      }
    }
    else if (event.which == 82) {
      console.log("pressed r")
      $('div.button').toggleClass('opacity-off');
    }
  }); //closes keyDown events
}); //closes document.ready
