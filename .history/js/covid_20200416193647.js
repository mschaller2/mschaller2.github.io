
fetch("webgl-globe-master/globe/globe.js");
fetch("webgl-globe-master/globe/third-party/three.min.js");
fetch("webgl-globe-master/globe/third-party/Tween.js");
fetch("webgl-globe-master/globe/globe.js");
var container = document.getElementById('container');
var globe = new DAT.Globe(container);
globe.animate();