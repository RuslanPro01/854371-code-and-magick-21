"use strict";

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};
var Bar = {
  HEIGHT: 150,
  WIDTH: 50,
  GAP: 50
};
var CONTENT_GAP = 10;
var TEXT_SIZE = 16;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
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
  var randomInteger = function (min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  renderCloud(
    ctx,
    Cloud.X + CONTENT_GAP,
    Cloud.Y + CONTENT_GAP,
    'rgba(0, 0, 0, 0.7)'
  );

  renderCloud(
    ctx,
    Cloud.X,
    Cloud.Y,
    '#fff'
  );

  renderText(
    ctx,
    '#000',
    'Ура вы победили!',
    Cloud.X + CONTENT_GAP,
    Cloud.Y + 35
  );

  renderText(
    ctx,
    '#000',
    'Список результатов:',
    Cloud.X + CONTENT_GAP,
    Cloud.Y + 35 + TEXT_SIZE
  );

  for (var i = 0; i < players.length; i++) {

    var barHeight = (Bar.HEIGHT * times[i] / maxTime) * -1;
    var positionTotalTimeX = Cloud.X + 35 + (50 + Bar.GAP) * i;
    var positionTotalTimeY = Cloud.HEIGHT - CONTENT_GAP - TEXT_SIZE + barHeight - TEXT_SIZE;
    var positionPlayersRenderTextX = Cloud.X + 35 + (50 + Bar.GAP) * i;
    var positionPlayersRenderTextY = Cloud.HEIGHT - CONTENT_GAP;
    var positionRenderBarX = Cloud.X + 35 + (50 + Bar.GAP) * i;
    var positionRenderBarY = Cloud.HEIGHT - CONTENT_GAP - TEXT_SIZE;

    renderText(
      ctx,
      '#000',
      players[i],
      positionPlayersRenderTextX,
      positionPlayersRenderTextY
    );

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
    } else {
      ctx.fillStyle = 'hsl(' + randomInteger(25, 99) + ', ' + '100%' + ', ' + '50%' + ')';
    }
    
    ctx.fillRect(
      positionRenderBarX,
      positionRenderBarY,
      Bar.WIDTH,
      barHeight
    );

    renderText(
      ctx,
      '#000',
      Math.floor(times[i]),
      positionTotalTimeX,
      positionTotalTimeY
    );
  }
};
