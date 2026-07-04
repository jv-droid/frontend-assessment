import NavigationIcon from "@mui/icons-material/Navigation";
import "./ObjectMarker.css";

const rotationMap = {
  NORTH: "0deg",
  EAST: "90deg",
  SOUTH: "180deg",
  WEST: "270deg",
};

function ObjectMarker({ direction }) {
  return (
    <NavigationIcon
      className="object-marker"
      sx={{
        fontSize: 55,
        color: "#222",
        transform: `rotate(${rotationMap[direction]})`,
        transition: "transform .2s ease",
      }}
    />
  );
}

export default ObjectMarker;