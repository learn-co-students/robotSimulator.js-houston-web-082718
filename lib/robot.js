class Robot {
	//your solution here
	constructor() {
		this.coordinates = [0, 0]
		this.bearing = 'north'
	}

	setCoordinates(x, y) {
		this.coordinates = [x,y]
	}
		
	setBearing(direction) { 
		let directions = ["north", "south", "east", "west"]
		let dir = directions.filter(dir => dir === direction)
		if (dir.length === 0) {
			throw new Error('/Invalid Robot Bearing/i')
		} else {
			this.bearing = direction
		}
	}

	place({x, y, direction}) {
		this.coordinates = [x,y]
		this.bearing = direction
	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
			this.bearing = 'east'
				break
			case 'south':
			this.bearing = 'west'
				break
			case 'west':
			this.bearing = 'north'
				break
			case 'east':
			this.bearing = 'south'
				break
			default:
				break;
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case 'north':
			this.bearing = 'west'
				break
			case 'south':
			this.bearing = 'east'
				break
			case 'west':
			this.bearing = 'south'
				break
			case 'east':
			this.bearing = 'north'
				break
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
			this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
				break
			case 'east':
			this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
				break
			case 'south':
			this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
				break
			case 'west':
			this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
				break
		}
	}

	translateInstructions(letterString) {
		let letterArr = letterString.split('')
		for (let letter of letterArr) {
			switch (letter) {
				case 'R':
					this.turnRight()
					break
				case 'L':
					this.turnLeft()
					break
				case 'A':
					this.advance()
					break
			}
		}

	}
}


