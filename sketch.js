//Create variables here


var dog,happyDog;
//var food;
var database;
var foodS;
var dogImage;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(900,900);
dog=createSprite(250,250,1,1);

 foodS=database.ref('Food');
foodS.on("value",readStock);

dog.addImage(dogImage);
  dog.scale=0.3;

  foodObj=new Food();

  
   feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

   addFood=createButton("Add Food");
  addFood.position(800,95);
  
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);
  
  //add styles here
  //image (dogImage);
  
foodObj.display();

if(foodS!==undefined){


  fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("last feed : "+lastFed+" pm",350,30);
}else if(lastFed===0){
  text("last feed : 12 am",350,30);
}else{
  text("last feed : "+lastFed+" am",350,30);
}}
  drawSprites();
textSize(20);
fill ("black");
//text("NOTE: press UP_ARROW key to feed the dog",50,50);
text("food remaining:  "+foodS,150,100);

}

function readStock(data){
  foodS=data.val();

  
}



function writeStock(x){

if(x<=0){
  x=0;
}else{x=x-1;}

  database.ref('/').update({
      Food:x
      
  })


}

function feedDog(){
  if(foodS>=1){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodS-1);
  
  database.ref('/').update({
  Food: foodS-1,
  FeedTime:hour() 
  })
}
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}




