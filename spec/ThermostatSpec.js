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
});
