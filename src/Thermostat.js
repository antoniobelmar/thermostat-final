function Thermostat(){
  this.temperature = 20
}

Thermostat.prototype.up = function(){
  this.temperature += 1
}

Thermostat.prototype.down = function(){
  if (this.temperature > 10) {
    this.temperature -= 1
  }
}
