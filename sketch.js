
var ground,forest;
var player,p_still,p_walk;
var army,armyGroup; 
var boss;
var gameState="start";
var score=0;
var life=0;

function preload(){
  forest = loadImage("bg1.jpg");
  p_still=loadAnimation("images/player/still/01.png","images/player/still/02.png","images/player/still/03.png","images/player/still/04.png","images/player/still/05.png","images/player/still/06.png","images/player/still/07.png","images/player/still/08.png","images/player/still/09.png","images/player/still/10.png");
  p_walk=loadAnimation("images/player/walk/11.png","images/player/walk/12.png","images/player/walk/13.png","images/player/walk/14.png","images/player/walk/15.png","images/player/walk/16.png","images/player/walk/17.png","images/player/walk/18.png","images/player/walk/19.png","images/player/walk/20.png","images/player/walk/21.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-145);
 
  ground=createSprite(displayWidth, displayHeight/2-70,displayWidth , displayHeight);
  ground.addImage(forest);
  ground.scale = 3;

  player=createSprite(displayWidth/5, displayHeight-320,20,20);
  player.addAnimation("still",p_still)
  player.addAnimation("walk",p_walk)
  armyGroup = new Group();
    
  form=new Form()
  start=createButton("Play")
 
 
}

function draw() {
  background(147,168,101)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(gameState==="play"){
    
    form.hide()
    start.hide();

    if(keyDown("right")){
      player.changeAnimation("walk",p_walk)
      ground.velocityX=-4;
      spawnArmy();
      armyGroup.setVelocityXEach(-4);
      
    }
  
    for(var i=0;i<armyGroup.length;i++){
      if(armyGroup.get(i).x<=displayWidth/1.5){
        armyGroup.setVelocityXEach(0);
        ground.velocityX=0
      }
    }

    if(keyDown("space")){
      
    }


    
  }

  drawSprites();

  if(gameState==="start"){

    form.display()
    
    start.position(displayWidth/2 + 30, displayHeight/2+100);
    start.mousePressed(()=>{
      gameState="play";     
    })
    
  }

  textSize(20);
  fill("black");
  text("Score: "+score,displayWidth-200,50)
  text("Lives: "+life,50,50)
}

function spawnArmy(){
  army = createSprite(displayWidth+50, displayHeight-320, 20, 20);
  //army.addAnimation("still",p_still)
  armyGroup.add(army)
  
}

function spawnBoss(){
  army = createSprite(displayWidth+50, displayHeight-320, 20, 20);
  armyGroup.add(army)
  
}