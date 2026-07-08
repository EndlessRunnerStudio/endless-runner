let balken = 0;
let s = 650;
let u = 600;
let anzahlSterne = 650;
let ranzahlSterne = 650;

let objectX = 645;
let objectY = 100;
let objectB = 10;
let objectPosition = 0;
let objectDown = 0.5;

let objectX1 = 645;
let objectY1 = 100;
let objectB1 = 10;
let objectPosition1 = 0;
let objectDown1 = 0.5;

let objectX2 = 645;
let objectY2 = 100;
let objectB2 = 10;
let objectPosition2 = 0;
let objectDown2 = 0.5;

let objectX3 = 645;
let objectY3 = 100;
let objectB3 = 10;
let objectPosition3 = 0;
let objectDown3 = 0.5;

let objectX33 = 645;
let objectY33 = 90;
let objectB33 = 10;
let objectPosition33 = 0;
let objectDown33 = 0.5;

let objectX4 = 645;
let objectY4 = 100;
let objectB4 = 10;
let objectPosition4 = 0;
let objectDown4 = 0.5;

let objectX44 = 645;
let objectY44 = 90;
let objectB44 = 10;
let objectPosition44 = 0;
let objectDown44 = 0.5;

let objectMinus1 = false;
let objectMinus2 = true;
let objectMinus3 = false;

let objectMinus11 = false;
let objectMinus21 = true;
let objectMinus31 = false;

let objectMinus12 = false;
let objectMinus22 = true;
let objectMinus32 = false;

let objectMinus13 = false;
let objectMinus23 = true;
let objectMinus33 = false;

let objectMinus14 = false;
let objectMinus24 = true;
let objectMinus34 = false;

let gameOver = false;
let levelGeschafft = false;

let timer = 30;
let lastTime = 0;

let point = 0;
let rekord = 0;

let playerR = 0;
let playerG = 170;
let playerB = 255;

let r = false;
let m = true;
let l = false;

let rechts = false;
let links = false;
let rauf = false;
let runter = false;
let raufAktiv = true;
let mouseKlick = false;

let load = true;
let home = false;
let levelHomescreen = false;
let endless = false;
let skin = false;
let level1 = false;
let level2 = false;
let level3 = false;

let starX = new Array(anzahlSterne);
let starY = new Array(anzahlSterne);
let starSpeed = new Array(anzahlSterne);
let starSize = new Array(anzahlSterne);
let starColor = new Array(anzahlSterne);

let rstarX = new Array(ranzahlSterne);
let rstarY = new Array(ranzahlSterne);
let rstarSpeed = new Array(ranzahlSterne);
let rstarSize = new Array(ranzahlSterne);
let rstarColor = new Array(ranzahlSterne);

function setup() {
 canvas = createCanvas(1200, 500);

  for (let i = 0; i < anzahlSterne; i++) {
    starX[i] = random(0, 650);
    starY[i] = random(height);
    starSpeed[i] = random(1, 5);
    starSize[i] = random(1, 3);
    starColor[i] = 0;
  }

  for (let r = 0; r < ranzahlSterne; r++) {
    rstarX[r] = random(650, 1500);
    rstarY[r] = random(height);
    rstarSpeed[r] = random(1, 5);
    rstarSize[r] = random(1, 3);
    rstarColor[r] = 0;
  }
}

function draw() {
  if (load) {
    home = false;
    level1 = false;
    level2 = false;
    level3 = false;
    levelHomescreen = false;
    endless = false;
    skin = false;

    if (balken > 640) {
      balken = 640;
      home = true;
    }

    balken += 10;
    loadScreen(balken);
  }

  if (home) {
    load = false;
    level1 = false;
    level2 = false;
    level3 = false;
    levelHomescreen = false;
    endless = false;
    skin = false;
    homeScreen();
  }

  if (level1) {
    level2 = false;
    level3 = false;
    levelHomescreen = false;
    load = false;
    home = false;
    endless = false;
    skin = false;
    level1Modus();
  }

  if (level2) {
    level1 = false;
    level3 = false;
    levelHomescreen = false;
    load = false;
    home = false;
    endless = false;
    skin = false;
    level2Modus();
  }

  if (level3) {
    level1 = false;
    level2 = false;
    levelHomescreen = false;
    load = false;
    home = false;
    endless = false;
    skin = false;
    level3Modus();
  }

  if (endless) {
    load = false;
    home = false;
    level1 = false;
    level2 = false;
    level3 = false;
    levelHomescreen = false;
    skin = false;
    endlessModus();
  }

  if (skin) {
    load = false;
    home = false;
    level1 = false;
    level2 = false;
    level3 = false;
    levelHomescreen = false;
    endless = false;
    skinMenü();
  }

  if (levelHomescreen) {
    load = false;
    home = false;
    level1 = false;
    level2 = false;
    level3 = false;
    endless = false;
    levelHome();
  }
}

function loadScreen(balkenY) {
  background(0);
  fill(100, 0, 0);
  textSize(150);
  text("Endless Runner", 150, 200);
  fill(255, 0);
  rect(300, 550, 650, 50);
  fill(100, 0, 0);
  rect(300, 550, balkenY, 50);
}

function homeScreen() {
  background(0);
  fill(100, 0, 0);
  rect(550, 500, 200, 100);
  rect(850, 500, 200, 100);
  rect(250, 500, 200, 100);

  fill(100, 0, 0);
  textSize(100);
  text("Endless Runner", 350, 300);

  textSize(50);
  fill(0, 255, 0);
  text("Level", 285, 570);
  text("Endless", 570, 570);
  text("Skin", 900, 570);

  if (mouseX > 250 && mouseX < 450 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    mouseKlick = false;
    levelHomescreen = true;
  }

  if (mouseX > 550 && mouseX < 750 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    mouseKlick = false;
    endless = true;
  }

  if (mouseX > 850 && mouseX < 1050 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    mouseKlick = false;
    skin = true;
  }

  for (let i = 0; i < anzahlSterne; i++) {
    starY[i] += starSpeed[i];

    if (starY[i] > height) {
      starY[i] = 0;
      starX[i] = random(0, 650);
    }

    fill(255);
    circle(starX[i], starY[i], starSize[i]);
  }

  for (let r = 0; r < ranzahlSterne; r++) {
    rstarY[r] += rstarSpeed[r];

    if (rstarY[r] > height) {
      rstarY[r] = 0;
      rstarX[r] = random(650, 1500);
    }

    fill(255);
    circle(rstarX[r], rstarY[r], rstarSize[r]);
  }
}

function levelHome() {
  background(0);

  fill(100, 0, 0);
  rect(550, 500, 200, 100);
  rect(850, 500, 200, 100);
  rect(250, 500, 200, 100);
  rect(75, 50, 100, 50);

  textSize(200);
  text("Level", 450, 300);

  textSize(50);
  fill(0, 255, 0);
  text("Einfach", 270, 570);
  text("Mittel", 590, 570);
  text("Schwer", 870, 570);
  textSize(20);
  text("Zurück", 95, 80);

  if (mouseX > 250 && mouseX < 450 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    resetGame();
    level1 = true;
    levelHomescreen = false;
  }

  if (mouseX > 550 && mouseX < 750 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    resetGame();
    level2 = true;
    levelHomescreen = false;
  }

  if (mouseX > 850 && mouseX < 1050 && mouseY > 500 && mouseY < 600 && mouseKlick) {
    resetGame();
    level3 = true;
    levelHomescreen = false;
  }

  if (mouseX > 75 && mouseX < 175 && mouseY > 50 && mouseY < 100 && mouseKlick) {
    home = true;
    levelHomescreen = false;
  }

  for (let i = 0; i < anzahlSterne; i++) {
    starY[i] += starSpeed[i];

    if (starY[i] > height) {
      starY[i] = 0;
      starX[i] = random(0, 650);
    }

    fill(255);
    circle(starX[i], starY[i], starSize[i]);
  }

  for (let r = 0; r < ranzahlSterne; r++) {
    rstarY[r] += rstarSpeed[r];

    if (rstarY[r] > height) {
      rstarY[r] = 0;
      rstarX[r] = random(650, 1500);
    }

    fill(255);
    circle(rstarX[r], rstarY[r], rstarSize[r]);
  }
}

function Map() {
  background(0);
  noStroke();
  fill(0);
  quad(650, 90, 0, 800, 650, 800, 1300, 800);
  fill(64);
  circle(650, 90, 100);
  fill(39, 15, 75);
  quad(620, 100, 350, 800, 950, 800, 680, 100);

  strokeWeight(10);
  stroke(150, 0, 0);
  line(620, 100, 350, 800);
  line(640, 100, 550, 800);
  line(660, 100, 750, 800);
  line(680, 100, 950, 800);

  noStroke();

  for (let i = 0; i < anzahlSterne; i++) {
    starY[i] += starSpeed[i];
    starX[i] -= 2;

    if (starY[i] > height) {
      starY[i] = 0;
      starX[i] = random(0, 650);
    }

    fill(255);
    circle(starX[i], starY[i], starSize[i]);
  }

  for (let r = 0; r < ranzahlSterne; r++) {
    rstarY[r] += rstarSpeed[r];
    rstarX[r] += 2;

    if (rstarY[r] > height) {
      rstarY[r] = 0;
      rstarX[r] = random(650, 1500);
    }

    fill(255);
    circle(rstarX[r], rstarY[r], rstarSize[r]);
  }
}

function player() {
  stroke(1);
  strokeWeight(3);
  fill(playerR, playerG, playerB);
  circle(s, u, 50);

  if (raufAktiv) {
    if (rauf) {
      if (point > 10000) {
        u -= 40;
      } else if (level3 || point > 5000) {
        u -= 20;
      } else {
        u -= 10;
      }
    }
  }

  if (runter) {
    if (point > 10000) {
      u += 28;
    } else if (level3 || point > 5000) {
      u += 14;
    } else {
      u += 7;
    }
  }

  if (u < 350) {
    raufAktiv = false;
    rauf = false;
    runter = true;
  }

  if (u > 600) {
    raufAktiv = true;
    runter = false;
  }

  if (rauf && runter) {
    rauf = false;
  }

  if (m && links) {
    rechts = false;

    if (point > 10000) {
      s -= 20;
    } else {
      s -= 10;
    }

    if (s < 500) {
      s = 500;
      l = true;
      m = false;
      rechts = false;
      links = false;
    }
  }

  if (m && rechts) {
    links = false;

    if (point > 10000) {
      s += 20;
    } else {
      s += 10;
    }

    if (s > 800) {
      s = 800;
      r = true;
      m = false;
      rechts = false;
      links = false;
    }
  }

  if (l && rechts) {
    links = false;

    if (point > 10000) {
      s += 20;
    } else {
      s += 10;
    }

    if (s > 650) {
      s = 650;
      m = true;
      l = false;
      rechts = false;
      links = false;
    }
  }

  if (r && links) {
    rechts = false;

    if (point > 10000) {
      s -= 20;
    } else {
      s -= 10;
    }

    if (s < 650) {
      s = 650;
      m = true;
      r = false;
      rechts = false;
      links = false;
    }
  }
}

function level1Modus() {

  Map();
  easy();
  player();

  if (!gameOver && !levelGeschafft) {
    collision();
    countdown();
  }

  if (gameOver) {

    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER", 400, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level1 = false;

      resetGame();
    }
  }

  if (levelGeschafft) {

    fill(0, 255, 0);
    textSize(100);
    text("LEVEL GESCHAFFT", 200, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level1 = false;

      resetGame();
    }
  }
}

function level2Modus() {

  Map();
  midle();
  player();

  if (!gameOver && !levelGeschafft) {
    collision();
    countdown();
  }

  if (gameOver) {

    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER", 400, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level2 = false;

      resetGame();
    }
  }

  if (levelGeschafft) {

    fill(0, 255, 0);
    textSize(100);
    text("LEVEL GESCHAFFT", 200, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level2 = false;

      resetGame();
    }
  }
}

function level3Modus() {

  Map();
  hard();
  player();

  if (!gameOver && !levelGeschafft) {
    collision();
    countdown();
  }

  if (gameOver) {

    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER", 400, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level3 = false;

      resetGame();
    }
  }

  if (levelGeschafft) {

    fill(0, 255, 0);
    textSize(100);
    text("LEVEL GESCHAFFT", 200, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      level3 = false;

      resetGame();
    }
  }
}

function endlessModus() {
  Map();

  if (point > rekord) rekord = point;

  if (point > 10100) {
    impossible();
  } else if (point > 10000) {
    textSize(100);
    fill(50, 0, 0);
    text("Unmöglich", 500, 300);
    endlessReset();
  } else if (point > 5100) {
    hard();
  } else if (point > 5000) {
    endlessReset();
    textSize(100);
    fill(150, 0, 0);
    text("Schwer", 500, 200);
  } else if (point > 1100) {
    midle();
  } else if (point > 1000) {
    textSize(100);
    fill(255, 128, 0);
    text("Mittel", 500, 300);
    endlessReset();
  } else {
    easy();
    fill(0, 100, 0);
    textSize(100);
    text("Einfach", 500, 300);
  }

  player();

  if (!gameOver) {
    point += 7;
    collision();
  }

  if (gameOver) {

    fill(255, 0, 0);
    textSize(100);
    text("GAME OVER", 400, 200);

    fill(0, 200, 0);
    rect(500, 500, 300, 100);

    fill(255);
    textSize(50);
    text("MENU", 575, 565);

    if (
      mouseX > 500 &&
      mouseX < 800 &&
      mouseY > 500 &&
      mouseY < 600 &&
      mouseKlick
    ) {

      balken = 0;

      load = true;
      endless = false;

      resetGame();
    }
  }

  textSize(50);
  fill(150, 0, 0);
  text("Punkte:" + point, 75, 50);
  text("Rekord:" + rekord, 75, 100);
}

function skinMenü() {

  background(0);

  fill(playerR, playerG, playerB);
  circle(1000, 150, 100);

  fill(100, 0, 0);
  textSize(100);
  text("Skin", 550, 200);

  fill(100, 0, 0);
  rect(75, 50, 100, 50);

  fill(0, 255, 0);
  textSize(20);
  text("Zurück", 95, 80);

  if (mouseX > 75 && mouseX < 175 && mouseY > 50 && mouseY < 100 && mouseKlick) {
    home = true;
    skin = false;
  }

  fill(0, 170, 255); rect(350, 300, 80, 80);
  fill(57, 255, 20); rect(470, 300, 80, 80);
  fill(255, 255, 0); rect(590, 300, 80, 80);
  fill(255, 120, 0); rect(710, 300, 80, 80);
  fill(255, 40, 40); rect(830, 300, 80, 80);

  fill(255, 20, 147); rect(350, 430, 80, 80);
  fill(180, 0, 255); rect(470, 430, 80, 80);
  fill(255, 0, 255); rect(590, 430, 80, 80);
  fill(0, 255, 220); rect(710, 430, 80, 80);
  fill(255, 215, 0); rect(830, 430, 80, 80);

  if (mouseX > 350 && mouseX < 430 && mouseY > 300 && mouseY < 380 && mouseKlick) {
    playerR = 0;
    playerG = 170;
    playerB = 255;
  }

  if (mouseX > 470 && mouseX < 550 && mouseY > 300 && mouseY < 380 && mouseKlick) {
    playerR = 57;
    playerG = 255;
    playerB = 20;
  }

  if (mouseX > 590 && mouseX < 670 && mouseY > 300 && mouseY < 380 && mouseKlick) {
    playerR = 255;
    playerG = 255;
    playerB = 0;
  }

  if (mouseX > 710 && mouseX < 790 && mouseY > 300 && mouseY < 380 && mouseKlick) {
    playerR = 255;
    playerG = 120;
    playerB = 0;
  }

  if (mouseX > 830 && mouseX < 910 && mouseY > 300 && mouseY < 380 && mouseKlick) {
    playerR = 255;
    playerG = 40;
    playerB = 40;
  }

  if (mouseX > 350 && mouseX < 430 && mouseY > 430 && mouseY < 510 && mouseKlick) {
    playerR = 255;
    playerG = 20;
    playerB = 147;
  }

  if (mouseX > 470 && mouseX < 550 && mouseY > 430 && mouseY < 510 && mouseKlick) {
    playerR = 180;
    playerG = 0;
    playerB = 255;
  }

  if (mouseX > 590 && mouseX < 670 && mouseY > 430 && mouseY < 510 && mouseKlick) {
    playerR = 255;
    playerG = 0;
    playerB = 255;
  }

  if (mouseX > 710 && mouseX < 790 && mouseY > 430 && mouseY < 510 && mouseKlick) {
    playerR = 0;
    playerG = 255;
    playerB = 220;
  }

  if (mouseX > 830 && mouseX < 910 && mouseY > 430 && mouseY < 510 && mouseKlick) {
    playerR = 255;
    playerG = 215;
    playerB = 0;
  }

  for (let i = 0; i < anzahlSterne; i++) {
    starY[i] += starSpeed[i];

    if (starY[i] > height) {
      starY[i] = 0;
      starX[i] = random(0, 650);
    }

    fill(255);
    circle(starX[i], starY[i], starSize[i]);
  }

  for (let r = 0; r < ranzahlSterne; r++) {
    rstarY[r] += rstarSpeed[r];

    if (rstarY[r] > height) {
      rstarY[r] = 0;
      rstarX[r] = random(650, 1500);
    }

    fill(255);
    circle(rstarX[r], rstarY[r], rstarSize[r]);
  }
}

function easy() {
  noStroke();

  objectY += 3;
  objectB += 1;

  if (objectMinus1) {
    objectX -= 1.5;
  }

  if (objectMinus2) {
    objectX -= 0.5;
  }

  if (objectMinus3) {
    objectX += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX, objectY, objectB, objectB);

  if (objectY > 550) {

    objectY = 100;
    objectB = 10;

    objectMinus1 = false;
    objectMinus2 = false;
    objectMinus3 = false;

    objectPosition = floor(random(0, 3));

    if (objectPosition == 0) {
      objectX = 625;
      objectMinus1 = true;
    }

    if (objectPosition == 1) {
      objectX = 645;
      objectMinus2 = true;
    }

    if (objectPosition == 2) {
      objectX = 665;
      objectMinus3 = true;
    }
  }

  objectY1 += 3;
  objectB1 += 1;

  if (objectMinus11) {
    objectX1 -= 1.5;
  }

  if (objectMinus21) {
    objectX1 -= 0.5;
  }

  if (objectMinus31) {
    objectX1 += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX1, objectY1, objectB1, objectB1);

  if (objectY1 > 550) {

    objectY1 = 100;
    objectB1 = 10;

    objectMinus11 = false;
    objectMinus21 = false;
    objectMinus31 = false;

    objectPosition1 = floor(random(0, 3));

    if (objectPosition1 == 0) {
      objectX1 = 625;
      objectMinus11 = true;
    }

    if (objectPosition1 == 1) {
      objectX1 = 645;
      objectMinus21 = true;
    }

    if (objectPosition1 == 2) {
      objectX1 = 665;
      objectMinus31 = true;
    }
  }

  objectY2 += 3;
  objectB2 += 1;

  if (objectMinus12) {
    objectX2 -= 1.5;
  }

  if (objectMinus22) {
    objectX2 -= 0.5;
  }

  if (objectMinus32) {
    objectX2 += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX2, objectY2, objectB2, objectB2);

  if (objectY2 > 550) {

    objectY2 = 100;
    objectB2 = 10;

    objectMinus12 = false;
    objectMinus22 = false;
    objectMinus32 = false;

    objectPosition2 = floor(random(0, 3));

    if (objectPosition2 == 0) {
      objectX2 = 625;
      objectMinus12 = true;
    }

    if (objectPosition2 == 1) {
      objectX2 = 645;
      objectMinus22 = true;
    }

    if (objectPosition2 == 2) {
      objectX2 = 665;
      objectMinus32 = true;
    }
  }
}

function midle() {
  noStroke();

  objectY += 3;
  objectB += 1;

  if (objectMinus1) {
    objectX -= 1.5;
  }

  if (objectMinus2) {
    objectX -= 0.5;
  }

  if (objectMinus3) {
    objectX += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX, objectY, objectB, objectB);

  if (objectY > 550) {

    objectY = 100;
    objectB = 10;

    objectMinus1 = false;
    objectMinus2 = false;
    objectMinus3 = false;

    objectPosition = floor(random(0, 3));

    if (objectPosition == 0) {
      objectX = 625;
      objectMinus1 = true;
    }

    if (objectPosition == 1) {
      objectX = 645;
      objectMinus2 = true;
    }

    if (objectPosition == 2) {
      objectX = 665;
      objectMinus3 = true;
    }
  }

  objectY1 += 3;
  objectB1 += 1;

  if (objectMinus11) {
    objectX1 -= 1.5;
  }

  if (objectMinus21) {
    objectX1 -= 0.5;
  }

  if (objectMinus31) {
    objectX1 += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX1, objectY1, objectB1, objectB1);

  if (objectY1 > 550) {

    objectY1 = 100;
    objectB1 = 10;

    objectMinus11 = false;
    objectMinus21 = false;
    objectMinus31 = false;

    objectPosition1 = floor(random(0, 3));

    if (objectPosition1 == 0) {
      objectX1 = 625;
      objectMinus11 = true;
    }

    if (objectPosition1 == 1) {
      objectX1 = 645;
      objectMinus21 = true;
    }

    if (objectPosition1 == 2) {
      objectX1 = 665;
      objectMinus31 = true;
    }
  }

  objectY3 += 3;
  objectB3 += 1;
  objectY33 += 2;
  objectB33 += 1;

  if (objectMinus13) {
    objectX3 -= 1.5;
    objectX33 -= 1.5;
  }

  if (objectMinus23) {
    objectX3 -= 0.5;
    objectX33 -= 0.5;
  }

  if (objectMinus33) {
    objectX3 += 0.5;
    objectX33 += 0.5;
  }

  fill(100, 0, 0);
  rect(objectX3, objectY3, objectB3, objectB3);

  if (objectY3 > 550) {

    objectY3 = 100;
    objectB3 = 10;
    objectY33 = 90;
    objectB33 = 10;

    objectMinus13 = false;
    objectMinus23 = false;
    objectMinus33 = false;

    objectPosition3 = floor(random(0, 3));

    if (objectPosition3 == 0) {
      objectX3 = 625;
      objectX33 = 625;
      objectMinus13 = true;
    }

    if (objectPosition3 == 1) {
      objectX3 = 645;
      objectX33 = 645;
      objectMinus23 = true;
    }

    if (objectPosition3 == 2) {
      objectX3 = 665;
      objectX33 = 665;
      objectMinus33 = true;
    }
  }

  fill(100, 0, 0);
  rect(objectX33, objectY33, objectB33, objectB33);
}

function hard() {
  noStroke();

  objectY += 6;
  objectB += 2;

  if (objectMinus1) {
    objectX -= 3;
  }

  if (objectMinus2) {
    objectX -= 1;
  }

  if (objectMinus3) {
    objectX += 1;
  }

  fill(100, 0, 0);
  rect(objectX, objectY, objectB, objectB);

  if (objectY > 550) {

    objectY = 100;
    objectB = 10;

    objectMinus1 = false;
    objectMinus2 = false;
    objectMinus3 = false;

    objectPosition = floor(random(0, 3));

    if (objectPosition == 0) {
      objectX = 625;
      objectMinus1 = true;
    }

    if (objectPosition == 1) {
      objectX = 645;
      objectMinus2 = true;
    }

    if (objectPosition == 2) {
      objectX = 665;
      objectMinus3 = true;
    }
  }

  objectY1 += 6;
  objectB1 += 2;

  if (objectMinus11) {
    objectX1 -= 3;
  }

  if (objectMinus21) {
    objectX1 -= 1;
  }

  if (objectMinus31) {
    objectX1 += 1;
  }

  fill(100, 0, 0);
  rect(objectX1, objectY1, objectB1, objectB1);

  if (objectY1 > 550) {

    objectY1 = 100;
    objectB1 = 10;

    objectMinus11 = false;
    objectMinus21 = false;
    objectMinus31 = false;

    objectPosition1 = floor(random(0, 3));

    if (objectPosition1 == 0) {
      objectX1 = 625;
      objectMinus11 = true;
    }

    if (objectPosition1 == 1) {
      objectX1 = 645;
      objectMinus21 = true;
    }

    if (objectPosition1 == 2) {
      objectX1 = 665;
      objectMinus31 = true;
    }
  }

  objectY2 += 6;
  objectB2 += 2;

  if (objectMinus12) {
    objectX2 -= 3;
  }

  if (objectMinus22) {
    objectX2 -= 1;
  }

  if (objectMinus32) {
    objectX2 += 1;
  }

  fill(100, 0, 0);
  rect(objectX2, objectY2, objectB2, objectB2);

  if (objectY2 > 550) {

    objectY2 = 100;
    objectB2 = 10;

    objectMinus12 = false;
    objectMinus22 = false;
    objectMinus32 = false;

    objectPosition2 = floor(random(0, 3));

    if (objectPosition2 == 0) {
      objectX2 = 625;
      objectMinus12 = true;
    }

    if (objectPosition2 == 1) {
      objectX2 = 645;
      objectMinus22 = true;
    }

    if (objectPosition2 == 2) {
      objectX2 = 665;
      objectMinus32 = true;
    }
  }

    objectY3 += 6;
  objectB3 += 2;
  objectY33 += 4;
  objectB33 += 2;

  if (objectMinus13) {
    objectX3 -= 3;
    objectX33 -= 3;
  }

  if (objectMinus23) {
    objectX3 -= 1;
    objectX33 -= 1;
  }

  if (objectMinus33) {
    objectX3 += 1;
    objectX33 += 1;
  }

  fill(100, 0, 0);
  rect(objectX3, objectY3, objectB3, objectB3);

  if (objectY3 > 550) {

    objectY3 = 100;
    objectB3 = 10;
    objectY33 = 90;
    objectB33 = 10;

    objectMinus13 = false;
    objectMinus23 = false;
    objectMinus33 = false;

    objectPosition3 = floor(random(0, 3));

    if (objectPosition3 == 0) {
      objectX3 = 625;
      objectX33 = 625;
      objectMinus13 = true;
    }

    if (objectPosition3 == 1) {
      objectX3 = 645;
      objectX33 = 645;
      objectMinus23 = true;
    }

    if (objectPosition3 == 2) {
      objectX3 = 665;
      objectX33 = 665;
      objectMinus33 = true;
    }
  }

  fill(100, 0, 0);
  rect(objectX33, objectY33, objectB33, objectB33);

  objectY4 += 6;
  objectB4 += 2;
  objectY44 += 4;
  objectB44 += 2;

  if (objectMinus14) {
    objectX4 -= 3;
    objectX44 -= 3;
  }

  if (objectMinus24) {
    objectX4 -= 1;
    objectX44 -= 1;
  }

  if (objectMinus34) {
    objectX4 += 1;
    objectX44 += 1;
  }

  fill(100, 0, 0);
  rect(objectX4, objectY4, objectB4, objectB4);

  if (objectY4 > 550) {

    objectY4 = 100;
    objectB4 = 10;
    objectY44 = 90;
    objectB44 = 10;

    objectMinus14 = false;
    objectMinus24 = false;
    objectMinus34 = false;

    objectPosition4 = floor(random(0, 3));

    if (objectPosition4 == 0) {
      objectX4 = 625;
      objectX44 = 625;
      objectMinus14 = true;
    }

    if (objectPosition4 == 1) {
      objectX4 = 645;
      objectX44 = 645;
      objectMinus24 = true;
    }

    if (objectPosition4 == 2) {
      objectX4 = 665;
      objectX44 = 665;
      objectMinus34 = true;
    }
  }

  fill(100, 0, 0);
  rect(objectX44, objectY44, objectB44);
}

function impossible() {
  noStroke();

  objectY += 12;
  objectB += 4;

  if (objectMinus1) {
    objectX -= 6;
  }

  if (objectMinus2) {
    objectX -= 2;
  }

  if (objectMinus3) {
    objectX += 2;
  }

  fill(100, 0, 0);
  rect(objectX, objectY, objectB, objectB);

  if (objectY > 550) {

    objectY = 100;
    objectB = 10;

    objectMinus1 = false;
    objectMinus2 = false;
    objectMinus3 = false;

    objectPosition = floor(random(0, 3));

    if (objectPosition == 0) {
      objectX = 625;
      objectMinus1 = true;
    }

    if (objectPosition == 1) {
      objectX = 645;
      objectMinus2 = true;
    }

    if (objectPosition == 2) {
      objectX = 665;
      objectMinus3 = true;
    }
  }

  objectY1 += 12;
  objectB1 += 4;

  if (objectMinus11) {
    objectX1 -= 6;
  }

  if (objectMinus21) {
    objectX1 -= 2;
  }

  if (objectMinus31) {
    objectX1 += 2;
  }

  fill(100, 0, 0);
  rect(objectX1, objectY1, objectB1, objectB1);

  if (objectY1 > 550) {

    objectY1 = 100;
    objectB1 = 10;

    objectMinus11 = false;
    objectMinus21 = false;
    objectMinus31 = false;

    objectPosition1 = floor(random(0, 3));

    if (objectPosition1 == 0) {
      objectX1 = 625;
      objectMinus11 = true;
    }

    if (objectPosition1 == 1) {
      objectX1 = 645;
      objectMinus21 = true;
    }

    if (objectPosition1 == 2) {
      objectX1 = 665;
      objectMinus31 = true;
    }
  }

  objectY2 += 12;
  objectB2 += 4;

  if (objectMinus12) {
    objectX2 -= 6;
  }

  if (objectMinus22) {
    objectX2 -= 2;
  }

  if (objectMinus32) {
    objectX2 += 2;
  }

  fill(100, 0, 0);
  rect(objectX2, objectY2, objectB2, objectB2);

  if (objectY2 > 550) {

    objectY2 = 100;
    objectB2 = 10;

    objectMinus12 = false;
    objectMinus22 = false;
    objectMinus32 = false;

    objectPosition2 = floor(random(0, 3));

    if (objectPosition2 == 0) {
      objectX2 = 625;
      objectMinus12 = true;
    }

    if (objectPosition2 == 1) {
      objectX2 = 645;
      objectMinus22 = true;
    }

    if (objectPosition2 == 2) {
      objectX2 = 665;
      objectMinus32 = true;
    }
  }

  objectY3 += 12;
objectB3 += 4;
objectY33 += 8;
objectB33 += 4;

if(objectMinus13){
  objectX3 -= 6;
  objectX33 -= 6;
}

if(objectMinus23){
  objectX3 -= 2;
  objectX33 -= 2;
}

if(objectMinus33){
  objectX3 += 2;
  objectX33 += 2;
}

fill(100, 0, 0);
rect(objectX3, objectY3, objectB3, objectB3);

if(objectY3 > 550){

  objectY3 = 100;
  objectB3 = 10;
  objectY33 = 90;
  objectB33 = 10;

  objectMinus13 = false;
  objectMinus23 = false;
  objectMinus33 = false;

  objectPosition3 = int(random(0,3));

  if(objectPosition3 == 0){
    objectX3 = 625;
    objectX33 = 625;
    objectMinus13 = true;
  }

  if(objectPosition3 == 1){
    objectX3 = 645;
    objectX33 = 645;
    objectMinus23 = true;
  }

  if(objectPosition3 == 2){
    objectX3 = 665;
    objectX33 = 665;
    objectMinus33 = true;
  }
}

fill(100, 0, 0);
rect(objectX33, objectY33, objectB33, objectB33);


objectY4 += 12;
objectB4 += 4;
objectY44 += 8;
objectB44 += 4;

if(objectMinus14){
  objectX4 -= 6;
  objectX44 -= 6;
}

if(objectMinus24){
  objectX4 -= 2;
  objectX44 -= 2;
}

if(objectMinus34){
  objectX4 += 2;
  objectX44 += 2;
}

fill(100, 0, 0);
rect(objectX4, objectY4, objectB4, objectB4);

if(objectY4 > 550){

  objectY4 = 100;
  objectB4 = 10;
  objectY44 = 90;
  objectB44 = 10;

  objectMinus14 = false;
  objectMinus24 = false;
  objectMinus34 = false;

  objectPosition4 = int(random(0,3));

  if(objectPosition4 == 0){
    objectX4 = 625;
    objectX44 = 625;
    objectMinus14 = true;
  }

  if(objectPosition4 == 1){
    objectX4 = 645;
    objectX44 = 645;
    objectMinus24 = true;
  }

  if(objectPosition4 == 2){
    objectX4 = 665;
    objectX44 = 665;
    objectMinus34 = true;
  }
}

fill(100, 0, 0);
rect(objectX44, objectY44, objectB44, objectB44);
}

function collision(){

  let beruehrung =
  
    (s + 25 > objectX &&
    s - 25 < objectX + objectB &&
    u + 25 > objectY &&
    u - 25 < objectY + objectB)

    ||

    (s + 25 > objectX1 &&
    s - 25 < objectX1 + objectB1 &&
    u + 25 > objectY1 &&
    u - 25 < objectY1 + objectB1)

    ||

    (s + 25 > objectX2 &&
    s - 25 < objectX2 + objectB2 &&
    u + 25 > objectY2 &&
    u - 25 < objectY2 + objectB2)

    ||

    (s + 25 > objectX3 &&
    s - 25 < objectX3 + objectB3 &&
    u + 25 > objectY3 &&
    u - 25 < objectY3 + objectB3)

    ||

    (s + 25 > objectX33 &&
    s - 25 < objectX33 + objectB33 &&
    u + 25 > objectY33 &&
    u - 25 < objectY33 + objectB33)

    ||

    (s + 25 > objectX4 &&
    s - 25 < objectX4 + objectB4 &&
    u + 25 > objectY4 &&
    u - 25 < objectY4 + objectB4)

    ||

    (s + 25 > objectX44 &&
    s - 25 < objectX44 + objectB44 &&
    u + 25 > objectY44 &&
    u - 25 < objectY44 + objectB44);

  if(beruehrung){

    if(runter || (!rauf && !runter)){
      gameOver = true;
    }
  }
}

function resetGame(){

  gameOver = false;
  levelGeschafft = false;
  
  point=0;

  s = 650;
  u = 600;

  rauf = false;
  runter = false;
  links = false;
  rechts = false;
  
  l=false;
  m=true;
  r=false;

  timer = 30;
  lastTime = millis();

  objectY = 100;
  objectB = 10;

  objectMinus1 = false;
  objectMinus2 = false;
  objectMinus3 = false;

  objectPosition = floor(random(0,3));

  if(objectPosition == 0){
    objectX = 625;
    objectMinus1 = true;
  }

  if(objectPosition == 1){
    objectX = 645;
    objectMinus2 = true;
  }

  if(objectPosition == 2){
    objectX = 665;
    objectMinus3 = true;
  }

  objectY1 = 100;
  objectB1 = 10;

  objectMinus11 = false;
  objectMinus21 = false;
  objectMinus31 = false;

  objectPosition1 = floor(random(0,3));

  if(objectPosition1 == 0){
    objectX1 = 625;
    objectMinus11 = true;
  }

  if(objectPosition1 == 1){
    objectX1 = 645;
    objectMinus21 = true;
  }

  if(objectPosition1 == 2){
    objectX1 = 665;
    objectMinus31 = true;
  }

  objectY2 = 100;
  objectB2 = 10;

  objectMinus12 = false;
  objectMinus22 = false;
  objectMinus32 = false;

  objectPosition2 = floor(random(0,3));

  if(objectPosition2 == 0){
    objectX2 = 625;
    objectMinus12 = true;
  }

  if(objectPosition2 == 1){
    objectX2 = 645;
    objectMinus22 = true;
  }

  if(objectPosition2 == 2){
    objectX2 = 665;
    objectMinus32 = true;
  }

  objectY3 = 100;
  objectB3 = 10;

  objectY33 = 90;
  objectB33 = 10;

  objectMinus13 = false;
  objectMinus23 = false;
  objectMinus33 = false;

  objectPosition3 = floor(random(0,3));

  if(objectPosition3 == 0){
    objectX3 = 625;
    objectX33 = 625;
    objectMinus13 = true;
  }

  if(objectPosition3 == 1){
    objectX3 = 645;
    objectX33 = 645;
    objectMinus23 = true;
  }

  if(objectPosition3 == 2){
    objectX3 = 665;
    objectX33 = 665;
    objectMinus33 = true;
  }
  
  objectY4 = 100;
  objectB4 = 10;

  objectY44 = 90;
  objectB44 = 10;

  objectMinus14 = false;
  objectMinus24 = false;
  objectMinus34 = false;

  objectPosition4 = floor(random(0,3));

  if(objectPosition4 == 0){
    objectX4 = 625;
    objectX44 = 625;
    objectMinus14 = true;
  }

  if(objectPosition4 == 1){
    objectX4 = 645;
    objectX44 = 645;
    objectMinus24 = true;
  }

  if(objectPosition4 == 2){
    objectX4 = 665;
    objectX44 = 665;
    objectMinus34 = true;
  }
}

function endlessReset(){
  objectY = 100;
  objectB = 10;

  objectMinus1 = false;
  objectMinus2 = false;
  objectMinus3 = false;

  objectPosition = floor(random(0,3));

  if(objectPosition == 0){
    objectX = 625;
    objectMinus1 = true;
  }

  if(objectPosition == 1){
    objectX = 645;
    objectMinus2 = true;
  }

  if(objectPosition == 2){
    objectX = 665;
    objectMinus3 = true;
  }

  objectY1 = 100;
  objectB1 = 10;

  objectMinus11 = false;
  objectMinus21 = false;
  objectMinus31 = false;

  objectPosition1 = floor(random(0,3));

  if(objectPosition1 == 0){
    objectX1 = 625;
    objectMinus11 = true;
  }

  if(objectPosition1 == 1){
    objectX1 = 645;
    objectMinus21 = true;
  }

  if(objectPosition1 == 2){
    objectX1 = 665;
    objectMinus31 = true;
  }

  objectY2 = 100;
  objectB2 = 10;

  objectMinus12 = false;
  objectMinus22 = false;
  objectMinus32 = false;

  objectPosition2 = floor(random(0,3));

  if(objectPosition2 == 0){
    objectX2 = 625;
    objectMinus12 = true;
  }

  if(objectPosition2 == 1){
    objectX2 = 645;
    objectMinus22 = true;
  }

  if(objectPosition2 == 2){
    objectX2 = 665;
    objectMinus32 = true;
  }

  objectY3 = 100;
  objectB3 = 10;

  objectY33 = 90;
  objectB33 = 10;

  objectMinus13 = false;
  objectMinus23 = false;
  objectMinus33 = false;

  objectPosition3 = floor(random(0,3));

  if(objectPosition3 == 0){
    objectX3 = 625;
    objectX33 = 625;
    objectMinus13 = true;
  }

  if(objectPosition3 == 1){
    objectX3 = 645;
    objectX33 = 645;
    objectMinus23 = true;
  }

  if(objectPosition3 == 2){
    objectX3 = 665;
    objectX33 = 665;
    objectMinus33 = true;
  }
  
  objectY4 = 100;
  objectB4 = 10;

  objectY44 = 90;
  objectB44 = 10;

  objectMinus14 = false;
  objectMinus24 = false;
  objectMinus34 = false;

  objectPosition4 = floor(random(0,3));

  if(objectPosition4 == 0){
    objectX4 = 625;
    objectX44 = 625;
    objectMinus14 = true;
  }

  if(objectPosition4 == 1){
    objectX4 = 645;
    objectX44 = 645;
    objectMinus24 = true;
  }

  if(objectPosition4 == 2){
    objectX4 = 665;
    objectX44 = 665;
    objectMinus34 = true;
  }
}

function countdown(){

  if(millis() - lastTime >= 1000){

    timer--;
    lastTime = millis();
  }

  fill(255);
  textSize(50);
  text(timer, 40, 60);

  if(timer <= 0){
    levelGeschafft = true;
  }
}

function keyPressed(){

  if(keyCode == RIGHT) rechts = true;
  if(keyCode == LEFT) links = true;
  if(keyCode == UP) rauf = true;

  if(key == 'r' || key == 'R'){
    rekord = 0;
  }
}

function mousePressed(){
  mouseKlick=true;
}

function mouseReleased(){
  mouseKlick=false;
}