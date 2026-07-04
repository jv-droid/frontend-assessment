import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import GridCell from "../GridCell";


const GRID_SIZE = 5;

function GridBoard({ robot }) {
  const rows = Array.from({ length: GRID_SIZE }, (_, index) => GRID_SIZE - 1 - index);
  const columns = Array.from({ length: GRID_SIZE }, (_, index) => index);

  return (
    <TableContainer component={Paper} sx={{ width: "fit-content", margin: "40px auto" }}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
            {columns.map((column) => {
                const hasMarker = column === robot.x && row === robot.y;
                return (
                  <GridCell
                     key={`${column}-${row}`}
                     x={column}
                     y={row}
                     hasMarker={hasMarker}
                     direction={robot.direction}
                  />
                );
              })}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridBoard;