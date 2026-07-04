import GridBoard from "../components/GridBoard";

export default {
    title: "Components/GridBoard",
    component: GridBoard,

    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "A reusable 5×5 grid component that visualizes the robot position and orientation based on x, y coordinates and a cardinal direction.",
            },
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    background: "#1d1d26",
                    padding: "40px",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export const Input_2_2_NORTH = {
    name: "2,2 NORTH",
    args: {
        robot: {
            x: 2,
            y: 2,
            direction: "NORTH",
        },
    },
};

export const Input_2_2_EAST = {
    name: "2,2 EAST",
    args: {
        robot: {
            x: 2,
            y: 2,
            direction: "EAST",
        },
    },
};

export const Input_2_2_SOUTH = {
    name: "2,2 SOUTH",
    args: {
        robot: {
            x: 2,
            y: 2,
            direction: "SOUTH",
        },
    },
};

export const Input_2_2_WEST = {
    name: "2,2 WEST",
    args: {
        robot: {
            x: 2,
            y: 2,
            direction: "WEST",
        },
    },
};

export const Input_0_0_NORTH = {
    name: "0,0 NORTH",
    args: {
        robot: {
            x: 0,
            y: 0,
            direction: "NORTH",
        },
    },
};

export const Input_0_4_WEST = {
    name: "0,4 WEST",
    args: {
        robot: {
            x: 0,
            y: 4,
            direction: "WEST",
        },
    },
};

export const Input_4_0_EAST = {
    name: "4,0 EAST",
    args: {
        robot: {
            x: 4,
            y: 0,
            direction: "EAST",
        },
    },
};

export const Input_4_4_SOUTH = {
    name: "4,4 SOUTH",
    args: {
        robot: {
            x: 4,
            y: 4,
            direction: "SOUTH",
        },
    },
};

export const NoRobot = {
    name: "No Robot Placed",
    args: {
        robot: null,
    },

    parameters: {
        layout: "centered",
    },
};
