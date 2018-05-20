class Mouth {
    constructor(h, n) {
        this.head = h;
        this.nose = n;
        this.open = random(1) > 0.5;

        this.points = new Array(5);


        var div = random(2, 8);
        var a = this.head.w / sqrt(2);


        var xRange = a / div;
        var y = random(-this.nose.noseHeight, this.head.h / 3);
        this.points[0] = createVector(xRange, y);
        var i = 1;
        for (var x = xRange; x >= -xRange; x -= xRange) {

            this.points[i] = createVector(x, y);
            i++;
            y = random(-this.nose.noseHeight * 1.1, this.head.h / 3);
        }

        this.points[4] = createVector(this.points[3].x+10, this.points[3].y-5);
    }


show() {
    if (this.open) {
        noFill();
    } else {
        fill(this.nose.noseColor);
    }
    strokeWeight(5);
    stroke(this.nose.noseColor);
    // strokeJoin(ROUND);
    beginShape();
    for (let p of this.points) {
        curveVertex(p.x, p.y);
    }
    if (this.open) {
        endShape();
    } else {
        endShape(CLOSE);
    }
}


}