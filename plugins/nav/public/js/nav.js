(function(window, document, $, undefined) {

  'use strict';
  var keyMap = {
    76 : {
            ev : 'drone',
            action : 'takeoff'
          },
  }

  (var Nav = function() {
    console.log("constructor");
    this.socket = io.connect('http://localhost:3000');
    this.speed = 0;
    this.moving = false;
    this.keys = {};

    var self = this;
    setInterval(function(){self.sendCommands()},100);


  })();

  Nav.prototype.listen = function listen() {
    var nav = this;
    $(document).keydown(function(ev) {
      nav.keyDown(ev);
    });

    $(document).keyup(function(ev) {
      nav.keyUp(ev);
    });
  }

  Nav.prototype.keyDown = function keyDown(ev){
    ev.preventDefault();
    var key = ev.keyCode;
    var cmd = keyMap[key];
    if (key == 76){
      console.log("im heeeeeere");
      this.socket.emit("/takeoff", {cmd: cmd})
    }
  }

}(window, document, jQuery));