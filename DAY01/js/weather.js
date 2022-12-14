const API_KEY = "78dcbd6312d0320b995f5ef5891d5e9b"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        // console.log(data.name, data.weather[0].main);
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText  = `${data.weather[0].main}/${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
