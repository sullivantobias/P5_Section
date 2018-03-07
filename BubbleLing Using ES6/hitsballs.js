let ar = [];

function setup() {
  createCanvas(500, 500);
  /** If we want to create a cloudy weather

  for (var i = 0; i < 2400; i++) {
    let r = random(10, 40);
    let b = new Bubble(random(width), random(height), r);
    ar.push(b);

}**/
}

function mouseDragged() {
  /** If we want to made bubbles each time we drag**/
  let r = random(10, 40);
  let b = new Bubble(mouseX, mouseY, r);
  ar.push(b);
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

    /** if we want color **/

    /*let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      stroke(r, g, b);
      strokeWeight(3); */
    noStroke();
    fill(255, 50);
    ellipse(this.x, this.y, this.r);
  }

  moved() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }
  blow() {
    if (this.x < this.r / 2 || this.x > width - (this.r / 2) ||
      this.y < this.r / 2 || this.y > height - (this.r / 2)) {
      this.r = 0;
    }
  }
}