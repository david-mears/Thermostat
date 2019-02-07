"use strict"

function Thermostat() {
  this._default = 20;
  this.temp = this._default;
  this._minTemp = 10;
  this.isInPowerSavingMode = true;
  this._MAX_TEMP_LOW = 25;
  this._MAX_TEMP_HIGH = 32;
};

Thermostat.prototype.up = function() {
  if (this.temp >= this._maxTemp()) {
    throw new Error('Maximum temp reached')
  }
  this.temp += 1
};

Thermostat.prototype._maxTemp = function() {
  if (this.isInPowerSavingMode) {
    return this._MAX_TEMP_LOW;
  } else {
    return this._MAX_TEMP_HIGH;
  };
};

Thermostat.prototype.down = function() {
  if (this.temp <= this._minTemp) {
    throw new Error('Temp too low')
  }
  this.temp -= 1
};

Thermostat.prototype.switchMode = function() {
  this.isInPowerSavingMode = !this.isInPowerSavingMode;
};

Thermostat.prototype.reset = function() {
  this.temp = this._default;
}
