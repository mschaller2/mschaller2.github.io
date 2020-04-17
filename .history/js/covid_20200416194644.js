function scriptLoad(urls, callback){
    var i = 0;
    var head = document.head;
    for (i; i < 3; i++){
        var script = document.createElement("script")
        script.type = 'text/javascript';
        script.src = urls[i];
        head.appendChild(script);
    }
    var script = document.createElement("script")
    script.type = 'text/javascript';
    script.src = urls[3];
    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
    
}


let run = function(){
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    globe.animate();
}

scriptLoad("webgl-globe-master/globe/third-party/Detector.js", "webgl-globe-master/globe/globe.js", 
"webgl-globe-master/globe/third-party/three.min.js", "webgl-globe-master/globe/third-party/Tween.js", run);