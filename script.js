const key = "2a5372f26de9195592105b16cb41ad98"

function putdataonscreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor (data.main.temp) + "°C"
    document.querySelector(".prev-text"),innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


}

async function findCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    putdataonscreen(data)

}


function clickonbutton() {
    const city = document.querySelector(".input-city").value

    findCity(city)
}


2