$(document).ready(function(){
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

      $('#command-placeholder').toggleClass('opacity-off')
    }
    else if (event.which == 82) {
      console.log("pressed r")
      // $('.button').attr('visibility', 'visible');
      $('div.button').toggleClass('opacity-off');
      var show;
      if ($('div.button').attr('class') === 'button') {
        function showing() {
          show = setTimeOut(fadeLoop())
        }
      }
      else {
        function clearing() {
          clearTimeOut(show)
        }
      }
      // until (event.which == 82) {
      //   fadeLoop();
      // }

      // toggleAttr('.button', 'opacity', [0,1]);
    }

  }); //84 is T, 76 is L



  var fadeLoop = function() {
    $('div.button').fadeIn(1500, function() {
      $('div.button').fadeOut(1500, fadeLoop)
    })
  }

// function toggleAttr(el, attribute, vals) {
//   if ($(el).attr(attribute) == vals[0]) {
//     $(el).attr(attribute, vals[1])
//   }
//   else if ($(el).attr(attribute) == vals[1]) {
//     $(el).attr(attribute, vals[0])
//   }
// };






}); //closes document.ready