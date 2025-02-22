let div = document.querySelector(".weathercard")
// let city = prompt("Please enter the city");

function findweather() {
    
    let city = document.querySelector(".input").value

fetch(`https://api.weatherapi.com/v1/current.json?key=5f2f2b5f132c4169a25150518252102&q=${city}`)
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        console.log(res);
         div.innerHTML = `<div class="card text-bg-dark border border-primary rounded p-3 d-flex justify-content-between">
         <div class="">
            <img src="${res.current.condition.icon}" class="card-img" alt="Weather icon" style="width: 50px; height: 50px;">
                <h5 class="card-title">${res.current.condition.text} </h5>
                 <h5 class="card-title"> ${res.current.feelslike_c}°C </h5>
                </div>
                <div>
                <p class="card-text">${res.location.name}</p>
                <p class="card-text"><small>${res.location.country} ${res.location.localtime} ${res.location.region}</small></p>
                </div>
        </div>`
    })
    .catch((error) => {
        console.log('Fetch error:', error);
    });
}
   
















































































//     let city = prompt("Please enter the city");

// fetch(`https://api.weatherapi.com/v1/current.json?key=5f2f2b5f132c4169a25150518252102&q=${city}`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         return response.json();
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log('Fetch error:', error);
//     });



// let city = prompt("please enter the city") 
// // fetch(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6901eeec107c4077900144617252102`)

// .then((response) => {
//     return response.json()
// })
// .then ((res) => {
//     console.log(res);
// })
// .catch((error) => {console.log(error);
// })













