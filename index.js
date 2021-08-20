//Rendering canvas

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// fillRect(60, 60, 80, 40);
// strokeRect(x, y, width, height);
// clearRect(x, y, width, height);
// context.fillStyle = "green";
// context.fillRect(60, 60, 80, 40);

// context.beginPath();
// context.rect(650, 565, 130, 20);
// context.fillStyle = "#FF0000";
// context.fill();
// context.closePath();

let currentGame;
const testButton = document.querySelector("button");

testButton.addEventListener("click", startGame());

function startGame() {
	currentGame = new Game();
	currentGame.platform = new Platform();
	currentGame.platform.draw();
}

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	} else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}

document.addEventListener("keydown", (e) => {
	currentGame.platform.movePlatform(e.key);
});
