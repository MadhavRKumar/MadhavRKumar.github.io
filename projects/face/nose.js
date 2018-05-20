class Nose{

    constructor(h, e){
        this.head = h;
        this.eyes = e;
        colorMode(HSB,255);
        this.noseColor = h.skinColor;
        this.noseColor = color(hue(this.noseColor), saturation(this.noseColor), brightness(this.noseColor)*0.7);
        this.noseHeight = -random(this.head.h/8, this.eyes.pos.x - this.eyes.eyeSize/2);
        this.points = new Array(5);

        this.points[0] = createVector(-100, this.noseHeight);

        this.points[0] = createVector(-100, this.noseHeight);

        var mult = random(1) > 0.5 ? -1 : 1;
        var angle = random(PI/4, 3*PI/4);
        this.points[1] = createVector(this.noseHeight*cos(angle)*mult, this.noseHeight*sin(angle));
    
        var angle1 = random(PI, 3*PI/2);
    
        this.points[2] = createVector(this.noseHeight*cos(angle1)*mult, this.noseHeight*sin(angle1));
    
        var angle2 = random(3*PI/2, 2*PI);
        this.points[3] =  createVector(this.noseHeight*cos(angle2)*mult, this.noseHeight*sin(angle2));
    
        this.points[4] = createVector(this.points[3].x, this.points[3].y); 

    }

    show(){
        noFill();
        beginShape();
        strokeWeight(4);
        stroke(this.noseColor);
        for (let p of this.points) {
          curveVertex(p.x, p.y);
        }
        endShape();
    }



}