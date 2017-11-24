$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemp(){
    $("#current_temp").html(thermostat.getCurrentTemperature()+"°C");
    $("#current_temp").addClass(thermostat.energyUsage());
  };

  function sendTempInfo(){
    $.post("/temperature", {temperature: thermostat.getCurrentTemperature()});
  }

  function sendPSInfo(){
    $.post("/powersave", {ps_mode: thermostat.isPowerSavingModeOn()});
  }

  function turnOnPS(){
    thermostat.turnPowerSavingModeOn();
    $("#power_save_status").html("Power save mode on");
    $("#power_save_status").css({"color": "green"});
    $("#on").css({"background-color": "grey", "color": "grey", "border-style": "inset"})
    $("#off").css({"background-color": "orange", "color": "white"});
    };

  function turnOffPS(){
    thermostat.turnPowerSavingModeOff();
    $("#power_save_status").html("Power save mode off");
    $("#power_save_status").css({"color": "red"});
    $("#off").css({"background-color": "grey", "color": "grey", "border-style": "inset"});
    $("#on").css({"background-color": "green", "color": "white"});
    };

  function updateCity(current_city){
    var city = current_city
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4429cded58ef850105b16e73c1288175", function(weather) {
      $("#weather1").html(weather.name + ": " + weather.main.temp + "°C");
      $("#weather2").html(weather.weather[0].description.charAt(0).toUpperCase()+weather.weather[0].description.slice(1));
      $("#icon").attr("src", "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png");
      $.post("/city", {city: city});
    })
  };

 $.get("/temperature", function(data){
    $("#current_temp").removeClass(thermostat.energyUsage());
    if(!data.temperature == "") {
      thermostat.temperature = parseInt(data.temperature);
    }
    updateTemp();
  });

  $.get("/city", function(data){
     if(!data.city == "") {
       updateCity(data.city);
     } else {
       updateCity("London");
     }
   });

   $.get("/powersave", function(data){
     if(data.power_save == "false") {
       turnOffPS();
     } else {
       turnOnPS();
     }
   });

  $("#up").click(function() {
    $("#current_temp").removeClass(thermostat.energyUsage());
    thermostat.up();
    updateTemp();
    sendTempInfo();
  });

  $("#down").click(function() {
    $("#current_temp").removeClass(thermostat.energyUsage());
    thermostat.down();
    updateTemp();
    sendTempInfo();
  });

  $("#on").click(function() {
    turnOnPS();
    sendPSInfo();
  });

  $("#off").click(function() {
    turnOffPS();
    sendPSInfo();
  });

  $("#reset").click(function(){
    thermostat.reset();
    updateTemp();
    sendTempInfo();
  });

  $("#city").on("change", function(){
    var city = $("#city").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4429cded58ef850105b16e73c1288175", function(weather) {
      $("#weather1").html(weather.name + ": " + weather.main.temp + "°C");
      $("#weather2").html(weather.weather[0].description.charAt(0).toUpperCase()+weather.weather[0].description.slice(1));
      $("#icon").attr("src", "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png");
      $.post("/city", {city: city});
    })
  });
});
