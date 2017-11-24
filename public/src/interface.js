$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemp(){
    $("#current_temp").html(thermostat.getCurrentTemperature()+"°C");
    $("#current_temp").addClass(thermostat.energyUsage());
  };

  function turnOnPS(){
    $("#power_save_status").html("Power save mode on");
    $("#power_save_status").css({"color": "green"});
    $("#on").css({"background-color": "grey", "color": "grey", "border-style": "inset"})
    $("#off").removeAttr("style");
    };

  function turnOffPS(){
    $("#power_save_status").html("Power save mode off");
    $("#power_save_status").css({"color": "red"});
    $("#off").css({"background-color": "grey", "color": "grey", "border-style": "inset"})
    $("#on").removeAttr("style");
    };

  function UpdateCity(){
    var city = "London"
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4429cded58ef850105b16e73c1288175", function(weather) {
      $("#weather1").html(weather.name + ": " + weather.main.temp + "°C");
      $("#weather2").html(weather.weather[0].description.charAt(0).toUpperCase()+weather.weather[0].description.slice(1));
      $("#icon").attr("src", "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png");
    })
  };

  updateTemp();

  turnOnPS();

  UpdateCity();


  $("#up").click(function() {
    $("#current_temp").removeClass(thermostat.energyUsage());
    thermostat.up();
    updateTemp();
  });

  $("#down").click(function() {
    $("#current_temp").removeClass(thermostat.energyUsage());
    thermostat.down();
    updateTemp();
  });

  $("#on").click(function() {
    thermostat.turnPowerSavingModeOn();
    turnOnPS();
  });

  $("#off").click(function() {
    thermostat.turnPowerSavingModeOff();
    turnOffPS();
  });

  $("#reset").click(function(){
    thermostat.reset();
    updateTemp();
  });

  $("#city").on("change", function(){
    var city = $("#city").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4429cded58ef850105b16e73c1288175", function(weather) {
      $("#weather1").html(weather.name + ": " + weather.main.temp + "°C");
      $("#weather2").html(weather.weather[0].description.charAt(0).toUpperCase()+weather.weather[0].description.slice(1));
      $("#icon").attr("src", "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png");
    })
  });
});
