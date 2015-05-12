$(document).ready(function(){
  console.log("in the index.js file")
  $('body').keydown(function(event){
    console.log("in the keydown")
    if (event.keyCode == 84){
      console.log("pressed t")
      $('#yago-drop-down').slideUp()
    }
  }); //84 is T, 76 is L







}); //closes document.ready