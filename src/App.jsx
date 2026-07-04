import './App.css'
import GridBoard from "./components/GridBoard";
import parseInput from "./helpers/parseInput";

function App() {

  // Development test for parseInput() - (Verfied working)
  //console.log(parseInput("2,3 NORTH"));

  return (
       <div>
      <GridBoard />
    </div>

  )
}

export default App
