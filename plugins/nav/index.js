var channel = 0;

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
      // return typeof deps.client[_name = cmd.cmd.action] === "function" ? deps.client[_name]() : void 0;
      // return typeof deps.client[cmd.cmd.action];
      });
    });
};

module.exports = navigator;