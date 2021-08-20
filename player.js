context.beginPath();
context.rect(650, 565, 130, 20);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Platform {
	constructor(x, y, width, height) {
		this.x = 650;
		this.y = 565;
		this.width = width;
		this.height = height;
		this.speedX = 0;
		this.speedY = 0;
	}

	//insert draw function
	draw() {
		context.beginPath();
		context.rect(650, 565, 130, 20);
		context.fillStyle = "#FF0000";
		context.fill();
		context.closePath();
	}
	//making the platform move

	movePlatform(key) {
		context.clearRect(this.x, this.y, this.width, this.height);
		switch (key) {
			case "ArrowLeft":
				if (this.x > this.width) {
					this.x -= 20;
				}

				break;
			case "ArrowRight":
				if (this.x < canvas.clientWidth - this.width) {
					this.x += 20;
				}
				break;
		}
	}

	top() {
		return this.y;
	}

	bottom() {
		return this.y + this.height;
	}

	left() {
		return this.x;
	}

	right() {
		return this.x + this.width;
	}
}

const platform = new Platform();
