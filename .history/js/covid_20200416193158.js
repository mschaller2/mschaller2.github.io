self.importScripts("webgl-globe-master/globe/third-party/Detector.js", "webgl-globe-master/globe/third-party/three.min.js",
    "webgl-globe-master/globe/third-party/Tween.js", "webgl-globe-master/globe/globe.js")
var container = document.getElementById('container');
var globe = new DAT.Globe(container);
globe.animate();