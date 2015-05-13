$(document).ready(function(){
  console.log("in the index.js file")
  $('body').keydown(function(event){
    console.log("in the keydown")
    if (event.which == 84){
      console.log("pressed t")
      $('#yago-drop-down').slideUp("slow")
    }
    else if (event.which == 76) {
      console.log("pressed l")
      $('#yago-drop-down').slideDown("slow")
    }
    else if (event.which == 67) {
      console.log("pressed c")
      $('#commands').slideToggle()
    }
    // else if (event.which == 67) {
    //   console.log("pressed c")
    //   $('#commands').slideUp()
    // }

  }); //84 is T, 76 is L







}); //closes document.ready