let ball, ball2, ball3;
let ar;

function setup() {
  createCanvas(500, 500);

  ar = [ball = new Bubble(200, 200, 30), ball2 = new Bubble(300, 200, 50),
    ball3 = new Bubble(130, 300, 60)
  ]
}

function draw() {
  background(0);
  for (let i = 0; i < ar.length; i++) {
    ar[i].displayed();
    ar[i].moved();
    ar[i].blow();
  }
}

class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.r = radius;
  }

  displayed() {
    ellipse(this.x, this.y, this.r);
  }

  moved() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  blow() {
    if (this.x < this.r / 2 || this.x > width - (this.r / 2) ||
      this.y < this.r / 2 || this.y > height - (this.r / 2)) {
      this.r = 0;
    }
  }
}