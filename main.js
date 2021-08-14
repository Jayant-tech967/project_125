
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(580,88);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    background('#3297a8'); 
    document.getElementById("font_size").innerHTML="Font size of the text will be- " + difference +"px";
    fill("#3297a83");
    textSize(difference);
    text(2021,50,100);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftwrist.x;
        rightwristX=results[0].pose.rightwrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX)+"difference="+difference;
        
    }
}
