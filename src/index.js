function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesMoment = moment();
  losAngelesDate.innerHTML = losAngelesMoment.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesMoment
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small]");

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyMoment = moment();
  sydneyDate.innerHTML = sydneyMoment.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyMoment
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `
  <div class="city">
  <div>
   <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        </div>
        <a href="https://world-clock-project-oja.netlify.app/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelector = document.querySelector("#city-selector");
citySelector.addEventListener("change", updateCity);
