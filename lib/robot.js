class Robot {
	constructor() {
		this.coordinates = [0, 0];
		this.validDirections = ["north", "east", "south", "west"];
		this.bearing = "north";
	}
	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(direction) {
		if (this.validDirections.includes(direction)) {
			this.bearing = direction;
		} else {
			throw new Error("Invalid Robot Bearing");
		}
	}

	place(obj) {
		this.setCoordinates(obj.x, obj.y);
		this.setBearing(obj.direction);
	}

	turnRight() {
		switch (this.bearing) {
			case "north":
				this.bearing = "east";
				break;
			case "east":
				this.bearing = "south";
				break;
			case "south":
				this.bearing = "west";
				break;
			case "west":
				this.bearing = "north";
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case "north":
				this.bearing = "west";
				break;
			case "east":
				this.bearing = "north";
				break;
			case "south":
				this.bearing = "east";
				break;
			case "west":
				this.bearing = "south";
				break;
		}
	}
	advance() {
		switch (this.bearing) {
			case "north":
				this.coordinates[1]++;
				break;
			case "east":
				this.coordinates[0]++;
				break;
			case "south":
				this.coordinates[1]--;
				break;
			case "west":
				this.coordinates[0]--;
				break;
		}
	}

	translateInstructions(instructions) {
		instructions.split("").forEach(
			function (str) {
				switch (str) {
					case "L":
						this.turnLeft();
						break;
					case "R":
						this.turnRight();
						break;
					case "A":
						this.advance();
						break;
				}
			}.bind(this)
		);
	}
}