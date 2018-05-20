class Eyes {
    constructor(h) {
        this.head = h;
        var div = random(2, 4);
        var a = this.head.w / sqrt(2);
        var x = a / div;
        var y = -1 * x * random(1);
        this.pos = createVector(x, y);

        this.eyeSize = random(this.pos.x / 4, this.pos.x / 1.5);


        this.pupilSize = this.eyeSize / (random(1.5, 6));
        
        var angle = random(2 * PI);
        var r = ((this.eyeSize - this.pupilSize) / 2) * sqrt(random(1));

        var x = this.pos.x + r * cos(angle);
        var y = this.pos.y + r * sin(angle);

        this.leftPupilPos = createVector(x, y);


        var x1 = 2 * this.pos.x - this.leftPupilPos.x;
        this.rightPupilPos = createVector(x1, y);

    }


    show() {
        fill('#fefefe');
        ellipse(-this.pos.x, this.pos.y, this.eyeSize, this.eyeSize);
        ellipse(this.pos.x, this.pos.y, this.eyeSize, this.eyeSize);

        noStroke();
        fill('#363636');

        ellipse(-this.leftPupilPos.x, this.leftPupilPos.y, this.pupilSize, this.pupilSize);

        ellipse(this.rightPupilPos.x, this.rightPupilPos.y, this.pupilSize, this.pupilSize);
    }


}