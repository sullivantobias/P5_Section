var spotWhite = {
    x: 300,
    y: 200
};

var spotColor = {
    x: 300,
    y: 200
};

var col = {
    r: 255,
    g: 0,
    b: 0
}; 

var value = 255;

function setup () {
    createCanvas (600, 400);
    background ("grey");
}

function draw () {
    stroke (255);
    line (300, 0, width / 2, height);
    noStroke();
    appears();

}

setInterval(function appears () {
    spotWhite.x = random (20, ( width / 2 ) - 20 );
    spotWhite.y = random (20 , height - 20);

    spotColor.x = random ((width / 2) + 20, width - 20 );
    spotColor.y = random (20 , height - 20);

    col.r = random (0, 255);
    col.g = random (0, 255);
    col.b = random (0, 255);


    if (spotWhite) {
       
        fill (value);
        ellipse (spotWhite.x, spotWhite.y, 24);
    } 

    if (spotColor) {
        fill (col.r, col.g, col.b);
        ellipse (spotColor.x, spotColor.y, 24);
    }
   
},700);


