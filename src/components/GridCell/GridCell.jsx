import { TableCell } from "@mui/material";
import "./GridCell.css";
import ObjectMarker from "../ObjectMarker";

function GridCell({ x, y, hasMarker, direction }) {
  return (
    <TableCell
      className="grid-cell"
      data-x={x}
      data-y={y}
    >
      {hasMarker && <ObjectMarker direction={direction} />}
    </TableCell>
  );
}

export default GridCell;