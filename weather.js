const apiKey = `dba4cc09bbd43400a94d693d22f6bcf4`
const search = document.querySelector("#search")
const temp = document.querySelector(".temp")
const type = document.querySelector(".type")
const real = document.querySelector(".real")
const hmd = document.querySelector(".hmd")
const prse = document.querySelector(".prse")
const speed = document.querySelector(".speed")
const btn = document.querySelector(".btn")
const header = document.querySelector(".header")
const time = document.querySelector(".time")
const zone = document.querySelector(".zone")
const week1 = document.querySelector(".week")
const month1 = document.querySelector(".month")
const day1 = document.querySelector(".day")
const year1 = document.querySelector(".year")
const box3 = document.querySelector(".box3")
const img1 = 'clear-sky.png'
const img2 = 'cloudy.png'
const img3 = 'haze.png'
const img4 = 'mist.png'
const img5 = 'rain.png'
const img6 = 'snow.png'
const img7 = 'storm.png'

const getWeather = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        const temp1 = data.main.temp
        const temp2 = Math.ceil(temp1)
        temp.innerHTML = `<div class="temp">${temp2}°C</div>`
        const type1 = data.weather[0].main
        type.innerHTML = `<div class="type">${type1}</div>`
        switch (type1) {
            case "Clear":
                 box3.innerHTML = `<img src="${img1}" alt="" style="transition: all 3s ease;">`
                break;
            case "Clouds":
                 box3.innerHTML = `<img src="${img2}" alt="">`
                break;
            case "Haze":
                 box3.innerHTML = `<img src="${img3}" alt="">`
                break;
            case "Smoke":
                 box3.innerHTML = `<img src="${img4}" alt="">`
                break;
            case "Mist":
                 box3.innerHTML = `<img src="${img4}" alt="">`
                break;
            case "Rain":
                 box3.innerHTML = `<img src="${img5}" alt="">`
                break;
            case "Snow":
                 box3.innerHTML = `<img src="${img6}" alt="">`
                break;
            case "Storm":
                 box3.innerHTML = `<img src="${img7}" alt="">`
                break;
        
            default:
                box3.innerHTML = "OOPS!"
                break;
        }
        const real1 = data.main.feels_like
        const real2 = Math.floor(real1)
        real.innerHTML = `<div class="real">${real2}°C</div>`
        const hmd1 = data.main.humidity
        hmd.innerHTML = `<div class="real">${hmd1}%</div>`
        const prse1 = data.main.pressure
        prse.innerHTML = `<div class="real">${prse1}mbar</div>`
        const speed1 = data.wind.speed
        speed.innerHTML = `<div class="real">${speed1}km/h</div>`
        header.innerHTML = `Weather Status for ${city.toUpperCase()}`
    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const cityName = search.value    
    getWeather(cityName)
})


setInterval(() => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    if (hour >= 0 && hour <= 11) {
        time.innerHTML = `${hour}:${minute}`
        zone.innerHTML = "AM"
    }
    else {
        time.innerHTML = `${hour}:${minute}`
        zone.innerHTML = "PM"
    }
}, 1000);

let myDate = new Date()
let dateVar = myDate.toDateString()
let dateArr = dateVar.split(' ')
let week = dateArr[0]
let month = dateArr[1]
let day = dateArr[2]
let year = dateArr[3]
week1.innerHTML = `${week}`
month1.innerHTML = `${month}`
day1.innerHTML = `${day}`
year1.innerHTML = `${year}`