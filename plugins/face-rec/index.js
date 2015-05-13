var cv = require('opencv');
var Controller = require('node-pid-controller');
var Events = require('events');
var EventEmitter = new Events.EventEmitter();
var async = require('async');
var DT = 150;
var lastPNG;
var tracking = false;
var debug = true;
var processingImage = false;
var face_cascade = new cv.CascadeClassify(path.join(__dirname, 'node_modules', 'opencv', 'data', 'haarcascade_frontalface_alt2.xml'));

var ver_control = new Controller(0.3, 0.01, 0.1);
var hor_control = new Controller(0.4, 0.01, 0.1);
function log(str){
  if (debug) {
    console.log(str)
  }
}
var times = []

function detectFaces(){
  if (tracking && (!processingImage) && lastPNG){
    processingImage = true;
    async.waterfall([
        function(cb){
          client.stop;
          setTimeout(function(){
            EventEmitter.once('newPng', function(){
              cb();
            });
          }, 200)
        },
        function(cb){
          cv.readImage(lastPNG, function(err, im){
            cb(err, im)
          });
        },
        function(im, cb){
          var ops = {};
          face_cascade.detectMultiscale(im, function(err, faces){
            cb(err, faces, im);
          }, opts.scale, opts.neighbors, opts.min && opts.min[0], opts.min && opts.min[1]);
        },
        function(faces, im, cb){
          var face;
          var biggestFace;
          var dt = DT;
          for(var i = 0; i < faces.length; i++){
            face = faces[i];
            if (!biggestFace || biggestFace.width < face.width) biggestFace = face;
          }
          if (biggestFace) {
            face = biggestFace;
            io.sockets.emit('face', {x: face.x, y: face.y, w: face.width, h: face.height, iw: im.width(), ih: im.height()});
            face.centerX = face.x + face.width * 0.5;
            face.centerY = face.y + face.height * 0.5;
            var centerX = im.width() * 0.5;
            var centerY = im.height() * 0.5;
            var heightAmount = -(face.centerY - centerY) / centerY;
            var turnAmount = -(face.centerX - centerX) / centerX;
            heightAmount = ver_control.update(-heightAmount);
            turnAmount = hor_control.update(-turnAmount);

            var lim = 0.1;
            if (Math.abs(turnAmount) > lim || Math.abs(heightAmount) > lim) {
                log('turning ' + turnAmount)
              if (turnAmount < 0){
                client.clockwise(Math.abs(turnAmount));
              }else {
                client.counterClockwise(turnAmount);
              }
              log("Going vertical " + heightAmount)
              if (heightAmount < 0){
                client.down(Math.abs(heightAmount));
              }else {
                client.up(heightAmount);
              }
            }else{
              client.stop();
            }
          }
          processingImage = false;
          cv(null, dt)
        }
      ], function(err, dt){
        dt = Math.max(dt, DT);
        setTimeout(detectFaces, dt);
      });
  } else {
    if (tracking) {
      setTimeout(detectFaces, DT);
    }
  };
};

function facerec(name, deps){
  debug = deps.debug || false;
  io = deps.io;
  io.sockets.on('connection', function(socket){
    socket.on('/faceRec', function(cmd){
      tracking = tracking ? false : true
      if (tracking){
        console.log("Facial recognition activated");
        detectFaces();
      } else {
        console.log("Facial recognition deactivated");
      }
    })
  })
  client = deps.client;
  client.createPngStream().on('error', console.log).on('data', function(pngBuffer){
    lastPNG = pngBuffer;
    EventEmitter.emit('newPng');
  })
}

module.exports = facerec









