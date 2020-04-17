const args = ["webgl-globe-master/globe/third-party/Detector.js", "webgl-globe-master/globe/globe.js", 
"webgl-globe-master/globe/third-party/three.min.js", "webgl-globe-master/globe/third-party/Tween.js"];
// horrible code but fix later
function scriptLoad(urls, callback){
    var i = 0;
    var head = document.head;
    for (i; i < 4; i++){
        var script = document.createElement("script")
        script.type = 'text/javascript';
        script.src = urls[i];
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    
}
let run = function(){
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    globe.animate();
    countries();
}
let countries = function(){
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      data["US"].forEach(({date, confirmed, recovered, deaths }) => {
        if (date === "2020-04-16"){
            console.log(`${date} active cases: ${confirmed - recovered - deaths}`);
        }
        });
    });
}


scriptLoad(args, run);