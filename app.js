const apikey = "6f102bd84a9e35d686bf74d815825593";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".serachinput");
const searchbtn = document.querySelector(".searchbuttton");
const img1 = document.querySelector(".img1");
const error = document.querySelector(".error");
const down = document.querySelector(".down");
document.querySelector(".error").style.display = "none";
async function chekweather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    const kk = data.weather[0].main;
    if (response.status == 404) {
        document.querySelector(".down").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".down").style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".city1").innerHTML = data.name;
        document.querySelector(".temp1").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".winddata").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humdata").innerHTML = data.main.humidity + "%";
        if (kk == "Clear") {
            img1.src = "clear.png";

        }
        else if (kk == "Clouds") {
            img1.src = "clouds.png";

        }
        else if (kk == "Drizzle") {
            img1.src = "drizzle.png";

        }
        else if (kk == "Moisture") {
            img1.src = "mist.png";

        }
        else if (kk == "Snow") {
            img1.src = "snow.png";

        }
        else {
            img1.src = "ll.png"
        }

    }


}
searchbtn.addEventListener("click", () => {


    chekweather(searchbox.value);

})