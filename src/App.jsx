import { useState, useEffect } from "react";
import "./App.css";
import GridBoard from "./components/GridBoard";
import parseInput from "./helpers/parseInput";
import validateInput from "./helpers/validateInput";
import {
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import executeCommand from "./helpers/executeCommand";

function App() {

  const [robot, setRobot] = useState({
    x: 2,
    y: 2,
    direction: "WEST",
  });

  const [command, setCommand] = useState("");

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  useEffect(() => {
    console.log(`${robot.x},${robot.y},${robot.direction}`);
  }, [robot]);

  const handlePlace = () => {
    const input = command.trim().toUpperCase();

    if (
      input === "MOVE" ||
      input === "LEFT" ||
      input === "RIGHT" ||
      input === "REPORT"
    ) {
      const updatedRobot = executeCommand(robot, input);

      // Detect ignored MOVE
      if (
        input === "MOVE" &&
        updatedRobot.x === robot.x &&
        updatedRobot.y === robot.y &&
        updatedRobot.direction === robot.direction
      ) {
        setNotification({
          open: true,
          message: "Move ignored. Robot is at the edge of the board.",
          severity: "warning",
        });
      }
      setRobot(updatedRobot);
      setCommand("");

      return;
    }

    if (!validateInput(command)) {
      alert("Invalid command");
      return;
    }

    const parsed = parseInput(command);

    setRobot(parsed);
    setCommand("");
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <TextField
          label="Robot Command"
          placeholder="2,3 NORTH"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          size="small"
        />

        <Button
          variant="contained"
          onClick={handlePlace}
        >
          PLACE
        </Button>
      </Stack>
      <GridBoard robot={robot} />
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>

  )
}

export default App
