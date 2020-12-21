const form = (city, temp) => {
    return `
    <div class='wrapper'>
    <div class='info'>
      <i class='fa fa-4x fa-sun-o icon'></i>
      <div>
        <div class='degree'>${temp}°</div>
        <div class='country'>${city}</div>
      </div>
    </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', getW)

async function getW() {
    let location = localStorage.getItem('city') || 'moscow'

    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b71a061370e90df32bbb79823630c486`)
    const data = await res.json()
    
    let temp = Math.round(data.main.temp - 273)
    location = location[0].toUpperCase() + location.slice(1)

    document.querySelector('#weather').innerHTML = form(location, temp)
}
