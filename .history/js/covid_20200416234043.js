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
        console.log("-----------github json------------")
        for (var location in data){
            console.log(location)
            data[location].forEach(({date, confirmed, recovered, deaths }) => {
                if (date === "2020-4-16"){
                    dailyCount[location] = confirmed - recovered - deaths;
                }
                });
        }
    });
    console.log(dailyCount);
    fetch("../countries.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(({country, capital, lat, lng}) => {
            console.log("-----------local json------------");
            if (capital === "primary"){
                console.log(country);
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
