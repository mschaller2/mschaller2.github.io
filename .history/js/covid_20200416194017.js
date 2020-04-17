function scriptLoad(url){
    var script = document.createElement("script")
    script.src = url;
    document.head.appendChild(script);
}
scriptLoad("webgl-globe-master/globe/third-party/Detector.js");
scriptLoad("webgl-globe-master/globe/third-party/three.min.js");
scriptLoad("webgl-globe-master/globe/third-party/Tween.js");
scriptLoad("webgl-globe-master/globe/globe.js");

var container = document.getElementById('container');
var globe = new DAT.Globe(container);
globe.animate();