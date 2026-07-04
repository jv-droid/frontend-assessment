function executeCommand(robot, command) {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

    switch (command) {
        case "LEFT": {
            const currentIndex = directions.indexOf(robot.direction);

            const nextIndex =
                (currentIndex + directions.length - 1) % directions.length;

            return {
                ...robot,
                direction: directions[nextIndex],
            };
        }

        case "RIGHT": {
            const currentIndex = directions.indexOf(robot.direction);

            const nextIndex =
                (currentIndex + 1) % directions.length;

            return {
                ...robot,
                direction: directions[nextIndex],
            };
        }

        case "MOVE": {
            let { x, y, direction } = robot;

            switch (direction) {
                case "NORTH":
                    y += 1;
                    break;

                case "SOUTH":
                    y -= 1;
                    break;

                case "EAST":
                    x += 1;
                    break;

                case "WEST":
                    x -= 1;
                    break;
            }

            // Ignore movement if it would fall off the table
            if (
                x < 0 ||
                x > 4 ||
                y < 0 ||
                y > 4
            ) {
                return robot;
            }

            return {
                ...robot,
                x,
                y,
            };
        }

        case "REPORT":
            console.log(`${robot.x},${robot.y},${robot.direction}`);
            return robot;

        default:
            return robot;
    }
}


export default executeCommand;