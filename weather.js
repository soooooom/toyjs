const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "7f1229c2613f6495e32a6865434e543b";

function getweather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temp =json.main.temp; 
            const place =json.name;
            weather.innerText = `${temp} @${place}`
        });

}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    console.log(position);
    const longitude =position.coords.longitude;
    const latitude =position.coords.latitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getweather(latitude,longitude);
}
function handleGeoError(){}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords =JSON.parse(loadedCoords);
        getweather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();