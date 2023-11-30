var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

var colorArray = ["#970FF2","#0597F2","#49D907","#EAF205","#F24607"];

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

window.addEventListener("click",()=> {
    init();
})

function randomIntFromRange(min,max) {
    return Math.floor(Math.random()* (max- min+1)+min );
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


var gravity = 1;
var friction = 0.9;
//
class Ball {
    constructor(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2 * Math.PI,false);
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }
    update() {
        if(this.y + this.radius + this.dy > canvas.height){
            this.dy = -this.dy * friction;
        }else {
            this.dy += gravity;
        }
        if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var ballArray = [];
function init() {
    ballArray = [];
    for(var i = 0; i < 500 ; i++){
        var radius = randomIntFromRange(8,20);
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(0, canvas.height - radius);
        var dx = randomIntFromRange(-2,2);
        var dy = randomIntFromRange(-2,2);
        var color = randomColor(colorArray);
        ballArray.push(new Ball(x,y,dx,dy,radius,color));
    }
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 1; i < ballArray.length ; i++){
        ballArray[i].update();
    }

}

init();
animate();