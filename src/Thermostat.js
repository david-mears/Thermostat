"use strict"

function Thermostat() {
  this.temp = 20;
  this._minTemp = 10;
  this.isInPowerSavingMode = true
};

Thermostat.prototype.up = function() {
  this.temp += 1
}

Thermostat.prototype.down = function() {
  if (this.temp <= this._minTemp) {
    throw new Error('Temp too low')
  }
  this.temp -= 1
}
