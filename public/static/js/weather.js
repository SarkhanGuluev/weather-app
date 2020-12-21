document.querySelector('#search').addEventListener('click', getWeather)


async function getWeather() {

    let location = document.querySelector('#location').value.toLowerCase()
    
    if(localStorage.length == 0) {
        localStorage.setItem('city', location)
    } else {
        localStorage.clear()
        localStorage.setItem('city', location)
    }

    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b71a061370e90df32bbb79823630c486`)
    const data = await res.json()
    
    let temp = Math.round(data.main.temp - 273)
    location = location[0].toUpperCase() + location.slice(1)

    document.querySelector('#weather').innerHTML = form(location, temp)
    document.querySelector('#location').value = ''
}