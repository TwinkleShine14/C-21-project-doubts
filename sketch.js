function preload() {
  var bullet, wall, thickness;
  var speed, weight;
  }
  
  function setup() {
  createCanvas(1600,400);
  speed= random(223, 321);
  thickness=random(22,83)
  weight = (30,52);
    bullet = createSprite(50, 250, 20);
    bullet.velocityX = speed;
     wall = createSprite(1200, 250, thickness, height / 8);
     wall.shapeColor = (80, 80, 80);
     
   }
  
    function draw() {
    background(0,0,0);  
    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;}
      var damage= 0.5 * weight * speed * speed/(thickness *thickness *thickness);
      if(damage>10){
        wall.shapeColor= color(255,0, 0);
      }
      if((damage<10)){
        wall.shapeColor=(0,255,0);
      }
  
    drawSprites();
    }

    function hasCollided(bullet,wall){
      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x;
      if(bulletRightEdge>=wallLeftEdge){
       return true
      }
       return false;
    }