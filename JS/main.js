let today = document.querySelector(".today-day")
let dayOfMonth = document.querySelector(".dayOfMonth");
let month = document.querySelector(".monthOfYear");
let daysOfWeeks = ["sunday" , 'monday' , "Tuesday" , "Wednesday" , "Thursday" , "friday" , "saturday"];
let months = ["January" , "February" ,"March" ,"April" ,"May" ,"June","July","August","September","October","November","December"];
let date = new Date();
let city = document.querySelector(".city-location");
let inputSearch = document.getElementById("search-input");
let degree = document.querySelector(".temprature")
let todayDegreeIcon = document.querySelector(".today-degree-icon");
let todayWeatherStuts = document.querySelector(".today-weather-stuts");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let dirction = document.querySelector(".dirction");
let nextDayDay = document.querySelectorAll(".next-day-day");
let nextDayOfMonth = document.querySelectorAll(".nextDayOfMonth");
let nextMonthOfYear = document.querySelectorAll(".nextMonthOfYear");
let nextDayIcons = document.querySelectorAll(".nextDayIcon ")
let temprature = document.querySelectorAll(".next-temprature");
let nextMinorTemprature = document.querySelectorAll(".next-minor-temprature");
let nextdayWeatherStuts = document.querySelectorAll(".nextday-weather-stuts");
let weather;
let myWeather;







async function getWeatherData(cityname = "cairo") {
    weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cityname}&days=3`);
    myWeather = await weather.json();
    console.log(myWeather)
    DisplayTodayWeather();
    displayNextDay()
}

function DisplayTodayWeather() {
    try
        {
        
        if (!weather.ok) {
            throw new Error(`City "${cityname}" not found`);
            
        }
        console.log( "kfkf" , myWeather)
        degree.innerHTML = myWeather.current.temp_c;
        todayDegreeIcon.setAttribute("src" , `https://${myWeather.current.condition.icon}`);
        todayWeatherStuts.innerHTML = myWeather.current.condition.text;
        humidity.innerHTML = myWeather.current.humidity;
        wind.innerHTML = `${myWeather.current.wind_kph} KM`;
        dirction.innerHTML = myWeather.current.wind_dir;
        today.innerHTML = daysOfWeeks[date.getDay()] ;
        dayOfMonth.innerHTML = date.getDate();
        month.innerHTML = months[date.getMonth()];

    }

    catch(error)
    {
        console.log(error);
        city.innerHTML = "City not found";
        degree.innerHTML = "--";
        todayDegreeIcon.setAttribute("src", "");
        todayWeatherStuts.innerHTML = "Unavailable";
        humidity.innerHTML = "--";
        wind.innerHTML = "--";
        dirction.innerHTML = "--";

    }
}

function displayNextDay() {


    try
        {
        
        if (!weather.ok) {
            throw new Error(`City  not found`);
            
        }
        for (let i = 0; i < nextDayDay.length; i++) {
            console.log(nextDayDay)
            nextDayDay[i].innerHTML = daysOfWeeks[new Date(myWeather.forecast.forecastday[i+1].date).getDay()];
            nextDayOfMonth[i].innerHTML = new Date(myWeather.forecast.forecastday[i+1].date).getDate();
            nextMonthOfYear[i].innerHTML = months[new Date(myWeather.forecast.forecastday[i+1].date).getMonth()];
            nextDayIcons[i].setAttribute("src" , `https://${myWeather.forecast.forecastday[i+1].day.condition.icon}`);
            temprature[i].innerHTML = myWeather.forecast.forecastday[i+1].day.maxtemp_c ;
            nextMinorTemprature[i].innerHTML = myWeather.forecast.forecastday[i+1].day.mintemp_c ;
            nextdayWeatherStuts[i].innerHTML = myWeather.forecast.forecastday[i+1].day.condition.text
        }
        
    }

    catch(error)
    {
        for (let i = 0; i < nextDayDay.length; i++) {
        console.log(error);
        nextDayIcons[i].setAttribute("src", "");
        temprature[i].innerHTML = "--";
        nextMinorTemprature[i].innerHTML = "--";
        nextdayWeatherStuts[i].innerHTML = "Unavailable";
        
        }
    }


    
}

inputSearch.addEventListener("keyup" , function(){

    if(this.value === ""){
        city.innerHTML ="cairo"
        getWeatherData("cairo");
        sayHello();

    }
    else
    {
        city.innerHTML = this.value
        getWeatherData(this.value);
    }
})

getWeatherData()


let m = [];
m.length




