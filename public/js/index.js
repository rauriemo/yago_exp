$(document).ready(function(){
  $('div.button').toggleClass('opacity-switch');
  $('#command-placeholder').toggleClass('opacity-switch')
  console.log("in the index.js file")
  $('body').keydown(function(event){
    console.log("in the keydown")
    if (event.which == 84){
      console.log("pressed t")
      $('#yago-drop-down').slideUp("slow");
      $('#commands').slideUp();
    }
    else if (event.which == 76) {
      console.log("pressed l")
      $('#yago-drop-down').slideDown("slow")
    }
    else if (event.which == 67) {
      console.log("pressed c")
      $('#commands').slideToggle()
      $('#command-placeholder').toggleClass('opacity-switch')
    }
    else if (event.which == 82) {
      console.log("pressed r")
      // $('.button').attr('visibility', 'visible');
      $('div.button').toggleClass('opacity-switch');
      // toggleAttr('.button', 'opacity', [0,1]);
    }

  }); //84 is T, 76 is L

// function toggleAttr(el, attribute, vals) {
//   if ($(el).attr(attribute) == vals[0]) {
//     $(el).attr(attribute, vals[1])
//   }
//   else if ($(el).attr(attribute) == vals[1]) {
//     $(el).attr(attribute, vals[0])
//   }
// };






}); //closes document.ready