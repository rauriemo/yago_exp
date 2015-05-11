(function(window, document, $) {
  console.log("inner index file")

  var stream = function Video() {
    console.log("video stream plugin loaded");

    $('#dronestream').append('<div id="drone-feed"></div>');

    videostream = new NodecopterStream(document.getElementById("drone-feed"), {port: 3001}
      );
  }

  // new Video;

})(window, document, jQuery);