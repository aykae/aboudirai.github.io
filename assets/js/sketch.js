function setup() {
  WIDTH = displayWidth
  HEIGHT = displayHeight
  NODECOUNT = 30
  RADIUS = 5
  LINEWEIGHT = 2
  MAXSPEED = 3
  MAXLINKLEN = 200
  CONSTANTSPEED = false

  canvas = createCanvas(WIDTH, HEIGHT)
  canvas.parent("network")

  pos = []
  delta = []

  for (i = 0; i < NODECOUNT; i++) {
    pos[i] = [random(RADIUS/2, WIDTH-RADIUS/2), random(RADIUS/2, HEIGHT-RADIUS/2)]
    if (CONSTANTSPEED) {
      //THIS IS WRONG, MUST BE X and Y WHOSE NORM EQUALS CONSTANTSPEED
      //X: random between -max speed and maxspeed
      //Y: sqrt(CONSTANTSPEED^2-X^2) * random sign (posi or negi)
      delta[i] = [MAXSPEED, MAXSPEED]
    }
    else {
      delta[i] = [random(-MAXSPEED, MAXSPEED), random(-MAXSPEED, MAXSPEED)]
    }
  }
}

function draw() {
  background(255)
  stroke(200)
  fill(200)

  drawNodes()
  strokeWeight(LINEWEIGHT)
  drawLinks()
  moveNodes()
}

function drawNodes() {
  for (i = 0; i < NODECOUNT; i++) {
    circle(pos[i][0], pos[i][1], RADIUS)
  }
}

function drawLinks() {
  for (i = 0; i < NODECOUNT; i++) {
    for (j = i+1; j < NODECOUNT; j++) {
      d = dist(pos[i][0], pos[i][1], pos[j][0], pos[j][1])
      if (i!=j && d < MAXLINKLEN) {
        // if (d >= MAXLINKLEN/3) {
        //   stroke(255 * d/float(MAXLINKLEN/3))
        // }
        //stroke(d*255/MAXLINKLEN)
        line(pos[i][0], pos[i][1], pos[j][0], pos[j][1])
      }
    }
  }
}

function moveNodes() {
  for (i = 0; i < NODECOUNT; i++) {
    pos[i][0] += delta[i][0]
    pos[i][1] += delta[i][1]

    if (pos[i][0] >= WIDTH - RADIUS/2 || pos[i][0] <= 0 + RADIUS/2) {
      delta[i][0] *= -1
    }
    if (pos[i][1] >= HEIGHT - RADIUS/2 || pos[i][1] <= 0 + RADIUS/2) {
      delta[i][1] *= -1
    }
  }

}