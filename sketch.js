let initials = 'env'; // initials for file naming
let choice = '1'; // starting choice, so it is not empty
let screenbg = 250; // off white background
let lastscreenshot = 61; // last screenshot never taken

function setup() {
    createCanvas(600, 400); // canvas size
    background(102, 224, 255); // sky blue background
}

function draw() {
    if (keyIsPressed) {
        choice = key; // set choice to the key that was pressed
        clear_print(); // check to see if it is clear screen or save image
    }
    if (mouseIsPressed) {
        newkeyChoice(choice); // if the mouse is pressed call newkeyChoice
    }
}

function newkeyChoice(toolChoice) {
    if (toolChoice == '1') { // Tree Bark
        stroke(101, 67, 33); // brown
        strokeWeight(8);
        line(mouseX, mouseY, pmouseX, pmouseY);

    } else if (toolChoice == '2') { // Green Leaves
        fill(34, 139, 34); // forest green
        noStroke();
        ellipse(mouseX, mouseY, 15, 10);

    } else if (toolChoice == '3') { // Water Droplets
        fill(173, 216, 230, 150); // light blue with transparency
        noStroke();
        ellipse(mouseX, mouseY, 10, 20);

    } else if (toolChoice == '4') { // Trash Pile (Pollution)
        fill(169, 169, 169);
        noStroke();
        rect(mouseX - 10, mouseY - 10, 20, 20);

    } else if (toolChoice == '5') { // Animal Paw Print
        fill(139, 69, 19); // brown
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
        ellipse(mouseX - 8, mouseY - 8, 5, 5);
        ellipse(mouseX + 8, mouseY - 8, 5, 5);

    } else if (toolChoice == '6') { // Smoky Clouds (Air Pollution)
        fill(105, 105, 105, 100); // gray with transparency
        noStroke();
        ellipse(mouseX, mouseY, 30, 20);

    } else if (toolChoice == '7') { // Flower Petals
        fill(255, 182, 193); // pink
        noStroke();
        ellipse(mouseX, mouseY, 10, 15);

    } else if (toolChoice == '8') { // Coral Shapes (Ocean Life)
        fill(255, 127, 80); // coral color
        noStroke();
        rect(mouseX, mouseY, 10, 10);

    } else if (toolChoice == '9') { // Mountain Peaks
        fill(112, 128, 144); // slate gray
        noStroke();
        triangle(mouseX, mouseY, mouseX - 15, mouseY + 20, mouseX + 15, mouseY + 20);

    } else if (toolChoice == '0') { // Sunburst Rays (for renewable energy)
        fill(255, 223, 0); // yellow
        noStroke();
        ellipse(mouseX, mouseY, 20, 20);
    }
}

function clear_print() {
    // Press 's' to clear the screen or 't' to save the canvas
    if (key == 's') {
        background(screenbg); // clear screen
    } else if (key == 't') {
        saveme(); // save image
    }
}

function saveme() {
    // Save the drawing with a unique filename
    let filename = initials + day() + hour() + minute() + second();
    if (second() != lastscreenshot) {
        saveCanvas(filename, 'jpg');
        key = "";
    }
    lastscreenshot = second();
}
