var status = " ";
var video_load = " "; 

var text = " "; 
var objects = [ ];

function preload(){
    video_load = createCapture("video.mp4");
    video_load.hide();
}

function draw(){
    image(video_load, 0, 0, 400, 400);

    if(status != " "){ 
        objectDetector.detect(video_load, gotResult);

        for(i == 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected"; 
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length; 

            fill("blue");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 25, objects[i].y + 25); 

            noFill();
            stroke("blue");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center(); 
} 

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    text = document.getElementById("text").value;
}

function modelLoaded(){
    console.log("Model loaded!"); 
    status_load = "true"; 
} 


function gotResult(error, results){ 
    if (error){ 
        console.log(error);} 
        
    console.log(results); 
    objects = results; 
}