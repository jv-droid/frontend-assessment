import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

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
                <TableCell
                  key={`${column}-${row}`}
                  sx={{
                    width: 70,
                    height: 70,
                    border: "1px solid #ccc",
                    textAlign: "center",
                    padding: 0,
                  }}
                >
                  {/* Marker will go here later */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridBoard;