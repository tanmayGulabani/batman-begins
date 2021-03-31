const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops= 100;
var umbrella;
var rand;
var night;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame = 0;

function preload(){
night = loadImage("");
thunder1 = loadImage("");
thunder2 = loadImage("");
thunder3 = loadImage("");
thunder4 = loadImage("");

    
}

function setup(){
   canvas = createCanvas(500,700);

   engine=Engine.craete();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
       drops.push(new createDrops(random(0,500), random(0,500)));
   }
    
}

function draw(){
    Engine.update(engine);
    background(night);


    rand=Math.round(random(1,4));
    if(frameCount%8- ===0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break;
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }

    if(thunderCreateframe+10 === frameCoumt && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i= maxDrops, i++){
        drops[i].display();
        drops[i].update();
    }
drawsprites();

}   

