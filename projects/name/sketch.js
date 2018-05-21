var vowels = 'aeiou';
var consonants = 'bcdfghjklmnpqrstvwxyz';
var name = "";
var showLine = true;
var statement = "";

const fontSize = 32;
const question = "What is your name?";
function preload() {

}

function setup() {
    createCanvas(900, 600);
    background("#333333")
    fill("#efefef");
    textSize(fontSize);
    textAlign(CENTER);
    strokeWeight(4);
    statement = question;
}


function draw() {
    background("#333333")
    noStroke();
    text(statement, width / 2, height * 0.1);
    text(name, width / 2, height * 0.25);

    if (frameCount % 50 == 0) {
        showLine = !showLine;
    }

    if (showLine) {
        stroke("#efefef");

        line((width + textWidth(name)) / 2, height * 0.25 - fontSize, (width + textWidth(name)) / 2, height * 0.25 + fontSize / 2);
    }

}

function keyPressed() {
    if (keyCode == BACKSPACE) {
        name = name.slice(0, -1);
    }
    else if (keyCode == ENTER){
        statement = messUpName(name) + "?";
        name = "";
    }
}

function keyTyped() {
    if (keyCode != BACKSPACE && keyCode != 0 && keyCode != ENTER) {

        name += key;
    }
}


function messUpName(n) {
    var numLetters = floor(random(1, 3));
    var arr = n.split('');
    do {

        for (var i = 0; i < numLetters; i++) {
            var index = floor(random(n.length));
            var toAdd;
            if (vowels.includes(n.charAt(index).toLowerCase())) {
                toAdd = vowels.charAt(floor(random(vowels.length)));
            }
            else if (consonants.includes(n.charAt(index).toLowerCase())) {
                toAdd = consonants.charAt(floor(random(consonants.length)));
            }
            else {
                i--;
            }

            if (toAdd) {
                if (index == 0) {
                    toAdd = toAdd.toUpperCase();
                }

                arr[index] = toAdd;
            }
        }
    }
    while (join(arr,"") == n);

    return join(arr, "");


}