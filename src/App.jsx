import { useState, useEffect, useRef } from "react";
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

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(`${robot.x},${robot.y},${robot.direction}`);
  }, [robot]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle both PLACE and robot commands from the input
  const handlePlace = () => {
    const input = command.trim().toUpperCase();

    if (!input) {
      return;
    }

    // Handle REPORT separately
    if (input === "REPORT") {
      executeCommand(robot, "REPORT"); // Still logs to the console

      setNotification({
        open: true,
        message: `Robot Position: ${robot.x}, ${robot.y}, ${robot.direction}`,
        severity: "info",
      });

      setCommand("");

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      return;
    }


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
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return;
    }

    // Ignore invalid placement commands
    if (!validateInput(input)) {
      setNotification({
        open: true,
        message: "Invalid command. Example: 2,3 NORTH or MOVE.",
        severity: "error",
      });
      // Keep the input ready for the next command
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      return;
    }

    const parsed = parseInput(input);

    setRobot(parsed);
    setCommand("");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };
  // Close the notification and return focus to the input
  const handleCloseNotification = () => {
    setNotification((prev) => ({
      ...prev,
      open: false,
    }));
    // Keep the input ready for the next command
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  return (
    <div className="app">
      <Stack spacing={3} alignItems="center">
        <GridBoard robot={robot} />

        <Stack className="controls" direction="row">
          <TextField inputRef={inputRef}
            // Allow Enter to execute the current command
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePlace();
              }
            }}
            label="Robot Command"
            placeholder="Example: 2,3 NORTH or MOVE"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            sx={{
              width: 320,

              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "#2A2D3A",
                color: "#fff",

                "& fieldset": {
                  borderColor: "#4B5563",
                },

                "&:hover fieldset": {
                  borderColor: "#60A5FA",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3B82F6",
                  borderWidth: 2,
                },
              },

              "& .MuiInputLabel-root": {
                color: "#BFC7D5",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#60A5FA",
              },

              "& input::placeholder": {
                color: "#9CA3AF",
                opacity: 1,
              },
            }}
          />

          <Button
            variant="contained"
            disableElevation
            onClick={handlePlace}
            sx={{
              minWidth: 140,
              borderRadius: 3,
              px: 4,
              py: 1.6,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",

              background:
                "linear-gradient(135deg,#3B82F6,#2563EB)",

              boxShadow:
                "0 10px 25px rgba(37,99,235,.35)",

              transition: "all .2s ease",

              "&:hover": {
                background:
                  "linear-gradient(135deg,#60A5FA,#2563EB)",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 14px 30px rgba(37,99,235,.45)",
              },
            }}
          >
            Place
          </Button>
        </Stack>

        <Snackbar
          open={notification.open}
          autoHideDuration={5000}
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
      </Stack>
    </div>
  );
}

export default App
