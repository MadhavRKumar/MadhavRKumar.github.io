var f = '<a id="convert" onclick="convert()">F</a>';
var c = '<a id="convert" onclick="convert()">C</a>';
var isF;
var temp;
var skycons = new Skycons({
  "color": "white"
});

$(document).ready(function() {
  setBackground();
  getWeatherByLocation();
});

function getWeatherByLocation() {
  if (navigator.geolocation) {
    requestLocation();
  } else {
    alert("Geolocation is not supported");
  }
}

function requestLocation() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  function success(pos) {
    var lng = pos.coords.longitude;
    var lat = pos.coords.latitude;
    getTemperature(lng, lat);
  }

  function error(err) {
    alert("Oops! Can't get your location. Make sure you're using https:// or try using a different bowser. If you're on mobile, try turning off wi-fi.");
  }

}

var url = "https://api.forecast.io/forecast/1c6c3131de5dea091fc7e4618f448085/";

function getTemperature(lng, lat) {
  url += `${lat},${lng}`;
  $.ajax({
    url: url,
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
      temp = data.currently.temperature;
      document.getElementById("temperature").innerHTML = temp.toFixed(1) + "&deg" + f;
      isF = true;
      skycons.set("icon", data.currently.icon);
      skycons.play();
    },
    error: function(err) {
      console.log(err);
    }
  });
}

function setBackground() {
  var date = new Date();
  var time = date.getHours();
  if (time < 19 && time > 7) {
    $("body").addClass('sunny');
  } else {
    $("body").addClass('starry');
  }
}

function convert() {
  if (isF) {
    document.getElementById("convert").innerHTML = "C";
    isF = false;
  } else {
    document.getElementById("convert").innerHTML = "F";
    isF = true;
  }
  convertTemp();
}

function convertTemp() {
  if (!isF) {
    temp = (temp - 32) * 5 / 9;
    document.getElementById("temperature").innerHTML = temp.toFixed(1) + "&deg" + c;
  } else {
    temp = (temp * 1.8) + 32;
    document.getElementById("temperature").innerHTML = temp.toFixed(1) + "&deg" + f;
  }
}
