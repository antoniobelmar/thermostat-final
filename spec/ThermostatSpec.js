describe("Thermostat", function(){

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  describe("#temperature", function(){
    it("haves a temperature of 20 degrees", function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("#up", function(){
    it("increases the temperature by 1", function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe("#down", function(){
    it("decrease the temperature by 1", function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe("#isMinimumTemperature", function(){
    it("returns true if minimum temperature is reached", function(){
      for (var i = 0; i < 11; i++){
        thermostat.down()
      }
      expect(thermostat.isMinimumTemperature()).toEqual(true)
    })
    it("wont go below 10", function(){
      for (var i = 0; i<15; i++){
        thermostat.down();}
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe("#maximum", function(){
    it("wont go over 25", function(){
      for (var i = 0; i<6; i++){
        thermostat.up();}
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("#reset", function(){
    it("resets temperature to 20", function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("#energyUsage", function(){

    it("returns low usage when temperature is below 18", function(){
      for (var i = 0; i < 3; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it("returns medium usage when temperature is below 25", function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it("returns high usage when temperature is above 25", function(){
      for (var i = 0; i < 5; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

  describe("#isPowerSavingModeOn", function(){
    it("returns true when powersaving mode is on", function(){
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    });
  });

  describe("#turnPowerSavingModeOff", function(){
    it("changes power saving mode to be false", function(){
      thermostat.turnPowerSavingModeOff()
      expect(thermostat.isPowerSavingModeOn()).toEqual(false)
    });
  });
  
  describe("#turnPowerSavingModeOn", function(){
    it("changes power saving mode to be false", function(){
      thermostat.turnPowerSavingModeOff()
      thermostat.turnPowerSavingModeOn()
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    });
  });

  describe("#isMaximumTemperature", function(){
    it("returns true if power save on and at 25", function(){
      for (var i = 0; i < 5; i++){
        thermostat.up();
      }
      expect(thermostat.isMaximumTemperature()).toEqual(true)
    });

    it("returns false if power save on and at below 25", function(){
      expect(thermostat.isMaximumTemperature()).toEqual(false)
    });

    it("returns true if power save on and at 32", function(){
      thermostat.turnPowerSavingModeOff()
      for (var i = 0; i < 12; i++){
        thermostat.up();
      }
      expect(thermostat.isMaximumTemperature()).toEqual(true)
    });

    it("returns false if power save on and at below 32", function(){
      thermostat.turnPowerSavingModeOff()
      expect(thermostat.isMaximumTemperature()).toEqual(false)
    });
  });

});
