(function (window, undefined){
  'use strict';

  var FaceRec;

  FaceRec = function FaceRec(){
    console.log("loading facial recognition")
    this.tracking = false;
    this.socket = io.connect('http://localhost:3000')

    $('#dronestream').append('<canvas id="faceRec" width="640" height="360"></canvas>')
    $('#dronestream').append('<div id="faceRec-label" style="display:none;">Face Tracking ON</div>')
    this.ctx = $('#dronestream').get(0).getContext('2d');

    var self = this;

    this.socket.on('face', function(data){
      if(self.tracking && !jQuery.isEmptyObject(data)){
        requestAnimationFrame(function() {
          self.render(data);
        });
      }
    });

    $(window).resize(function(event){
      self.draw();
    })

    $(document).keypress(function(event) {
      self.draw();
    });

    $(document).keypress(function(ev) {
      self.keyPress(ev);
    });
  };

  FaceRec.prototype.keyPress = function(ev) {
    console.log("Keypress: ev.keyCode");
    if (ev.keyCode != 88){
      return;
    }
    ev.preventDefault();
    this.tracking = this.tracking ? false : true;
    this.socket.emit("/faceRec", "toggle");
    this.clear();
    if (this.tracking) {
      $('faceRec-label').show();
    }else {
      $('faceRec-label').hide();
    }
  }

  FaceRec.prototype.render = function(data) {
    this.ctx.canvas.width = $('#dronestream').innerWidth();
    this.ctx.canvas.height = $('#dronestream').innerHeight();

    var cw = this.ctx.canvas.width;
    var ch = this.ctx.canvas.height;

    var x = (data.x/data.iw) * cw;
    var y = (data.y/data.ih) * ch;
    var w = (data.w/data.iw) * cw;
    var h = (data.h/data.ih) * ch;

    this.ctx.clearRect(0, 0, cw, ch);
    this.ctx.save();
    this.ctx.strokeStyle = 'green';
    this.ctx.lineWidth = 2;

    this.ctx.strokeRect(x,y,w,h);
    this.ctx.restore();
  }

  FaceRec.prototype.clear = function() {
    this.ctx.canvas.width = $('dronestream').innerWidth;
    this.ctx.canvas.height = $('dronestream').innerHeight;
  }

  new FaceRec();
}(window, undefined))