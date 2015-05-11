var channel = 0;
SPEED = 0.04
TURNINGSPEED = 0.6

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
      return deps.client[cmd.cmd.action](TURNINGSPEED);
    });

    socket.on('/counterClockwise', function(cmd){
      console.log(cmd.cmd.action);
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](TURNINGSPEED);
    });



  });
};

module.exports = navigator;
