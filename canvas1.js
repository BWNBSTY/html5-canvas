var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

class Circle {
    constructor(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    draw() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2 * Math.PI,false);
        c.strokeStyle = "green";
        c.stroke();
        // c.fill();
    }
    update() {
        if((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0){
            this.dx = -this.dx;
        }
        if((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for(let i=0 ; i<=100 ; i++){
    let radius = 40;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i=0 ; i <= circleArray.length ; i++){
        circleArray[i].update();
    }
}

animate();