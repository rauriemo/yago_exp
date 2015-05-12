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
    console.log("listener activated")
    var self = this;
    $(document).keydown(function(ev) {
      self.keyDown(ev);
    })
  }

  FlightRecorder.prototype.keyDown = function keyDown(ev){
    if ([ev.keyCode] != 82){
      return;
    }
    ev.preventDefault();

    this.recording = !this.recording;
    console.log("recording button clicked")
    var cmd = this.recording ?  "start": "stop";
    this.socket.emit("/flightRecorder/" + cmd, {})
  };

  var fr = new FlightRecorder();
  fr.listen();

}(window, document));
