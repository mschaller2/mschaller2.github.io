// https://simplemaps.com/data/world-cities for lat/lng data

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
    globe.addData([43.7844, -88.7879, 0.15], {format: "magnitude"});
    globe.createPoints();
    countries();
}
let countries = function(){
    let countryList = fetch("../countries.json")
    console.log(countryList);
    /*
    countryList.forEach(country => {
        if (country.capital == "primary"){
                console.log(country);
        }
    }); 
    */
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


scriptLoad(args, run);