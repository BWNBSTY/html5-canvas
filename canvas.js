// we are selecting canavs element
var canvas = document.querySelector("canvas");

// we are giving canvas height and width of window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// making variable c so that we can replace canvas.getContext everytime
var c = canvas.getContext("2d");

// creating rectangle/square
// values are in px
// fillRect(x,y,width,height)
//  we can add color using fillStyle
// we can add color as we add in css eg rgb,#,rgba etc
// jis rec/sq ko dena hain uske aageh likh doh
c.fillStyle = "blue"; 
c.fillRect(100,100,100,100);
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(160,30,50,100);
c.fillStyle = "#fac4a3"
c.fillRect(300,300,150,100);


// drawing lines
// first meh beginPath function call karneh seh naya seh start hoga
// moveTo(x,y) -- kaha seh start hoga
// lineTo(x,y) -- kaha tak line hoga 
// we can continue line by calling more lineTo(x,y) function
// strokeStyle color deneh ke liyeh line ko
// last meh stroke() function call karna hi hain
c.beginPath();
c.moveTo(50,300);
c.lineTo(400,300);
c.lineTo(500,50);
c.strokeStyle = "red";
c.stroke();


// drawing circle/arc
c.beginPath();
c.arc(300,200,40,0,2 * Math.PI,false);
c.strokeStyle = "green";
c.stroke();

c.beginPath();
c.arc(100, 75, 50, 0 * Math.PI, 1.5 * Math.PI);
c.stroke();

// multiple circle using for loop in random position
for(let i=0 ; i<=100 ; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,2 * Math.PI,false);
    c.strokeStyle = "red";
    c.stroke();
}