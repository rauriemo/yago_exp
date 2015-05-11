var channel = 0;
SPEED = 0.34

console.log('in file')

function navigator(name, deps) {
  console.log('in navigator');
  deps.io.sockets.on('connection', function(socket){
    console.log('in socket')

    socket.on('/takeoff', function(cmd) {
      console.log(cmd.cmd.action);
      var _name = cmd.cmd.action;
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action]();
    });

    socket.on('/hover', function(cmd){
      return deps.client[cmd.cmd.action]();
    })

    socket.on('/front', function(cmd) {
      console.log(cmd.cmd.action);
      var _name = cmd.cmd.action;
      console.log(deps.client[cmd.cmd.action]);
      return deps.client[cmd.cmd.action](SPEED);
    });


  });
};

module.exports = navigator;
