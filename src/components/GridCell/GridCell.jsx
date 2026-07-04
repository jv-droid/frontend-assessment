import { TableCell } from "@mui/material";
import "./GridCell.css";
import ObjectMarker from "../ObjectMarker";

function GridCell({ x, y, hasMarker, direction }) {
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
      {hasMarker && <ObjectMarker direction={direction} />}
    </TableCell>
  );
}

export default GridCell;