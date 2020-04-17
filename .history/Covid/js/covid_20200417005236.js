// https://simplemaps.com/data/world-cities for lat/lng data
// https://pomber.github.io/covid19/timeseries.json for daily covid data

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
                    dailyCount[location] = confirmed - recovered - deaths;
                }
                });
        }
    });
    fetch("../Coivd/countries.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(({country, capital, lat, lng}) => {
            if (capital === "primary" && dailyCount[country] != undefined){
                var size = dailyCount[country] / 75000;
                console.log(`${country} : ${dailyCount[country]} cases`);
                countryList.push([lat, lng, size]);
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
