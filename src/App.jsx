import './App.css'
import GridBoard from "./components/GridBoard";
import parseInput from "./helpers/parseInput";
import validateInput from "./helpers/validateInput";

function App() {

  // Development test for parseInput() - (Verfied working)
  //console.log(parseInput("2,3 NORTH"));

  // Development test for validateInput() - (Verified working)
console.log(validateInput("0,0 NORTH")); // true
console.log(validateInput("4,4 SOUTH")); // true
console.log(validateInput("2,3 EAST"));  // true

console.log(validateInput("5,2 NORTH"));  // false
console.log(validateInput("-1,0 EAST"));  // false
console.log(validateInput("0,5 SOUTH"));  // false
console.log(validateInput("7,7 WEST"));   // false
console.log(validateInput("4,5 NORTH"));  // false
console.log(validateInput("5,4 NORTH"));  // false

  return (
       <div>
      <GridBoard />
    </div>

  )
}

export default App
