var girl, girlImg, girl2, girlImg2;
var virus, virusimg,sanitizer,sanitizerimg;
var edges,virusgroup;
var count=0;
var gameState= "start"
var level2,level2img;
var back2,back2img
var girlimg;

function preload() {
 virusimg=loadImage("virusnew.gif")   

sanitizerimg=loadImage("sanitizerNew.gif")
deadvirusimg=loadImage("deadvirus.png")
level2img= loadImage("level2.png")
back2img=loadImage("images/garden.png")
girlimg=loadImage("maskgirl/girl1.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)


back2=createSprite(0,0,windowWidth,windowHeight)
back2.addImage(back2img)
back2.visible=false

virus = createSprite(100,100,50,50)
virus.addImage(virusimg)
virus.scale=0.5
virus.debug=true
virus.setCollider("rectangle",0,0,200,200)

sanitizer = createSprite(500,100,50,50)
sanitizer.addImage(sanitizerimg)
sanitizer.scale=0.25
sanitizer.debug=true
sanitizer.setCollider("rectangle",0,0,300,400)

deadvirus = createSprite(300,100,50,50)
deadvirus.addImage(deadvirusimg)
deadvirus.scale=0.25
deadvirus.debug=true
deadvirus.setCollider("rectangle",0,0,300,400)
deadvirus.visible=false
edges=createEdgeSprites()
virus.velocityX= Math.round(random(-5,7))
virus.velocityY= Math.round(random(-5,7))

level2= createSprite(100,100)
level2.addImage(level2img)
level2.visible=false

girlgroup=new Group()


virusgroup=new Group()

}

function draw(){
background(back2img)

sanitizer.x= mouseX
sanitizer.y=mouseY
spawnvirus()
if (sanitizer.isTouching(virusgroup)){
    count=count+1
    deadvirus.x=virus.x
    deadvirus.y=virus.y
    deadvirus.visible=true
    virus.visible=false
    virusgroup.destroyEach()
   
    console.log(count)
}
else{
    deadvirus.visible=false
    virus.visible=true
    
}

if(count>=5 ){

    //back2.visible=true
    level2.visible=true
    var gameState= "level2"
    deadvirus.visible=false
    sanitizer.visible=true
    virus.visible=false
    score.visible=false

}

if (gameState==="level2"){
    background(0)
    spawngirl()
}
drawSprites();
fill("black")
textSize(30)
text(" Score : "+count,windowWidth/2,100)

}

function spawnvirus(){

if(frameCount %50 ===0){
    virus = createSprite(100,100,50,50)
    virus.x=Math.round(random(100,windowWidth-100))
    virus.y=Math.round(random(100,windowHeight-100))
    virus.velocityX= Math.round(random(-5,7))
virus.velocityY= Math.round(random(-5,7))
    virus.addImage(virusimg)
    virus.scale=0.5

    virus.bounceOff(edges[0])
    virus.bounceOff(edges[1])
    virus.bounceOff(edges[2])
    virus.bounceOff(edges[3])
    
    virusgroup.add(virus)
    }
}



function spawngirl(){

    if(frameCount %50 ===0){
        girl = createSprite(100,100,50,50)
        girl.x=Math.round(random(100,windowWidth-100))
        girl.y=Math.round(random(100,windowHeight-100))
        girl.velocityX= Math.round(random(-5,7))
    girl.velocityY= Math.round(random(-5,7))
        girl.addImage(girlimg)
        girl.scale=0.5
    
        girl.bounceOff(edges[0])
        girl.bounceOff(edges[1])
        girl.bounceOff(edges[2])
        girl.bounceOff(edges[3])
        
       girlgroup.add(girl)
        }
    }