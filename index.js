var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var x2 = 30;
var x3 = 100;
var y = canvas.height-30;
var y2 = 30;
var y3 = canvas.height/2;
var dx = 5;
var dx2 = 5;
var dx3 = -5;
var dy = -5;
var dy2 = 5;
var dy3 = -5;
var ballRadius = 15;
var paddleHeight = 50;
var paddleWidth = 50;
var paddleX = (canvas.width-paddleWidth) / 2;
var paddleY = (canvas.height-paddleHeight) / 2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var gameOver = false;
var score = 0;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBall2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI*2);
    ctx.fillstyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}
function drawBall3() {
    ctx.beginPath();
    ctx.arc(x3, y3, ballRadius, 0, Math.PI*2);
    ctx.fillstyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: "+score, 8, 20);
}

function scoreIncrease() {
    if(interval) {
        score++
    }
}

function gameOverDetection() {
    if(x > paddleX && x < paddleX+paddleWidth && y > paddleY && y < paddleY+paddleHeight){
        gameOver = true;
    }
    if(x2 > paddleX && x2 < paddleX+paddleWidth && y2 > paddleY && y2 < paddleY+paddleHeight)     {gameOver = true;}
    
    if(x3 > paddleX && x3 < paddleX+paddleWidth && y3 > paddleY && y3 < paddleY+paddleHeight)     {gameOver = true;}
    
}



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBall2();
    drawBall3();
    drawPaddle();
    gameOverDetection();
    drawScore();
    scoreIncrease();
    
     x += dx;
    y += dy;
    x2 += dx2;
    y2 += dy2;
    x3 += dx3;
    y3 += dy3;
    
if(gameOver) {
  alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); 
}

    
if(x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
}
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}
// ball #2
if(x2 + dx2 > canvas.width || x2 + dx2 < 0) {
    dx2 = -dx2;
}
if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
    dx2 = -dx2;
}
if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
    dy2 = -dy2;
}
// ball #3
if(x3 + dx3 > canvas.width || x3 + dx3 < 0) {
    dx3 = -dx3;
}

if(x3 + dx3 > canvas.width-ballRadius || x3 + dx3 < ballRadius) {
    dx3 = -dx3;
}
if(y3 + dy3 > canvas.height-ballRadius || y3 + dy3 < ballRadius) {
    dy3 = - dy3;
}

if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed) {
    paddleX -= 7;
    if (paddleX < 0){
        paddleX = 0;
    }
}
else if(upPressed) {
    paddleY += 7;
    if (paddleY + paddleHeight > canvas.height){
        paddleY = canvas.height - paddleHeight;
    }
}
else if (downPressed) {
    paddleY += -7;
    if (paddleY < 0){
        paddleY = 0;
    }
}
    
}



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        upPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
    downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        upPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
    downPressed = false;
    }
}

    


var interval = setInterval(draw, 10);