class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"];
    if (!directions.includes(bearing)) throw "/Invalid Robot Bearing/i";
    this.bearing = bearing;
  }

  place(robot) {
    this.setCoordinates(robot.x, robot.y);
    this.setBearing(robot.direction);
  }

  turnRight() {
    //const directions = ["north", "east", "south", "west"]
    if (this.bearing === "north") this.setBearing("east");
    else if (this.bearing === "east") this.setBearing("south");
    else if (this.bearing === "south") this.setBearing("west");
    else this.setBearing("north");
  }

  turnLeft() {
    //const directions = ["north", "east", "south", "west"]
    if (this.bearing === "north") this.setBearing("west");
    else if (this.bearing === "east") this.setBearing("north");
    else if (this.bearing === "south") this.setBearing("east");
    else this.setBearing("south");
  }

  advance() {
    if (this.bearing === "north")
      this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1);
    else if (this.bearing === "south")
      this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1);
    else if (this.bearing === "east")
      this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1]);
    else this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1]);
  }

  translateInstructions(input) {
    let arr = input.split("");
    console.log(arr);
    for (let letter of arr) {
      if (letter.toUpperCase() === "L") this.turnLeft();
      else if (letter.toUpperCase() === "R") this.turnRight();
      else if (letter.toUpperCase() === "A") this.advance();
    }
  }
}
