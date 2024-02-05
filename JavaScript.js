const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('weather-details');

search.addEventListener('click',() => {

    const APIKey = '8898c617650d04a9dcfcd29df99c7024'; 
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

       const image = document.querySelector('weather-box img');
       const temperature = document.querySelector('weather-box .temperature');
       const description = document.querySelector('weather-box description');
       const humidity = document.querySelector('weather-details .humidity span');
       const wind = document.querySelector('weather-details .wind span');

      switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'sun.png';
            break;

            case 'Rain':
            image.src = 'rain.png';
            break;

            case 'Snow':
            image.src = 'snow.png';
            break;

            case 'Clouds':
            image.src = 'cloud.png';
            break;

            case 'Mist':
            image.src = 'mist.png';
            break;

            case 'Haze':
            image.src = 'mist.png';
            break;
      
        default:
            image.src = 'sun.png';
      }

       temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
       description.innerHTML = `${json.weather[0].description}`;
       humidity.innerHTML = `${json.main.humidity}%`;
       wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });
});