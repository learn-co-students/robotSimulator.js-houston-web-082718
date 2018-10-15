class Robot {
  constructor(bearing, coordinates) {
    this.bearing = "north";
    this.coordinates = [0, 0];
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"];
    if (!directions.includes(direction)) throw "/Invalid Robot Bearing/i";
    this.bearing = direction;
  }

  //   place(robot) {
  //     this.setCoordinates(robot.x, robot.y);
  //     this.setBearing(robot.direction);
  //   }

  place({ x, y, direction }) {
    this.coordinates = [x, y];
    this.bearing = direction;
  }

  turnRight() {
    switch (this.bearing) {
      case "north":
        this.bearing = "east";
        break;
      case "south":
        this.bearing = "west";
        break;
      case "east":
        this.bearing = "south";
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
      case "south":
        this.bearing = "east";
        break;
      case "east":
        this.bearing = "north";
        break;
      case "west":
        this.bearing = "south";
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1] += 1;
        break;
      case "south":
        this.coordinates[1] -= 1;
        break;
      case "east":
        this.coordinates[0] += 1;
        break;
      case "west":
        this.coordinates[0] -= 1;
        break;
    }
  }

  translateInstructions(characters) {
    //   split the string of characters => array of characters
    let splitChar = characters.split("");
    // loop through the array of characters => character
    splitChar.forEach(
      function(char) {
        // match a character to one of the cases
        // if it matches run function
        switch (char) {
          case "L":
            debugger;
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
