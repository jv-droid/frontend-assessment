import { TableCell } from "@mui/material";
import "./GridCell.css";

function GridCell({ x, y }) {
  return (
    <TableCell
      sx={{
        width: 70,
        height: 70,
        border: "1px solid #ccc",
        textAlign: "center",
        padding: 0,
      }}
      data-x={x}
      data-y={y}
    >
      {/* Marker will be rendered here*/}
    </TableCell>
  );
}

export default GridCell;