"use strict"

function Thermostat() {
  this.temp = 20;
  this._minTemp = 10;
  this.isInPowerSavingMode = true;
  this._MAX_TEMP_LOW = 25;
};

Thermostat.prototype.up = function() {
  if (this.temp >= this._MAX_TEMP_LOW) {
    throw new Error('Maximum temp reached')
  }
  this.temp += 1
}

Thermostat.prototype.down = function() {
  if (this.temp <= this._minTemp) {
    throw new Error('Temp too low')
  }
  this.temp -= 1
}
