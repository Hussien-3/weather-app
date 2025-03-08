const input = document.querySelector(".search-bar")
const but = document.querySelector("button")
const apiKay = "1230ac50dabeacc68e8644d108d2c0cf"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const weather = document.querySelector(".wather-icon")

async function checkwether(city) {
    const res = await fetch(apiUrl + city +`&appid=${apiKay}`)

    if(res.status == 404){
        document.querySelector(".error p").innerHTML = "the city is not define !"
    }else{
        document.querySelector(".error p").innerHTML = ""
    }

    const data = await res.json();

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + "%"
    document.querySelector(".humidity").innerHTML = Math.floor(data.wind.speed) + " km/h"
    console.log(data.weather[0].main)

    if (data.weather[0].main === "Clear") {
        weather.src = "images/clear.png"
    }else if(data.weather[0].main === "Clouds") {
        weather.src = "images/clouds.png"
    }else if (data.weather[0].main === "Rain") {
        weather.src = "images/rain.png"
    }else if (data.weather[0].main === "Drizzle") {
        weather.src = "images/drizzle.png"
    }else if (data.weather[0].main === "Mist") {
        weather.src = "images/mist.png"
    }
}


but.addEventListener("click", () => {
    checkwether(input.value)
});

