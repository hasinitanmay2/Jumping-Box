//var canvas;
var music;
var box;
var surface,surface2,surface3,surface4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    box.createSprite(random(20,750));
    box.shapeColor = "white";

    //create 4 different surfaces
    
    surface.createSprite(50,580,120,15);
    surface.shapeColor = "blue";

    surface2.createSprite(90,580,120,15);
    surface2.shapeColor = "orange";

    surface3.createSprite(130,580,120,15);
    surface3.shapeColor = "pink";

    surface4.createSprite(170,580,120,15);
    surface4.shapeColor = "green";


    //create box sprite and give velocity

    box.velocityX = 5;
    box.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();

if(surface.isTouching(box)&& box.bounceOff(surface)){
    box.shapeColor = "blue";
}

if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    box.shapeColor = "orange";
    box.velocityX = 0;
    box.velocityY = 0;
}

if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor = "pink";
}

if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    box.shapeColor = "green";
}
    
    

    //add condition to check if box touching surface and make it box

drawSprites();   
}
