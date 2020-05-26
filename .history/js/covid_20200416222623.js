// https://simplemaps.com/data/world-cities for lat/lng data

// horrible code but fix later
var countryList = {};
let run = async function(){
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    await countries(globe);
    console.log(countryList);
    globe.addData(countryList, {format: "magnitude"});
    globe.createPoints();
    globe.animate();
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
let countries = async function(globe){
    fetch("../countries.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(({capital, lat, lng}) => {
            if (capital === "primary"){
                countryList.push({"lat": lat, "lng": lng, size: 0.15})
            }
        });

    })
    .then(caseData());
}
run();