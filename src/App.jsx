import { useState } from "react";
import "./App.css";
import GridBoard from "./components/GridBoard";
import parseInput from "./helpers/parseInput";
import validateInput from "./helpers/validateInput";
import { Stack, TextField, Button } from "@mui/material";

function App() {

const [robot, setRobot] = useState({
  x: 2,
  y: 2,
  direction: "WEST",
});

const [command, setCommand] = useState("");

const handlePlace = () => {
  if (!validateInput(command)) {
    alert("Invalid command");
    return;
  }

  const parsed = parseInput(command);

  setRobot(parsed);
  setCommand("");
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
    </div>

  )
}

export default App
