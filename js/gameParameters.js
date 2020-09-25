"use strict";

var FIREBALL_LEFT_SPEED = 2;
var FIREBALL_SPEED = 5;
var PROPORTION_CALCULATION_HEIGHT = 1.337;
var PROPORTION_CALCULATION_FIELD_HEIGHT = 3;
var PROPORTION_CALCULATION_FIELD_WIDTH = 2;
var fireballSize = 22;
var wizardWidth = 70;
var wizardSpeed = 3;

var getFireballSpeed = function (isLeft) {
  return isLeft ? FIREBALL_LEFT_SPEED : FIREBALL_SPEED;
};

var getWizardHeight = function () {
  return wizardWidth * PROPORTION_CALCULATION_HEIGHT;
};

var getWizardX = function (fieldWidth) {
  return (fieldWidth - wizardWidth) / PROPORTION_CALCULATION_FIELD_WIDTH;
};

var getWizardY = function (fieldHeight) {
  return fieldHeight / PROPORTION_CALCULATION_FIELD_HEIGHT;
};
