var join = require('path').join

console.log("This is the outer index file")

function video(name, deps){

var path = '/plugin/' + name + '/js/nodecopter-client.js';
    // serve nodecopter-client from node_modules:

    deps.app.get(path, function (req, res) {
        res.sendfile(join(
            'node_modules', 'dronestream', 'dist', 'nodecopter-client.js'
        ));
    });

var path2 = '/plugin/' + name + '/js/nodecopter-stream.js';
    // serve nodecopter-stream from node_modules:

    deps.app.get(path2, function (req, res) {
        res.sendfile(join(
            'node_modules', 'dronestream', 'dist', 'nodecopter-stream.js'
        ));
    });

    require("dronestream").listen(3001, {tcpVideoStream: deps.client.getVideoStream()});

}

module.exports = video