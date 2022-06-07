// Openweathermap API. Do not share it publicly.
const apiKey = 'f94163b36ce84c74bd71ddb5f85e9563';

//Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
const document = d;
const iconImg = d.querySelector('.bx-sun');
const inputCity = d.querySelector('#cityInput');
const city = d.querySelector('#cityoutput');
const description = d.querySelector('#description');
const temp = d.querySelector('#temp');
const wind = d.querySelector('#wind');

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

const convertion = (val) => {
    return (val - 273).toFixed(2)
}

//Now we have to collect all the information with the help of fetch method

btn.addEventListener('click',() => {

    let long;
    let lat;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        long = position.coords.longitude;
        lat = position.coords.latitude;
      
fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}&include=minutely`)
.then(res => res.json())
       //.then(data => console.log(data))
       then((data) => {
           //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.
           const {temp} = data.main;
           console.log(temp)
           //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
           city.innerHTML=`Weather of <span>${nameval}<span>`
       })
      })
    }
})

