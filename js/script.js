$( document ).ready(function() {

  var btn = document.getElementsByClassName("grid-item__button"); // get all buttons

  for (let i = 0; i < btn.length; i++) {                          // for each button
    btn[i].addEventListener("click", function() {                 // add click event listener to the button
      // console.log("Clicked Button: ", this.dataset.title);
      for (let j = 0; j < btn.length; j++) {                      // for each button
        if (j !== i) {                                            // if not the button that was clicked
        btn[j].classList.remove("grid-item__button--active");     // remove active class
        }
      }

      this.classList.toggle("grid-item__button--active");         // toggle active state on button clicked
      setTimeframe(this.dataset.title);                           // call functuion to switch displayed data to chosen timeframe
    });
  }

});

let apiUrl = "data.json"
let trackerData = "";

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

async function main() {
    trackerData = await getJson(apiUrl);
    // console.log("Tracker Data: ", trackerData);
    document.getElementById("btnDaily").classList.add("grid-item__button--active");
}

main();

function setTimeframe(timeFrame) {
  // console.log("Switch Timeframe:", timeFrame);
  // console.log("trackerData: ",trackerData);
  for (let i = 0; i < trackerData.length; i++) {

    thisTitle = trackerData[i].title;

    thisArticle = document.getElementsByClassName("grid-item--" + thisTitle.replace(/\s+/g, '-').toLowerCase());

    trackerTimeElement = $(thisArticle[0]).find("p.tracker__time")[0];
    // console.log("trackerTimeElement: ", trackerTimeElement);

    newTime = trackerData[i].timeframes[timeFrame].current;
    trackerTimeSuffix = '';

    if (newTime == '1') {
      trackerTimeSuffix = 'hr';
    } else {
      trackerTimeSuffix = 'hrs';
    };

    trackerTimeElement.innerHTML = newTime + trackerTimeSuffix;
    // console.log("trackerTimeElement: ", trackerTimeElement);


    previousTimeElements = $(thisArticle[0]).find("p.tracker__previous");

    newPreviousTime = trackerData[i].timeframes[timeFrame].previous;
    // console.log("newPreviousTime: ", newPreviousTime);
    previousTimeSuffix = '';

    if (newPreviousTime == '1') {
      previousTimeSuffix = 'hr';
    } else {
      previousTimeSuffix = 'hrs';
    };

    previousTimeElements.each(function(index) {this.innerHTML = "Previous - " + newPreviousTime + previousTimeSuffix});

  };                     

}
