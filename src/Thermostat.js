function Thermostat(){
  this.temperature = 20
  this.MAX_PSON = 25
  this.MAX_PSOFF = 32
  this.MINIMUM = 10
  this.powerSavingMode = true
}

// TEMPERATURE GETTER

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
}

// RETURN BOOLEAN

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode
}

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn()) {
    return this.temperature === this.MAX_PSON
  }
  return this.temperature === this.MAX_PSOFF
}

// CHANGE TEMPERATURE

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1
}

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1
}

Thermostat.prototype.reset = function(){
  this.temperature = 20
}

// POWER SAVING SWITCHES

Thermostat.prototype.turnPowerSavingModeOff = function(){
  this.powerSavingMode = false
}

Thermostat.prototype.turnPowerSavingModeOn = function(){
  this.powerSavingMode = true
}

// ENERGY USAGE

Thermostat.prototype.energyUsage = function(){
  if (this.getCurrentTemperature() < 18) {
    return 'low-usage'
  } else if (this.getCurrentTemperature() < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}

$(document).ready(function() {
  thermostat = new Thermostat();

  function updateTemp(){
    $("#current_temp").html(thermostat.getCurrentTemperature()+"°C");
  };

  function turnOnPS(){
    $("#power_save_status").html("Power save mode on");
    $("#power_save_status").css({"color": "green"});
    };

  function turnOffPS(){
    $("#power_save_status").html("Power save mode off");
    $("#power_save_status").css({"color": "red"});
    };

  updateTemp();

  turnOnPS();

  $("#up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#down").click(function() {
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
});
