var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});
canvas.addEventListener("click", function () {
  init();
});
//variables
var gravity = 0.6;
var friction = 0.9;
colorArray = ["#C5C3E6", "#67F0E7", "#8BD968", "#F0D167", "#E68263"];

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//object
function Ball(x, y, radius, color, dx) {
  this.x = x;
  this.dx = dx;
  this.dy = gravity;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
  };
  this.update = function () {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
      this.dx = this.dx * friction;
    } else {
      this.dy += gravity;
      console.log(this.dy);
    }

    if (
      this.x + this.radius + this.dx > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx * friction;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var ball;
var ballArray = [];
//implementation
function init() {
  ballArray = [];
  for (var i = 0; i < 200; i++) {
    var radius = randomIntFromRange(10, 20);
    var y = randomIntFromRange(radius, innerHeight - radius * 5);
    var x = randomIntFromRange(radius, innerWidth - radius);
    var dx = randomIntFromRange(-2, 2);
    ballArray.push(
      new Ball(
        x,
        y,
        radius,
        colorArray[Math.floor(Math.random() * colorArray.length)],
        dx
      )
    );
  }
  console.log(ball);
}

//animation loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
}

init();
animate();
