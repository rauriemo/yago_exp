(function(window, document){
  'use strict';

  // Constructor
  var FlightRecorder = function FlightRecorder() {
    console.log("Loading flight recorder");
    this.recording = false;
    this.socket = io.connect('http://localhost:3000')

    this.listen();
  }


  // Register event listener
  FlightRecorder.prototype.listen = function listen() {
    var self = this;
    $(document).keydown(function(ev) {
      self.keyDown(ev);
    })
  }

  FlightRecorder.prototype.keyDown = function keyDwon(ev){
    if ([ev.keyCode] != 82){
      return;
    }
    ev.preventDefault();

    this.recording = !this.recording;
    var cmd = this.recording ?  "start": "stop";
    this.socket.emit("/flightRecorder" + cmd, {})
  };

  fr = new FlightRecorder;
  fr.listen();

}(window, document));
