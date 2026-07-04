function validateInput(input) {
  if (!input.trim()) {
    return false;
  }

  const parts = input.trim().split(" ");

  if (parts.length !== 2) {
    return false;
  }

  const [coordinates, direction] = parts;

  const xy = coordinates.split(",");

  if (xy.length !== 2) {
    return false;
  }

const [x, y] = xy;
const validDirections = [
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
];
if (
    x.trim() === "" ||
    y.trim() === "" ||
    isNaN(Number(x)) ||
    isNaN(Number(y))
) {
    return false;
}
const xCoordinate = Number(x);
const yCoordinate = Number(y);

if (
  xCoordinate < 0 ||
  xCoordinate > 4 ||
  yCoordinate < 0 ||
  yCoordinate > 4
) {
  return false;
}

if (!validDirections.includes(direction)) {
  return false;
}

  return true;
}

export default validateInput;