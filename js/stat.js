"use strict";
var FIREBALL_LEFT_SPEED = 2;
var FIREBALL_SPEED = 5;
var PROPORTION_CALCULATION_HEIGHT = 1.337;
var PROPORTION_CALCULATION_FIELD_HEIGHT = 3;
var PROPORTION_CALCULATION_FIELD_WIDTH = 3
var fireballSize = 22;
var wizardWidth = 70;
var wizardSpeed = 3;

var getFireballSpeed = function (isLeft) {
  return isLeft ? FIREBALL_LEFT_SPEED : FIREBALL_SPEED;
}

var getWizardHeight = function () {
  return wizardWidth * PROPORTION_CALCULATION_HEIGHT;
}

var getWizardX = function (fieldWidth) {
  return (fieldWidth - wizardWidth) / PROPORTION_CALCULATION_FIELD_WIDTH;
}

var getWizardY = function (fieldHeight) {
  return fieldHeight / PROPORTION_CALCULATION_FIELD_HEIGHT;
}

// ДЗ Canvas
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 50;
var rgbaNumberOne = (Math.random().toString(8)).substring(2, 5);
var rgbaNumberTwo = (Math.random().toString(8)).substring(2, 5);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, color, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );
  renderText(
    ctx,
    '#000',
    'Ура вы победили!',
    CLOUD_X + GAP,
    CLOUD_Y + 35
  );
  renderText(
    ctx,
    '#000',
    'Список результатов:',
    CLOUD_X + GAP,
    CLOUD_Y + 35 + FONT_GAP
  )
  for (var i = 0; i < players.length; i++) {
    renderText(
      ctx,
      '#000',
      players[i],
      CLOUD_X + 35 + (50 + TEXT_WIDTH) * i,
      CLOUD_HEIGHT - GAP
    );


    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba' + '(' + 255 + ', ' + rgbaNumberOne + ', ' + rgbaNumberTwo + ', ' + 1 + ')';
    }
    ctx.fillRect(
      CLOUD_X + 35 + (50 + TEXT_WIDTH) * i,
      CLOUD_HEIGHT - GAP - FONT_GAP,
      BAR_WIDTH,
      (CLOUD_HEIGHT - (BAR_HEIGHT * times[i])) / maxTime
    );
    renderText(
      ctx,
      '#000',
      Math.floor(times[i]),
      CLOUD_X + 35 + (50 + TEXT_WIDTH) * i,
      CLOUD_HEIGHT - 190
    );
  }
}
