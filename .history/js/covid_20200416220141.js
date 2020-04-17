// https://simplemaps.com/data/world-cities for lat/lng data

const args = ["webgl-globe-master/globe/third-party/Detector.js", "webgl-globe-master/globe/globe.js", 
"webgl-globe-master/globe/third-party/three.min.js", "webgl-globe-master/globe/third-party/Tween.js"];

// horrible code but fix later
async function scriptLoad(){
    var i = 0;
    var head = document.head;
    for (i; i < 4; i++){
        var script = document.createElement("script")
        script.type = 'text/javascript';
        script.src = args[i];
        head.appendChild(script);
    }
    return 1;

}
let caseData = function(){
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
      data["US"].forEach(({date, confirmed, recovered, deaths }) => {
        if (date === "2020-4-16"){
            console.log(`${date} active cases: ${confirmed - recovered - deaths}`);
        }
        });
    });
}
let countries = function(globe){
    fetch("../countries.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(({capital, lat, lng}) => {
            if (capital === "primary"){
                globe.addData([lat, lng, 0.15], {format: "magnitude"});
            }
        });

    })
    .then(caseData());
}

let run = function(){
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    countries(globe);
    globe.createPoints();
    globe.animate();
    
}
async function start(){
    await scriptLoad();
    run();
}
start();