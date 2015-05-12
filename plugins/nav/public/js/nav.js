(function(window, document, $, undefined) {
  console.log("in js file");

  'use strict';
  var keyMap = {
    // " " <-- empty string
    32 : {
      action: 'stop'
    },
    // T "takeoff"
    84 : {
      action: 'takeoff'
    },
    // L "land"
    76 : {
      action: 'land'
    },
    // Left arrow "turn counterclockwise"
    37 : {
      action: 'counterClockwise'
    },
    // Right arrow "turn clockwise"
    39 : {
      action: 'clockwise'
    },
    // Up arrow "move vertically up"
    38 : {
      action: 'up'
    },
    // Down arrow "move vertically down"
    40 : {
      action: 'down'
    },
    // W "move forward"
    87 : {
      action: 'front'
    },
    // S "move backward"
    83 : {
      action: 'back'
    },
    // A "move left"
    65: {
      action: 'left'
    },
    // D "move right"
    68: {
      action: 'right'
    },
    // Y "flip forward"
    70 : {
      action: 'flipAhead'
    },
  }

  var Nav = function() {
    console.log("constructor");
    this.socket = io.connect('http://localhost:3000');
    // this.speed = 0;
    // this.moving = false;
    // this.keys = {};

    // var self = this;
    // setInterval(function(){self.sendCommands()},100);
  };

  nav = new Nav();

  Nav.prototype.listen = function listen() {
    console.log("listen")
    var nav = this;
    $(document).keydown(function(ev) {
      nav.keyDown(ev);
    });

    $(document).keyup(function(ev) {
      nav.keyUp(ev);
    });
  }

  nav.listen();

  Nav.prototype.keyDown = function keyDown(ev){
    console.log("keyDown");
    ev.preventDefault();
    var key = ev.keyCode;
    var cmd = keyMap[key];
    if (key == 84){
      console.log("im heeeeeere");
      this.socket.emit("/takeoff", {cmd})
    }
    else if(key == 87){
      console.log("Moving forward");
      ev.preventDefault();
      this.socket.emit("/front",{cmd})
    }else if(key == 76){
      console.log("Landing");
      this.socket.emit("/land",{cmd})
    }else if(key == 83){
      console.log("Moving backward");
      this.socket.emit("/back",{cmd})
    }else if(key == 65){
      console.log("Moving left");
      this.socket.emit("/left",{cmd})
    }else if(key == 68){
      console.log("Moving right");
      this.socket.emit("/right",{cmd})
    }else if(key == 38){
      console.log("Moving up");
      this.socket.emit("/up",{cmd})
    }else if(key == 40){
      console.log("Moving down");
      this.socket.emit("/down",{cmd})
    }else if(key == 39){
      console.log("Rotating right");
      this.socket.emit("/clockwise",{cmd})
    }else if(key == 37){
      console.log("Rotating left");
      this.socket.emit("/counterClockwise",{cmd})
    }else if(key == 70){
      console.log("Flipping forward");
      this.socket.emit("/flipAhead",{cmd})
    }
  }

  Nav.prototype.keyUp = function keyUp(ev) {
    console.log("keyUp!!!!!!!")
    ev.preventDefault();
    var cmd = 'stop'
      this.socket.emit("/hover", {cmd})
  }



}(window, document, jQuery));
