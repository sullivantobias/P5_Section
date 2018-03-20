let ar = [];

function setup() {
  createCanvas(500, 500);
  /** If we want to create a cloudy weather

  for (var i = 0; i < 2400; i++) {
    let r = random(10, 40);
    let b = new Bubble(random(width), random(height), r);
    ar.push(b);

} ** /
/** Test Bubble on react to the click and hover state **/
  for (var i = 0; i < 10; i++) {
    let r = random(10, 40);
    let b = new Bubble(random(width), random(height), r);
    ar.push(b);
  }
}
/*
function mouseDragged() {
  /* If we want to made bubbles each time we drag */
/*
  let r = random(10, 40);
  let b = new Bubble(mouseX, mouseY, r);
  ar.push(b);

}
*/
function mousePressed() {
  /*for (let i = 0; i < ar.length; i++) {
    if (ar[i].isClicked(mouseX, mouseY)) {
      ar.splice(i, 1);
    }
  }*/
}

function draw() {
  background(0);
  for (let i = ar.length - 1; i >= 0; i--) {
    ar[i].displayed();
    ar[i].moved();

    if (ar[i].blow()) {
      ar.splice(i, 1);
    }
    /*if (ar[i].isHovered(mouseX, mouseY)) {
      ar[i].strokeChange("red");
    } else {
      ar[i].strokeChange(255);
    }*/

    // Interactions betwwens bubbles //

    /*if (ar[1].isTouching(ar[3])) {
      ar.splice(i, 1);
    }*/

  }
}
class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.strokeColor = 255;
  }
  strokeChange(color) {
    this.strokeColor = color;
  }

  isHovered(x, y) {
    var d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  isClicked(x, y) {
    var d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  isTouching(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.r / 2 + other.r / 2;
  }
  displayed() {

    /** if we want color **/

    /*let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      stroke(r, g, b);
      strokeWeight(3); */

    stroke(this.strokeColor);
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
      return true;
    } else {
      return false;
    }
  }
}