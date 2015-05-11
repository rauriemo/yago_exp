(function(window, document, $, undefined) {
  console.log("in js file");

  'use strict';
  var keyMap = {
    // " " <-- empty string
    32 : {
            ev: 'drone'
            action: 'stop'
    },
    // T "takeoff"
    84 : {
            ev: 'drone'
            action: 'takeoff'
    },
    // L "land"
    76 : {
            ev: 'drone',
            action: 'land'
    },
    // Left arrow "turn counterclockwise"
    37 : {
            ev: 'move'
            action: 'counterClockwise'
    },
    // Right arrow "turn clockwise"
    39 : {
            ev: 'move'
            action: 'clockwise'
    },
    // Up arrow "move vertically up"
    38 : {
            ev: 'move'
            action: 'up'
    },
    // Down arrow "move vertically down"
    40 : {
            ev: 'move'
            action: 'down'
    },
    // W "move forward"
    87 : {
            ev: 'move'
            action: 'front'
    },
    // S "move backward"
    83 : {
            ev: 'move'
            action: 'back'
    },
    // A "move left"
    65: {
            ev: 'mpve'
            action: 'left'
    },
    // D "move right"
    68: {
            ev: 'move'
            action: 'right'
    },
    // T "flip forward"
    84 : {
            ev: 'animate'
            action:
    },
    // G "flip backward"
    71 : {
            ev: 'animate'
            action:
    },
    // H "flip right"
    72 : {
            ev: 'animate'
            action:
    },
    // F  "flip left"
    70 : {
            ev: 'animate'
            action:
    },
    // C "Change camera channel"
    67 : {
            ev: 'channel'
    }
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

  Nav.prototype.keyUp = function keyUp(ev) {
    console.log("keyUp!!!!!!!")
    ev.preventDefault();
    this.socket.emit("/hover")
  }

}(window, document, jQuery));