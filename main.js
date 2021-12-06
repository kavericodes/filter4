hatx = 0;
haty = 0;

function preload(){
    hat = loadImage("https://i.postimg.cc/tgzL2Jr2/unnamed-removebg-preview-1.png")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        hatx = results[0].pose.nose.x-50;
        haty = results[0].pose.nose.y-190;
        console.log("hat x = " + hatx);
        console.log("hat y = "+ haty);
    }
}

function modelLoaded(){
    console.log("PoseNet is Loaded!")
}

function draw(){
    image(video,0,0,450,450);
    image(hat,hatx,haty,160,145)
}

function takeSnapshot(){
    save("hatfilter.jpg")
}