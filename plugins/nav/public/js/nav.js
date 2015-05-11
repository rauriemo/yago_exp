(function(window, document, $, undefined) {
  console.log("in js file");

  'use strict';
  var keyMap = {
    76 : {
            ev : 'drone',
            action : 'takeoff'
          },
  }

  var Nav = function() {
    console.log("constructor");
    this.socket = io.connect('http://localhost:3000');
    this.speed = 0;
    this.moving = false;
    this.keys = {};

    var self = this;
    // setInterval(function(){self.sendCommands()},100);
  };

  nav = new Nav();

  Nav.prototype.listen = function listen() {
    console.log("listen")
    var nav = this;
    $(document).keydown(function(ev) {
      nav.keyDown(ev);
    });

    // $(document).keyup(function(ev) {
    //   nav.keyUp(ev);
    // });
  }

  nav.listen();

  Nav.prototype.keyDown = function keyDown(ev){
    console.log("keyDown");
    ev.preventDefault();
    var key = ev.keyCode;
    var cmd = keyMap[key];
    if (key == 76){
      console.log("im heeeeeere");
      this.socket.emit("/takeoff", {cmd})
    }
  }

}(window, document, jQuery));