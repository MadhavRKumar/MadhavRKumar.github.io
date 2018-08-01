var vowels = 'aeiou';
var consonants = 'bcdfghjklmnpqrstvwxyz';
var name = "";
var wrongName = "";
var showLine = true;
var nameEntered = false;
var isDone = false;
var statement = "";
var guessCount = 0;

const fontSize = 48;
const typeSize = 32;
const maxGuess = 11;
const question = "What is your name?";
const stopTrying = "Your name is too hard.\nI'll just call you\n";
const giveUp = "Well it's nice to meet you,\n";

var yesX;
var noX;
var buttonY;
var buttonWidth = 200;
var buttonHeight = typeSize * 2;


function setup() {
    createCanvas(600, 400);
    background("#333333")
    fill("#efefef");
    textAlign(CENTER);
    strokeWeight(4);
    statement = question;

    yesX = width / 4;
    noX = 3 * width / 4;
    buttonY = height * 0.6;
}


function draw() {
    background("#333333")
    noStroke();
    if (!isDone) {
        fill("#efefef");
        textSize(fontSize);
        text(statement, width / 2, height * 0.25);

        textSize(typeSize);
        if (!nameEntered) {
            text(name, width / 2, height * 0.5);
        }

        if (frameCount % 45 == 0) {
            showLine = !showLine;
        }

        if (showLine && !nameEntered) {
            stroke("#efefef");
            line((width + textWidth(name)) / 2, height * 0.5 - typeSize, (width + textWidth(name)) / 2, height * 0.5 + typeSize / 2);
        }

        if (nameEntered) {
            displayButtons();
        }
    }
    else {
        fill("#efefef");
        if (guessCount < maxGuess) {
            text(giveUp + wrongName + "!", width / 2, height / 2);
        }
        else {
            text(stopTrying + name[0] + "!", width / 2, height / 2 - typeSize*2);
        }
    }
}

function mousePressed() {
    if (isMouseInBox(yesX, buttonY, buttonWidth, buttonHeight) && nameEntered) {
        isDone = true;
    }
    else if (isMouseInBox(noX, buttonY, buttonWidth, buttonHeight) && nameEntered) {
        if (guessCount > maxGuess) {
            isDone = true;
        }
        else {
            guess();
        }

    }
}

function keyPressed() {
    if (keyCode == BACKSPACE) {
        name = name.slice(0, -1);
    }
    else if (keyCode == ENTER) {
        guess();
        nameEntered = true;
    }
}

function keyTyped() {
    if (keyCode != BACKSPACE && keyCode != 0 && keyCode != ENTER && !nameEntered) {

        name += key;
    }
}

function guess() {
    wrongName = messUpName(name);
    statement = wrongName + "?";
    guessCount++;
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
                if (arr[index].match(/[A-Z]/)) {
                    toAdd = toAdd.toUpperCase();
                }

                arr[index] = toAdd;
            }
        }
    }
    while (join(arr, "") == n);

    return join(arr, "");
}


function displayButtons() {
    rectMode(CENTER);


    if (isMouseInBox(yesX, buttonY, buttonWidth, buttonHeight)) {
        fill("#999999");
    }
    else {
        fill("#efefef");
    }
    rect(yesX, buttonY, buttonWidth, buttonHeight, 100);

    if (isMouseInBox(noX, buttonY, buttonWidth, buttonHeight)) {
        fill("#999999");
    }
    else {
        fill("#efefef");
    }
    rect(noX, buttonY, buttonWidth, buttonHeight, 100);

    fill("#333333");
    text("YES", yesX, (buttonY + typeSize * 0.4));

    text("NO", noX, (buttonY + typeSize * 0.4));

}

function isMouseInBox(x, y, w, h) {
    return ((mouseX < x + w / 2) && (mouseX > x - w / 2) && (mouseY < y + h / 2) && (mouseY > y - h / 2))
}