noseX = 0;
noseY = 0;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}

function draw() {
	game()
}

function modelLoaded() 
{
	console.log("model is successfully loaded");
}
function gotResults(result) 
{
	if(result) {
		console.log(result);
		noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
	}
}





