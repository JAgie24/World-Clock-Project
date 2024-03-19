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

updateTime();
setInterval(updateTime, 1000);
