var channel = 0;

function navigator(name, deps) {
  deps.io.sockets.on('connection', function(socket){
    socket.on('/takeoff', function(cmd) {
      return deps.client[cmd.action]
      // return typeof deps.client[cmd.action]
      });
    });
}