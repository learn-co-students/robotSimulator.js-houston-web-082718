class Robot {
	//your solution here
	constructor() {
		this.coordinates = [0,0]
		this.bearing = 'north'
	}

	setCoordinates(x,y) {
		this.coordinates = [x,y]
	}

	setBearing(direction) {
		const directions = ["north", "south", "east", "west"];
		if (!directions.includes(direction)) {
			throw new Error('Invalid Robot Bearing')
		} else {
			this.bearing = direction
		}
	}

	place({x,y,direction}) {
		this.setCoordinates(x, y);
		this.setBearing(direction);
	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
				this.bearing = 'east'
				break;
			case 'east':
				this.bearing = 'south'
				break;
			case 'south':
				this.bearing = 'west'
				break;
			case 'west':
				this.bearing = 'north'
				break;	
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case 'north':
				this.bearing = 'west'
				break;
			case 'east':
				this.bearing = 'north'
				break;
			case 'south':
				this.bearing = 'east'
				break;
			case 'west':
				this.bearing = 'south'
				break;
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.coordinates[1] += 1 
				break;
			case 'east':
				this.coordinates[0] += 1
				break;
			case 'south':
				this.coordinates[1] -= 1
				break;
			case 'west':
				this.coordinates[0] -= 1
				break;
		}
	}

	translateInstructions(instructions) {
		let instructionArray = instructions.split("");
		instructionArray.forEach(element => {
			switch (element) {
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
		})
	}
}
