leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded() {
    console.log("Posenet is detected!");
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}


function draw() {
    background('#A8E6CE');
    textSize(difference);
    fill("#99FFF");
    text('Scorpius', 50,400);
}