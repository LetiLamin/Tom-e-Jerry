var cat, imgCat, imgCat2, mouse, imgMouse, imgMouse2, garden, imgGarden
function preload() {
  //load the images here
  imgCat = loadImage('images/cat1.png')
  imgMouse = loadImage('images/mouse1.png')
  imgCat2 = loadImage('images/cat2.png', 'images/cat3.png')
  imgMouse2 = loadImage('images/mouse2.png', 'images/mouse3.png')
  imgGarden = loadImage('images/garden.png')
}

function setup() {
  createCanvas(1000, 800)
  //create tom and jerry sprites here
  cat = createSprite(870, 600)
  cat.addAnimation('gatoSentado', imgCat)
  cat.scale = 0.2
  mouse = createSprite(220, 600)
  mouse.addAnimation('ratoEmPé', imgMouse)
  mouse.scale = 0.2
}

function draw() {
  background(imgGarden)
  //Write condition here to evalute if tom and jerry collide
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation('ÚltimaImagemGato', imgCat2)
    cat.changeAnimation('ÚltimaImagemGato')
    mouse.addAnimation('ratoProvocando', imgMouse2)
    mouse.changeAnimation('ratoProvocando')
    cat.x = 300
    cat.scale = 0.2
  }

  keyPressed()

  drawSprites()
}

function keyPressed() {
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    mouse.addAnimation('ratoProvocando', imgMouse2)
    mouse.changeAnimation('ratoProvocando')
    cat.addAnimation('ÚltimaImagemGato', imgCat2)
    cat.changeAnimation('ÚltimaImagemGato')
    mouse.frameDelay = 25

    cat.velocityX = -5
  }
}
