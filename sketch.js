var dog,happyDog;
var database;
var foodS,foodStock;
var dogImg,dogHapImg;



function preload()
{
  dogImg = loadAnimation("Images/Dog.png","Images/dogImg.png","Images/dogImg1.png");
  dogHapImg = loadImage("Images/happydog.png");
}

function setup() 
{
  createCanvas(500, 500);
  database =firebase.database();
  
  dog = createSprite(200,300,20,20);
  dog.addAnimation("pet", dogImg);
  dog.scale = "0.1";

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() 
{  

  background(46,139,87);

  if(keyWentDown(UP_ARROW))
  {
      writeStock(foodS);
      dog.changeImage("happy",dogHapImg);
  }

  drawSprites();


  textSize(15);
  fill("purple");
  stroke(4);
  text("Note: PRESS THE UP ARROW KEY TO FEED THE DRAGO MILK",30,100);

}

function readStock(data)
{
    foodS = data.val()
}

function writeStock(x)
{
  database.ref('/').update({
    Food: x
    
  })
}



