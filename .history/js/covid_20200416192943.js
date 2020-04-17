import * as test1 from "webgl-globe-master/globe/third-party/Detector.js"
import * as test2 from "webgl-globe-master/globe/third-party/three.min.js"
import * as test3 from "webgl-globe-master/globe/third-party/Tween.js"
import * as test4 from "webgl-globe-master/globe/globe.js"

var container = document.getElementById('container');
var globe = new DAT.Globe(container);
globe.animate();