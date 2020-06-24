var speed,weight;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 60, height/2);
  car=createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("orange");  
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
  if (car.isTouching(wall)){
    car.velocityX=0;
    if (deformation<100){
      car.shapeColor="green";
    }
    else if (deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    else if (deformation>180){
      car.shapeColor="red";
    }
  }
  textSize(50);
  text("GCSO",700,50);
  drawSprites();
}