function setup(){
    c=createCanvas(420,380);
    c.position(485,200);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,0,40,390,300);
    noStroke();
    fill('#633e2e');
    rect(0,0,420,40,15,15,0,0);
    rect(0,340,420,40,0,0,15,15);
    rect(0,0,40,360,15,0,0,15);
    rect(380,0,40,360,0,15,15,0);
    fill('#945c44');
    circle(20,20,30);
    circle(400,20,30);
    circle(20,360,30);
    circle(400,360,30);
}
function snapshot(){
    save('myphoto.png')
}