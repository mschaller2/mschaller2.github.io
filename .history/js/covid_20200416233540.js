// https://simplemaps.com/data/world-cities for lat/lng data

// horrible code but fix later
var countryList = [];
var dailyCount = {};
let run = async function(){
    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    countries(globe);
}

let countries = function(globe){
    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        for (var location in data){
            data[location].forEach(({date, confirmed, recovered, deaths }) => {
                if (date === "2020-4-16"){
                    //console.log(`${date} active cases: ${confirmed - recovered - deaths}`);
                    dailyCount.location = confirmed - recovered - deaths;
                }
                });
        }
    });
    console.log(dailyCount);
    fetch("../countries.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(({capital, lat, lng}) => {
            if (capital === "primary"){
                countryList.push([lat, lng, 0.15]);
            }
        });
        var i = 0;
        for (i; i < countryList.length; i++){
            globe.addData(countryList[i], {format: "magnitude"});
            globe.createPoints();
        }
        globe.animate();
    });
}
run();
