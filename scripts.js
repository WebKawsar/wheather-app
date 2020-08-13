const city = document.querySelector(".city");
const date = document.querySelector(".date");

const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const hiLow = document.querySelector(".hi-low");

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", function(event){


    if (event.keyCode == 13) {
        
        event.preventDefault();
        searchValue = searchBox.value;
    
        const apiKey = "3369900f5b58c49516413f8ecdb9439d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;
  
        fetch(url)
        .then(response => response.json())
        .then(data => {

            // console.log(data);
            // console.log(data.name, data.sys.country);
            // console.log(data.weather[0].description);
            // console.log(data.weather[0].icon);
            // console.log(data.main.temp);

            city.innerHTML = `${data.name}, ${data.sys.country}`;
            const newDate = new Date();

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const day = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

            date.innerHTML = `${day[newDate.getDay() + 1]} ${newDate.getDate( )} ${months[newDate.getMonth()]}  ${newDate.getFullYear()}`;
            
            const getTemp = `${data.main.temp}`;
            const roundTemp = Math.round(getTemp);
            temp.innerHTML = `${roundTemp}°c`;
            weather.innerHTML = data.weather[0].description;

            hiLow.innerHTML = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;

        })

    }

    


});


