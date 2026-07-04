import './App.css'
import GridBoard from "./components/GridBoard";
import parseInput from "./helpers/parseInput";
import validateInput from "./helpers/validateInput";

function App() {

  // Development test for parseInput() - (Verfied working)
  //console.log(parseInput("2,3 NORTH"));

  // Development test for validateInput() - (Verified working)
console.log(validateInput("2,3 NORTH"));      // true
console.log(validateInput("2,3 SOUTH"));      // true
console.log(validateInput("2,3 EAST"));       // true
console.log(validateInput("2,3 WEST"));       // true

console.log(validateInput("2,3 UP"));         // false
console.log(validateInput("2,3 DOWN"));       // false
console.log(validateInput("2,3 LEFT"));       // false
console.log(validateInput("2,3 RIGHT"));      // false
console.log(validateInput("2,3 north"));      // false
console.log(validateInput("2,3 ABC"));        // false

  return (
       <div>
      <GridBoard />
    </div>

  )
}

export default App
