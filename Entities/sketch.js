var spotWhite = {
    x: 300,
    y: 200,
    diam: 0,
    entities: 1
};

var spotColor = {
    x: 300,
    y: 200,
    diam: 0,
    entities: 1
};

var col = {
    r: 255,
    g: 0,
    b: 0
};

function setup() {
    var canvas = createCanvas(600, 600);
    background(123);
    stroke(255);
    line(300, 0, width / 2, height);

}

setInterval(function draw() {

    background(123);
    
    var value = spotColor.entities + spotWhite.entities;
    var ctx = canvas.getContext('2d');
    
    stroke(255);
    line(300, 0, width / 2, height);
    ctx.fillText("White", 10, 20);
    ctx.fillText("Colored", width - 50, 20);
    ctx.fillText("Sum of entities : " + value, 50, height - 20);

    spotWhite.x = random(20, (width / 2) - 20);
    spotWhite.y = random(20, height - 100);

    spotWhite.diam = random(20, 60);
    spotColor.diam = random(20, 60);

    spotColor.x = random((width / 2) + 20, width - 20);
    spotColor.y = random(20, height - 100);

    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);

    if (spotWhite) {
        fill(255);
        ellipse(spotWhite.x, spotWhite.y, spotWhite.diam);
        fill(0);
        ctx.fillText(spotWhite.entities, spotWhite.x - 3.5, spotWhite.y + 2.5);
        spotWhite.entities++;
    }

    if (spotColor) {
        fill(col.r, col.g, col.b);
        ellipse(spotColor.x, spotColor.y, spotColor.diam);
        fill(255);
        ctx.fillText(spotColor.entities, spotColor.x - 3.5, spotColor.y + 2.5);
        spotColor.entities++;
    }
    if (value == 20) {
        reset();
    }



}, 1000);

function reset() {
    value = 0;
    spotWhite.entities = 1;
    spotColor.entities = 1;
}