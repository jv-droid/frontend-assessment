import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import GridCell from "../GridCell";


const GRID_SIZE = 5;

function GridBoard() {
  const rows = Array.from({ length: GRID_SIZE }, (_, index) => GRID_SIZE - 1 - index);
  const columns = Array.from({ length: GRID_SIZE }, (_, index) => index);

  return (
    <TableContainer component={Paper} sx={{ width: "fit-content", margin: "40px auto" }}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              {columns.map((column) => (
               <GridCell
                  key={`${column}-${row}`}
                  x={column}
                  y={row}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridBoard;