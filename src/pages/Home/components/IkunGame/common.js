// 大约16ms 两帧间隔时间
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback, element) {
      return window.setTimeout(callback, 1000 / 60);
    };
})();

// 指定范围的随机整数
export function randomNumBoth(min, max) {
  var range = max - min;
  var rand = Math.random();
  var num = min + Math.round(rand * range); //四舍五入
  return num;
}

// 取绝对值
export function absolute(x) {
  return x >= 0 ? x : -x;
}

// 获取两点之间的距离
export function getS(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}

// 判断是否为偶数
export function isOdd(num) {
  if ((num % 2) == 1) {
    return false;
  }
  return true;
}

export const gameImage = new Image();
gameImage.src = require('@/assets/game.png');

export const logo = new Image();
logo.src = require('@/assets/logo.png');

export const over = new Image();
over.src = require('@/assets/over.png');

export const kaishi = new Image();
kaishi.src = require('@/assets/start.png');

export function canvasInit(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.drawImage(logo,
    0, 0, 442, 94,
    180, 40, 442, 94
  );

  ctx.drawImage(kaishi,
    0, 0, 442, 94,
    220, 130, 442, 94
  );
  ctx.save();
  ctx.font = "20px Verdana";
  ctx.fillText("X: 攻击   C: 跳跃   左箭头: 后退   右箭头: 前进", 190, 210);
  ctx.restore();

  return ctx;
}