heat_waves = '';
memories = '';
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
heat_waves = loadSound("HeatWaves.mp3");
memories = loadSound("Memories.mp3");   
}
function setup(){
 canvas = createCanvas(500, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();

poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;  
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + " and LeftWristY = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;  
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + " and RightWristY = " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
}