class Food{
constructor(){
this.foodStock;
this.lastFed;
this.image = loadImage("images/Milk.png");
//world. add(world,this.image);
}


getFoodStock(){}

updateFoodStock(){}

deductFood(){}

display(){

    var x=80,y=100;

    imageMode(CENTER);
        image(this.image, 720,720,70,70);

        if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                
                }
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
}
}