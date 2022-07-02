function drawlv1(){
    drawStatic();
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    ctx.fillStyle = "cyan";
    ctx.fillRect(cnv.width/2-25,100,50,50);
    ctx.fillStyle = "magenta";
    ctx.fillRect(cnv.width/2-25,cnv.height-150,50,50);
    drawPlayer();
    collisionlv1();
}
function drawPlayer(){
    ctx.fillStyle = "orange";
    ctx.fillRect(player.x,player.y,50,100);
    if (player.up && player.y>0 && collideU){
        player.y-=5;
    } if (player.down && player.y+100<cnv.height && collideD){
        player.y +=5;
    } if (player.left && player.x>0 && collideL){
        player.x-=5;
    } if (player.right && player.x+50<cnv.width && collideR ){
        player.x+=5;
    }
}
function keyDownHandler(event){
    if (event.code === "KeyW"){
        player.up = true;
    } if (event.code === "KeyS"){
        player.down = true;
    } if (event.code === "KeyA"){
        player.left = true;
    } if (event.code === "KeyD"){
        player.right = true;
    } if (event.code === "KeyE"){
        interactE();
    }
}
function keyUpHandler(event){
    if (event.code === "KeyW"){
        player.up = false;
    } if (event.code === "KeyS"){
        player.down = false;
    } if (event.code === "KeyA"){
        player.left = false;
    } if (event.code === "KeyD"){
        player.right = false;
    }
}
function collisionlv1(){
    if(player.y<cnv.height/2-50 && player.x > cnv.width-105 ||
     player.y+100>cnv.height/2+50 && player.x >cnv.width-105){
        collideR = false;
    } else {collideR = true;}
    if (player.x<=50){
        collideL = false;
    }else {
        collideL = true;
    }
    if (player.x>cnv.width-100){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    }else{
        collideU = true;
        collideD = true;
    }
    if (player.y+100>=cnv.height-50){
        collideD = false;
    }
    if (player.y<=50){
        collideU = false;
    }
    if (player.x===cnv.width-50){
        levelval = 2;
        player.x=50;
    }
}
function drawStatic(){
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,cnv.width,cnv.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cnv.width,50);
    ctx.fillRect(0,0,50,cnv.height);
    ctx.fillRect(cnv.width-50,0,50,cnv.height);
    ctx.fillRect(0,cnv.height-50,cnv.width,50);
    
}
function drawlv2(){
    drawStatic();
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    ctx.fillRect(0,cnv.height/2-50,50,100);
    drawPlayer();
    collisionlv2();
}
function collisionlv2(){
    if(player.y<cnv.height/2-50 && player.x > cnv.width-105 || player.y+100>cnv.height/2+50 && player.x >cnv.width-105){
        collideR = false;
    } else {collideR = true;}
    if (player.y<cnv.height/2-50 && player.x < 55 || player.y+100>cnv.height/2+50 && player.x <55){
        collideL = false;
    }else {
        collideL = true;
    }
    if (player.x>cnv.width-100 || player.x<50){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    }else{
        collideU = true;    
        collideD = true;
    }
    if (player.y+100>=cnv.height-50){
        collideD = false;
    }
    if (player.y<=50){
        collideU = false;
    }
    if (player.x === 0){
        levelval = 1;
        player.x = cnv.width-100;
    } else if (player.x ===cnv.width-50){
        levelval = 3;
        player.x = 50;
    }
}
function drawlv3(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(50,0,cnv.width-100,50);
    //ctx.fillRect(cnv.width-50,0,50,cnv.height-50);
    ctx.fillStyle = "green";
    ctx.fillRect(0,cnv.height/2-50,50,100);
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    drawPlayer();
    collisionlv3();
}
function collisionlv3(){
    if(player.y<cnv.height/2-50 && player.x > cnv.width-105 || player.y+100>cnv.height/2+50 && player.x >cnv.width-105){
        collideR = false;
    } else {collideR = true;}
    if (player.y<cnv.height/2-50 && player.x < 55 || player.y+100>cnv.height/2+50 && player.x <55){
        collideL = false;
    }else {
        collideL = true;
    }
    if (player.x<50 || player.x>cnv.width-100){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    }else{
        collideU = true;    
        collideD = true;
    }
    if (player.y+100>=cnv.height-50){
        collideD = false;
    } 
    if (player.y ===0){
        levelval = 7;
        player.y = cnv.height-150;
    }
    if(player.x+50===cnv.width){
        levelval = 4;
        player.x = 50;
    }
    if (player.x === 0){
        levelval = 2;
        player.x = cnv.width-100;
    }
}
function drawlv7(){
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,cnv.width,cnv.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,50,50);
    ctx.fillRect(cnv.width-50,0,50,50);
    ctx.fillRect(0,cnv.height-50,50,50);
    ctx.fillRect(cnv.width-50,cnv.height-50,50,50);
    ctx.fillRect(cnv.width/2-75,cnv.height/2-75,150,150);
    drawPlayer();
    collisionlv7();
}
function collisionlv7(){
    if (player.y===50 && player.x<50 || player.y ===50 && player.x+50>cnv.width-50 
        || player.x+50>cnv.width/2-75 && player.x<cnv.width/2+100&&player.y===cnv.height/2+75){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.y+100===cnv.height-50 && player.x<50 || player.y+100===cnv.height-50 && player.x+50>cnv.width-50||
        player.x+50>=cnv.width/2-75&&player.x<=cnv.width/2+75 && player.y+100===cnv.width/2-75){
        collideD = false;
    } else {
        collideD = true;
    }
    if (player.y<50 && player.x===50 || player.y+100 >cnv.width-50 && player.x===50||
        player.x===cnv.width/2+75&&player.y+100>=cnv.height/2-75&&player.y<=cnv.height/2+75){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.y<50 && player.x===cnv.width-100 || player.y+100 >cnv.width-50 && player.x===cnv.width-100||
        player.x+50===cnv.width/2-75&&player.y+100>=cnv.height/2-75&&player.y<=cnv.height/2+75){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.y +100=== cnv.height){
        levelval = 3;
        player.y = 50;
    }
    if (player.y === 0){
        levelval = 11;
        player.y = cnv.height-150;
    }
    if (player.x +50=== cnv.width){
        levelval = 8;
        player.x = 50;
    }
    if (player.x === 0){
        levelval = 6;
        player.x = cnv.width-50;
    }
}
function drawlv4(){
    drawStatic();
    ctx.fillStyle = "green";
    ctx.fillRect(0,cnv.height/2-50,50,100);
    ctx.fillRect(cnv.height/2-50,0,100,50);
    drawPlayer();
    collisionlv4();
}
function collisionlv4(){
    
    if (player.y<cnv.height/2-50 && player.x <= 50 || player.y+100>cnv.height/2+50 && player.x <=50){
        collideL = false;
    }else {
        collideL = true;
    }
    if (player.x<cnv.height/2-50 && player.y <= 50 || player.x+50>cnv.height/2+50 && player.y <=50){
        collideU = false;
    }else {
        collideU = true;
    }
    if (player.x<50 ){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    }else{
           
        collideD = true;
    }
    if (player.y<50 &&player.x === cnv.width/2-50){
        collideL = false;
        //player.y = cnv.height/2-50;
    }else if(player.y<50 &&player.x+50 === cnv.width/2+50){
        collideR = false;
    }else{
        
        collideR = true;
    }
    if (player.y+100>=cnv.height-50){
        collideD = false;
    } 
    if (player.x+50>=cnv.width-50){
        collideR = false;
    } 
    if (player.x ===0){
        levelval = 3;
        player.x = cnv.width-100;
    }
    if (player.y===0){
        levelval = 8;
        player.y = cnv.height-150
    }
}
function drawlv8(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(0,50,50,cnv.height-100);
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width/2-50,cnv.height-50,100,50);
    ctx.fillRect(cnv.width/2-50,0,100,50);
    drawPlayer();
    collisionlv8();
}
function collisionlv8(){
    if (player.x+50===cnv.width-50 || player.x+50 >=cnv.width/2+50&&player.y<50 ){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x <=cnv.width/2-50&&player.y+100===cnv.height-50|| player.x+50>=cnv.width/2+50&&player.y+100===cnv.height-50){
        collideD = false;
    } else {
        collideD = true;
    }
    if (player.x <=cnv.width/2-50&&player.y===50|| player.x+50>=cnv.width/2+50&&player.y===50){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.x <=cnv.width/2-50&&player.y+100>cnv.height-50 ||player.x <=cnv.width/2-50&&player.y<50  ){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x+50>=cnv.width/2+50&&player.y+100>cnv.height-50){
        collideR = false;
    }
    if (player.x === 0){
        levelval = 7;
        player.x = cnv.width-100;
    }
    if (player.y+100===cnv.height){
        levelval = 4;
        player.y = 50;
    }
    if (player.y ===0){
        levelval = 12;
        player.y = cnv.height-150
    }
}
function drawlv11(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(50,0,cnv.width-100,50);
    ctx.fillRect(50,cnv.height-50,cnv.width-100,50);  
    ctx.fillStyle = "green";
    ctx.fillRect(0,cnv.height/2-50,50,100);
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    drawPlayer();
    collisionlv11();
}
function collisionlv11(){
    if (player.y+100>cnv.height/2+50&&player.x+50===cnv.width-50 ||
    player.y<cnv.height/2-50&&player.x+50===cnv.width-50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.y+100>cnv.height/2+50&&player.x===50 ||
    player.y<cnv.height/2-50&&player.x===50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x+50>cnv.width-50||
        player.x<50){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    }else{
        collideU = true;
        collideD = true;
    }
    if (player.y+100 === cnv.height){
        levelval = 7;
        player.y = 50;
    }
    if (player.x+50 ===cnv.width){
        levelval = 12;
        player.x = 50;
    }
    if (player.x === 0){
        levelval = 10;
        player.x = cnv.width-100;
    }
    if (player.y === 0){
        levelval = 15;
        player.y = cnv.height-150;
    }
}
function drawlv6(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(0,50,50,cnv.height-100);
    ctx.fillRect(cnv.width-50,50,50,cnv.height-100);
    drawPlayer();
    collisionlv6();
}
function collisionlv6(){
    if (player.y === 50){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.y+100 ===cnv.height-50){
        collideD = false;
    } else{
        collideD = true;
    }
    if (player.x === 0){
        levelval = 5;
        player.x = cnv.width-100;
    }
    if (player.x+50 === cnv.width){
        levelval = 7;
        player.x = 50;
    }
}
function drawlv5(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(cnv.width-50,50,50,cnv.height-100);
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width/2-50,0,100,50);
    drawPlayer();
    collisionlv5();
}
function collisionlv5(){
    if (player.x<=cnv.width/2-50&&player.y===50 || player.x+50>=cnv.width/2+50&&player.y===50){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.y+100===cnv.height-50){
        collideD = false;
    } else {
        collideD = true;
    }
    if (player.x === 50 || player.x===cnv.width/2-50&&player.y<50){
        collideL = false;
    } else{
        collideL = true;
    }
    if (player.y<50&&player.x+50 === cnv.width/2+50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x+50 === cnv.width){
        levelval = 6;
        player.x = 50;
    }
    if (player.y === 0){
        levelval = 9;
        player.y = cnv.height-150;
    }
}
function drawlv9(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(cnv.width-50,50,50,cnv.height-100);
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width/2-50,cnv.height-50,100,50);
    drawPlayer();
    collisionlv9();
}
function collisionlv9(){
    if (player.y+100===cnv.height-50 && player.x<=cnv.width/2-50 || 
    player.y+100===cnv.height-50 && player.x+50>=cnv.width/2+50){
        collideD = false;
    } else {
        collideD = true;
    }
    if(player.y===50){
        collideU = false;
    } else{
        collideU = true;
    }
    if (player.x === 50 || player.x === cnv.width/2-50 && player.y+100>cnv.height-50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x+50 === cnv.width/2+50 && player.y+100>cnv.height-50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.y+100===cnv.height){
        levelval = 5;
        player.y = 50;
    }
    if (player.x+50 === cnv.width){
        levelval = 10;
        player.x = 50;
    }
}
function drawlv10(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(0,50,50,cnv.height-100);
    ctx.fillStyle = "green";
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    drawPlayer();
    collisionlv10();
}
function collisionlv10(){
    if (player.x+50>cnv.width-50){
        collideD = false;
        collideU = false;
        player.y = cnv.height/2-50;
    } else {
        collideD = true;
        collideU = true;
    }
    if (player.y ===50){
        collideU = false; 
    }
    if (player.y+100===cnv.height-50){
        collideD = false;
    }
    if (player.y>cnv.height/2-50&&player.x+50===cnv.width-50|| player.x+50===cnv.width-50&&player.y+100<cnv.height/2+50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x === 0){
        levelval = 9;
        player.x = cnv.width-100;
    }
    if (player.x+50 === cnv.width){
        levelval = 11;
        player.x = 50;
    }
}
function drawlv12(){
    drawStatic();
    ctx.fillStyle = "green";
    ctx.fillRect(0,cnv.height/2-50,50,100);
    ctx.fillRect(cnv.width/2-50,cnv.height-50,100,50);
    drawPlayer();
    collisionlv12();
}
function collisionlv12(){
    if (player.x<50){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    } else {
        collideU = true;
        collideD = true;
    }
    if (player.y===50){
        collideU = false;
    } 
    if (player.y+100===cnv.height-50&&player.x+50>cnv.width/2+50
    ||player.y+100===cnv.height-50&&player.x<cnv.width/2-50){
        collideD = false;
    }
    if (player.x+50===cnv.width-50|| player.x+50===cnv.width/2+50&&player.y+100>cnv.height-50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x === 50&&player.y>cnv.height/2-50||
    player.x ===50&&player.y+100<cnv.height/2+50 ||
    player.y +100>cnv.height-50&&player.x===cnv.width/2-50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x === 0){
        levelval = 11;
        player.x = cnv.width-100;
    }
    if (player.y+100===cnv.height){
        levelval = 8;
        player.y = 50;
    }
}
function drawlv15(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(50,cnv.height-50,cnv.width-100,50);
    ctx.fillRect(0,50,50,cnv.height-100);
    ctx.fillStyle = "red";
    ctx.fillRect(cnv.width-50,cnv.height/2-50,50,100);
    drawPlayer();
    drawSnow();
    collisionlv15();
}
function collisionlv15(){
    if (player.x+50>cnv.width-50){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    } else {
        collideU = true;
        collideD = true;
    } 
    if (player.y === 50){
        collideU = false;
    }
    if (player.x<50&&player.y+100===cnv.height-50){
        collideD = false;
    }
    if (player.x+50===cnv.width-50&&player.y<cnv.height/2-50||
    player.x+50===cnv.width-50&&player.y+100>cnv.height/2+50){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x ===50 && player.y+100>cnv.height-50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.y+100 ===cnv.height){
        levelval = 11;
        player.y = 50;
        resetSnow();
    }
    if (player.x === 0){
        levelval = 14;
        player.x = cnv.width-100;
        resetSnow();
    }
    if (player.x+50 === cnv.width){
        levelval = 16;
        player.x = 50;
        resetSnow();
    }
}
function drawSnow(){
    ctx.fillStyle = "white"
    for (i=0;i<snowArray.length;i++){
        ctx.fillRect(snowArray[i].x-snowArray[i].r,snowArray[i].y-snowArray[i].r/2,snowArray[i].r,snowArray[i].r);
        snowArray[i].y += snowArray[i].s;
        if (snowArray[i].y>cnv.height){
            snowArray[i].x = Math.random()*cnv.width;
            snowArray[i].y = 0;
            snowArray[i].r = Math.random()*10;
            snowArray[i].s = Math.random()*10;
        }
    }

}
function drawlv14(){
    drawStatic();
    ctx.fillStyle = "grey";
    ctx.fillRect(cnv.width-50,50,50,cnv.height-100);
    ctx.fillStyle = "blue";
    ctx.fillRect(0,cnv.height-200,50,150);
    drawEnemy();
    drawPlayer();
    drawSnow();
    collisionlv14();
}
function collisionlv14(){
    if (player.y === 50 || player.y===cnv.height-200&&player.x<50){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.y+100 ===cnv.height-50){
        collideD = false;
    } else {
        collideD = true;
    }
    if (player.x ===50&&player.y<cnv.height-200){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x +50===cnv.width){
        levelval = 15;
        player.x = 50;
    }
    if (player.x === 0){
        levelval = 13;
        player.x = cnv.width-100;
        resetSnow();
    }
}
function resetSnow(){
    for (i=0;i<snowArray.length;i++){
            snowArray[i].x = Math.random()*cnv.width;
            snowArray[i].y = Math.random()*cnv.height;
            snowArray[i].r = Math.random()*9+1;
            snowArray[i].s = Math.random()*9+1;
    }
}
function drawlv13(){
    drawStatic();
    ctx.fillStyle = "blue";
    ctx.fillRect(cnv.width-50,cnv.height-200,50,150);
    drawPlayer();
    drawSnow();
    collisionlv13();
}
function collisionlv13(){
    if (player.y === 50|| player.x+50>cnv.width-50&&player.y ===cnv.height-200){
        collideU = false;
    } else {
        collideU = true;
    }
    if (player.y+100===cnv.height-50){
        collideD = false;
    } else {
        collideD = true;
    }
    if (player.x+50 ===cnv.width-50&&player.y<cnv.height-200){
        collideR = false;
    } else {
        collideR = true;
    }
    if (player.x === 50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x+50 === cnv.width){
        levelval = 14;
        player.x = 50;
        resetSnow();
    }
}
function drawlv16(){
    drawStatic();
    ctx.fillStyle = "green";
    ctx.fillRect(0,cnv.height/2-50,50,100);
    drawPlayer();
    drawSnow();
    collisionlv16();
}
function collisionlv16(){
    if (player.x+50 ===cnv.width-50){
        collideR = false;
    }else {
        collideR = true;
    }
    if (player.x<50){
        collideU = false;
        collideD = false;
        player.y = cnv.height/2-50;
    } else {
        collideU = true;
        collideD = true;
    }
    if (player.y === 50){
        collideU = false;
    }
    if (player.y+100 === cnv.height-50){
        collideD = false;
    }
    if (player.x === 50 && player.y<cnv.height/2-50||player.x === 50 && player.y+100>cnv.height/2+50){
        collideL = false;
    } else {
        collideL = true;
    }
    if (player.x === 0){
        levelval = 15;
        player.x = cnv.width-100;
        resetSnow();
    }
}
function drawEnemy(){
    for (i=0;i<5;i++){
        ctx.fillStyle = "white";
        ctx.fillRect(enemyArray[i].x,enemyArray[i].y,50,50);
        ctx.fillStyle = "red";
        ctx.fillRect(enemyArray[i].x-5,enemyArray[i].y-10,60,10);
        ctx.fillStyle = "green";
        ctx.fillRect(enemyArray[i].x-5,enemyArray[i].y-10,60*(enemyArray[i].h/100),10);
    }
}
function interactE(){
    if (levelval === 1){
        
    }
}
function draw(i){
    return "drawlv" +i;
}