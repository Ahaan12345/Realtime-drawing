noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600,450);

    canvas=createCanvas(600,450);
    canvas.position(650,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialised');
}

function gotPoses(results){
console.log(results);
}

function draw(){
    background('#ff0000');
}