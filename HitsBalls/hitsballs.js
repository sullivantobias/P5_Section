var  c = {
    x:  0,
    y: 200,
    diam: 40,
    velo: 2
};

var  c2 = {
    x:  400,
    y: 200,
    diam: 40,
    velo: 2
};

var hits = {
    value: 0
};

function setup () {
   var canvas =  createCanvas(400, 400); 
  
}

function draw () {
    background (200);
    ellipse (c.x, c.y, c.diam);
    fill (0);

    ellipse (c2.x, c2.y, c2.diam);
    fill (230);
    
    //---------------//

    contact (c, c2);
}


function contact (first, second ) {
    
    var ctx = canvas.getContext('2d');

    ctx.strokeText ("White  : "+first.x+ " / Black : "+second.x, 20 , 20);
    ctx.strokeText (hits.value, first.x - 3 , first.y +3);
    ctx.fillStyle = 255;
    ctx.fillText (hits.value, second.x - 3 , second.y +3);

    first.x += first.velo;
    second.x -= second.velo;

    if ((first.x + 20) == (second.x - 20)) {
        first.velo = first.velo =-2;
        second.velo = second.velo =-2;
        hits.value++;
    }

    if ((first.x == 20)) {
        first.velo = first.velo =+2;
    }

    if ((second.x == width - 20)) {
        second.velo = second.velo =+2;
    }
}


