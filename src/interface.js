$(document).ready(function() {
  var thermo = new Thermostat

  $("button").click(function(event) {
    $("button").addClass("test");
  });
  $("#switch").click(function() {
    thermo.switchMode()
    if (thermo.isInPowerSavingMode) {
      $('#psm').show();
    } else {
      $('#psm').hide();
    }
  });

  function updateTemperatureDisplay() {
    $('#temperature').text('THE TEMP BE ' + thermo.temp);
    $('#temperature').attr('class', thermo.energyUsage());
  }
  updateTemperatureDisplay()

  $('#up').click(function() {
    thermo.up();
    updateTemperatureDisplay();
  });
  $('#down').click(function() {
    thermo.down();
    updateTemperatureDisplay();
  });
  $('#reset').click(function() {
    thermo.reset();
    updateTemperatureDisplay();
  });
});
