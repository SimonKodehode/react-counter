import { useState } from 'react';
import ButtonIncrement from "./components/ButtonIncrement";
import ButtonDecrement from "./components/ButtonDecrement";
import Display from "./components/Display";

function App() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  );
}

export default App;
