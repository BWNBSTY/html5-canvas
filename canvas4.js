var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");


let mouse = {
    x: 30,
    y: 30
}


window.addEventListener("mousemove", (e)=> {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}

class Circle {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
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
        this.draw();
    }
}

let circle1;
let circle2;
function init() {
    circle1 = new Circle(canvas.width / 2, canvas.height / 2, 100, "black");
    circle2 = new Circle(undefined, undefined, 30, "red");
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0,0,canvas.width,canvas.height);

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius){
        circle1.color = "red";
    }else {
        circle1.color = "black";
    }

}

init();
animate();