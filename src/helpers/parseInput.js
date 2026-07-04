function parseInput(input) {

    // Remove extra whitespace
    const trimmedInput = input.trim();

    // Split into coordinates and direction
    const [coordinates, direction] = trimmedInput.split(" ");
    
    // Split coordinates into x and y
    const [x, y] = coordinates
    .split(",")
    .map(Number);

    // Return parsed object
    return {
        x,
        y,
        direction,
};
}

export default parseInput;