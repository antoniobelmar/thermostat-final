$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemp(){
    $("#current_temp").html(thermostat.getCurrentTemperature()+"°C");
    $("#current_temp").addClass(thermostat.energyUsage());
  };

  function turnOnPS(){
    $("#power_save_status").html("Power save mode on");
    $("#power_save_status").css({"color": "green"});
    $("#on").css({"background-color": "grey", "color": "grey"})
    $("#off").removeAttr("style");
    };

  function turnOffPS(){
    $("#power_save_status").html("Power save mode off");
    $("#power_save_status").css({"color": "red"});
    $("#off").css({"background-color": "grey", "color": "grey"})
    $("#on").removeAttr("style");
    };

  updateTemp();

  turnOnPS();



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

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=4429cded58ef850105b16e73c1288175", function(weather) {
    $("#weather").html(weather.name + ": " + weather.main.temp + "°C");
  })

});
