function preload() {

}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet_var=ml5.poseNet(video,modelLoaded);
poseNet_var.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}
