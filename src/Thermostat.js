DEFAULT_TEMP = 20;
DEFAULT_MIN = 10;
PSON_MAX = 25;
PSOFF_MAX = 32;

function Thermostat(){
  this.temperature = DEFAULT_TEMP
  this.maximum = PSON_MAX
}

Thermostat.prototype.up = function(){
  if (this.temperature < this.maximum) {
    this.temperature += 1
  }

}

Thermostat.prototype.down = function(){
  if (this.temperature > DEFAULT_MIN) {
    this.temperature -= 1
  }
}

Thermostat.prototype.powerSaveOff = function(){
  this.maximum = PSOFF_MAX
}

Thermostat.prototype.powerSaveOn = function(){
  this.maximum = PSON_MAX
}
