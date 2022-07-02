let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

player = {
    x: 100,
    y:cnv.height/2-50,
    up: false,
    down: false,
    left: false,
    right: false,
}
let maparray = [
    [13,14,15,16],
    [9,10,11,12],
    [5,6,7,8],
    [1,2,3,4]
]
let collideR = true,collideL = true, collideD = true,collideU = true,levelval = 1,
 snowArray =[], enemyArray = [], levelArray = [];
for(i=0;i<25;i++){
    snowArray.push({x:Math.random()*cnv.width,y:Math.random()*cnv.width,r:Math.random()*10,s:Math.random()*10});
}
for(i=0;i<5;i++){
    enemyArray.push({x:75*i+50,y:Math.random()*(cnv.width-150)+100,h:100,});
}
for (i=0;i<17;i++){
    levelArray.push("drawlv"+i);
}
requestAnimationFrame(loop);
function loop(){ 
    eval(levelArray[levelval])();
    requestAnimationFrame(loop);
}
document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);