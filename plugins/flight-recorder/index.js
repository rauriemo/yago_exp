var fs = require('fs')
var path = require('path')
var df = require('dateformat')
var PaVEParser = require('ar-drone/lib/video/PaVEParser')

var client,
  io,
  config,
  navStream,
  paveStream,
  motionStream,
  videoStream,
  paveStream,
  recording = false;

  function flightrecorder(name, deps) {
    client = deps.client;
    io = deps.io;
    config = deps.config;

    //Listen to user actions to start/stop recording
    //"deps.io" probably unnecessary?
    deps.io.sockets.on('connection', function (socket){
      socket.on('/flightRecorder/start', function(cmd){
        console.log("Inside start")
        _start();
      });
      socket.on('/flightRecorder/stop', function(cmd) {
        _stop();
      });
    });

    //SKIPPING NAV DATA METHOD

    //Process videostream
    var parser = new PaVEParser();
    parser.on('data', function(data) {
      _writeVideo(data);
    })
    client.getVideoStream().pipe(parser);

  };

  function _start() {
    if (recording) return;
    console.log("Recording has started")
    if (config && config.flightrecorder && config.flightrecorder.path) {
      var root = config.flightrecorder.path
    } else {
        var root = ".";
    }

    var folder = df(new Date(), "yyyy-mm-dd_hh_MM-ss");
    fs.mkdir(path.join(root,folder), function(){
      videoStream = fs.createWriteStream(path.join(root,folder,'video.h264'));
      paveStream = fs.createWriteStream(path.join(root, folder, 'paveHeaders.txt'));
      recording = true;
    })
  }

  function _stop() {
    if (!recording) return;
    console.log("Stopped recording")
    console.log("Stopped recording navigation data");
    recording = false;
    videoStream.end();
    paveStream.end();
  }

  function _writeVideo(data) {
    if (!recording) return;

    videoStream.write(data.payload);

    var header = {
          signature               : data.signature,
          version                 : data.version,
          video_codec             : data.video_codec,
          header_size             : data.header_size,
          payload_size            : data.payload_size,
          encoded_stream_width    : data.encoded_stream_width,
          encoded_stream_height   : data.encoded_stream_height,
          display_width           : data.display_width,
          display_height          : data.display_height,
          frame_number            : data.frame_number,
          timestamp               : data.timestamp,
          total_chunks            : data.total_chunks,
          chunk_index             : data.chunk_index,
          frame_type              : data.frame_type,
          control                 : data.control,
          stream_byte_position_lw : data.stream_byte_position_lw,
          stream_byte_position_uw : data.stream_byte_position_uw,
          stream_id               : data.stream_id,
          total_slices            : data.total_slices,
          slice_index             : data.slice_index,
          header1_size            : data.header1_size,
          header2_size            : data.header2_size,
          advertised_size         : data.advertised_size,
    }
    paveStream.write(JSON.stringify(header) + "\n");
  }
module.exports = flightrecorder;


