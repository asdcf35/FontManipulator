let canvas;
let capture;
let noseX, noseY;
let difference:number;
let name = "Pranav";
let LeftWrist, RightWrist;
function setup(){
  canvas = createCanvas(550,550);
  capture = createCapture(VIDEO);
  capture.size(550,550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(capture, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
  background('#969A97');
  stroke('F90093');
  text(name, noseX, noseY);
  textSize(difference);
}

function modelLoaded(){
  console.log('PoseNet Is initialized!');
}

function gotPoses(results) {
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(`noseX = ${noseX} noseY = ${noseY}`);

    LeftWrist = results[0].pose.leftWrist.x;
    RightWrist = results[0].pose.rightWrist.x;
    difference = floor(LeftWrist - RightWrist);
    console.log(`LeftWrist = ${LeftWrist} RightWrist = ${RightWrist} Difference = ${difference}`);
  }
}
