import { useState, useEffect, useRef } from 'react';
import './App.css';
var now;
var amount = 5;
var style = {
  "display": "flex",
  "justify-content": "space-between"
}

function hide() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("cnt").style.display = "none";
  document.getElementById("ans").style.display = "block";
  document.getElementById("secs").style.display = "none";
  document.getElementById("clk").style.display = "none";
}

function App() {
  const [counter, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [clicked, setClicked] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) {
      now = Date.now();
      console.log('helo');
      setTimeout(hide, amount * 1000);
      setInterval(() => {
        setSeconds((Date.now() - now) / 1000);
      }, 25);
    }
    else
      isFirstMount.current = false;
  }, [clicked]);
  return (
    <div className="App-header">
      <h1 className="App" id="clk"> Click! </h1>
      <button id="btn" className="btn" onClick={() => { setCount(counter + 1); setClicked(true) }}>+</button>
      <br />
      
      <h2 id="secs"> Timer: {seconds.toFixed(3)} </h2>
      <h2 id="cnt"> You clicked {counter} times</h2>
      <h2 id="ans" hidden> {counter / amount} clicks per second </h2>
    </div>
  );
}
export default App;
