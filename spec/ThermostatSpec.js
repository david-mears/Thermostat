describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermo = new Thermostat
  });

  it('has a default temperature of 20', function() {
    expect(thermo.temp).toEqual(20)
  });

});
