function Thermostat(){
  this.temperature = 20
  this.MAX_PSON = 25
  this.MAX_PSOFF = 32
  this.MINIMUM = 10
  this.powerSavingMode = true
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
}

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

Thermostat.prototype.turnPowerSavingModeOff = function(){
  this.powerSavingMode = false
}

Thermostat.prototype.turnPowerSavingModeOn = function(){
  this.powerSavingMode = true
}

Thermostat.prototype.reset = function(){
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function(){
  if (this.getCurrentTemperature() < 18) {
    return 'low-usage'
  } else if (this.getCurrentTemperature() < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}
