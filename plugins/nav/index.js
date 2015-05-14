var channel = 0;
SPEED = 0.5
TURNINGSPEED = 0.6
TESTINGSPEED = 0.8

console.log('in file')

function navigator(name, deps) {
  console.log('in navigator');
  deps.io.sockets.on('connection', function(socket){
    console.log('in socket')

    socket.on('/takeoff', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action]();
    });

    socket.on('/hover', function(cmd){
      return deps.client[cmd.cmd]();
    });

    socket.on('/land', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action]();
    });

    socket.on('/front', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });

    socket.on('/back', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });

    socket.on('/left', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });

    socket.on('/right', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });

    socket.on('/up', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](TURNINGSPEED);
    });

    socket.on('/down', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });

    socket.on('/clockwise', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](TESTINGSPEED);
    });

    socket.on('/counterClockwise', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](TURNINGSPEED);
    });

    socket.on('/flipAhead', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client.animate(cmd.cmd.action, 100));
      return deps.client.animate(cmd.cmd.action, 100);
    });

    socket.on('/flipBehind', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client.animate(cmd.cmd.action, 100));
      return deps.client.animate(cmd.cmd.action, 100);
    });

    socket.on('/flipLeft', function(cmd){
      console.log(cmd.cmd.action);
      return deps.client.animate(cmd.cmd.action, 100);
    });

    socket.on('/flipRight', function(cmd){
      console.log(cmd.cmd.action);
      return deps.client.animate(cmd.cmd.action, 100);
    });

    // socket.on('/360video', function(cmd){
    //   console.log(cmd.cmd.action);
    //   console.log("Turning for 360")
    //   return deps.client[cmd.cmd.action](TURNINGSPEED);
    //   function stopMotionAndRecording(){
    //     console.log("Stopping 360")
    //     this.socket.emit("/hover", {cmd:'stop'});
    //     this.socket.emit("/flightRecorder/" + "stop", {})
    //   };
    //   this.setTimeout(function(){stopMotionAndRecording()}, 5000);
    // });

  });
};

module.exports = navigator;
