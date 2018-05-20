class Head {
    constructor(w_, h_, x, y) {
        this.w = w_;
        this.h = h_;
        this.skinColors = ['#FFCBB6', '#7D432B', '#EB9B60', '#FDC3B5', '#581D15', '#F8BC86', '#823910'];

        this.skinColor = this.skinColors[(int)(random(this.skinColors.length))];
        this.eyes = new Eyes(this);
        this.nose = new Nose(this, this.eyes);
        this.mouth = new Mouth(this, this.nose);
        if (x && y) {
            this.pos = createVector(x, y);
        }
        else {
            this.pos = createVector(width / 2, height / 2);
        }

    }

    show() {
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(this.skinColor);
        ellipse(0, 0, this.w, this.h);
        this.eyes.show();
        this.nose.show();
        this.mouth.show();
    }

}