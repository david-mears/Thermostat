describe('Thermostat', function() {

  var thermo;

  beforeEach(function() {
    thermo = new Thermostat
  });

  it('has a default temperature of 20', function() {
    expect(thermo.temp).toEqual(20)
  });

  describe ('#up', function() {
    it('increases temp by 1', function() {
      temp1 = thermo.temp;
      thermo.up();
      temp2 = thermo.temp;
      expect(temp2 - temp1).toEqual(1)
    });

    it('temp cannot go higher than 25 when power saving mode is on', function() {
      var i;
      for ( i = thermo.temp; i < thermo._MAX_TEMP_LOW; i++){
        thermo.up();
      }
      expect( thermo.isInPowerSavingMode).toBeTruthy();
      expect( function() {thermo.up();}).toThrow(new Error("Maximum temp reached"));
    });

    it('temp cannot go higher than 32 when power saving mode is off', function() {
      thermo.switchMode();
      var i;
      for ( i = thermo.temp; i < thermo._MAX_TEMP_HIGH; i++){
        thermo.up();
      };
      expect( thermo.isInPowerSavingMode).toBeFalsy();
      expect( function() {thermo.up();}).toThrow(new Error("Maximum temp reached"));
    })
  });

  describe ('#down', function() {
    it('decreases temp by 1', function() {
      temp1 = thermo.temp;
      thermo.down();
      temp2 = thermo.temp;
      expect(temp2 - temp1).toEqual(-1)
    });
    it('temp cannot go lower than 10', function() {
      thermo.temp = thermo._minTemp;
      expect(function() {thermo.down();}).toThrow(new Error("Temp too low"));
    });
  });

  describe ('#switchMode', function() {
    it('is in power-saving mode by default', function() {
      expect(thermo.isInPowerSavingMode).toBeTruthy()
    });

    it('changes the mode', function() {
      thermo.isInPowerSavingMode = true
      thermo.switchMode()
      expect(thermo.isInPowerSavingMode).toBeFalsy()
    });
  });
});
