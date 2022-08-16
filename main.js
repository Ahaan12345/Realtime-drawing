noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

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
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = "+noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX = "+ leftWristX+"rightWristX ="+rightWristX+"difference ="+difference);
    }   
    
}

function draw(){
    background('#ff0000');
    document.getElementById("squareSide").innerHTML="Size of the square is "+difference+" px";
    fill('#FF6400');
    stroke('#000000');
    square(noseX,noseY,difference);
}