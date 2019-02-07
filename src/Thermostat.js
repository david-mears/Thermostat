"use strict"

function Thermostat() {
  this.DEFAULT = 20;
  this.temp = this.DEFAULT;
  this.MIN_TEMP = 10;
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
  if (this.temp <= this.MIN_TEMP) {
    throw new Error('Temp too low')
  }
  this.temp -= 1
};

Thermostat.prototype.switchMode = function() {
  this.isInPowerSavingMode = !this.isInPowerSavingMode;
};

Thermostat.prototype.reset = function() {
  this.temp = this.DEFAULT;
}

Thermostat.prototype.energyUsage = function() {
  switch (true) {
    case this.temp < 18:
      return 'Low energy usage'
      break;
    case this.temp < 25:
      return 'Medium energy usage'
      break;
    default:
      return 'High energy usage'
  }
}
