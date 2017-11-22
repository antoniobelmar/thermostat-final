describe("Thermostat", function(){

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  describe("#temperature", function(){
    it("haves a temperature of 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("#up", function(){
    it("increases the temperature by 1", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("#down", function(){
    it("decrease the temperature by 1", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe("#minimum", function(){
    it("wont go below 10", function(){

      for (var i = 0; i<11; i++){
        thermostat.down();}
        expect(thermostat.temperature).toEqual(10);
    });
  });

  describe("#maximum", function(){
    it("wont go over 25", function(){
      for (var i = 0; i<6; i++){
        thermostat.up();}
        expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("#powersave on", function(){
    it("won't got over 25 with powersave on", function(){
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      for (var i = 0; i<6; i++){
        thermostat.up();}
        expect(thermostat.temperature).toEqual(25)
    });
  });

  describe("#powersave off", function(){
    it("won't got over 25 with powersave on", function(){
      thermostat.powerSaveOff();
      for (var i = 0; i<13; i++){
        thermostat.up();}
        expect(thermostat.temperature).toEqual(32)
    });
  });
});
