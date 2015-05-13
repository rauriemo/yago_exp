(function(window, document, $) {
  console.log("inner index file")

  var Video = function Video(cockpit) {
    console.log("video stream plugin loaded");

    $('#dronestream').append('<div id="drone-feed"></div>');

    videostream = new NodecopterStream(document.getElementById("drone-feed"), {port: 3001}
      );
  }

window.Cockpit.plugins.push(Video);

})(window, document, jQuery);
