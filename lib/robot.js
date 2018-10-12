class Robot {
	constructor (coordinates, bearing) {
		this.coordinates = [0,0],
		this.bearing = 'north'
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y];
	}

	setBearing(direction) {
		if (direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west') {
			this.bearing = direction
		} else {
			throw '/Invalid Robot Bearing/'
		}
	}

	place(obj) {
		this.setCoordinates(obj.x, obj.y)
		this.setBearing(obj.direction)
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
				this.setCoordinates(this.coordinates[0], ++this.coordinates[1]);
			break;
		
			case 'east':
				this.setCoordinates(++this.coordinates[0], this.coordinates[1]);
			break;
		
			case 'south':
				this.setCoordinates(this.coordinates[0], --this.coordinates[1]);
			break;
		
			case 'west':
			this.setCoordinates(--this.coordinates[0], this.coordinates[1]);
			break;
		}
	}

	translateInstructions(instruction) {
		switch (instruction) {
			case 'L':
				this.turnLeft();
			break;
		
			case 'R':
				this.turnRight();
			break;
		
			case 'A':
				this.advance();
			break;
		
			default :
				instruction.split('');
				for (const element of instruction) {
					this.translateInstructions(element)
				}
			break;
		}
	}
}
