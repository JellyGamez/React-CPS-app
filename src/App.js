import { useState, useEffect } from 'react';
import './App.css';
var init = false;
var now;
var amount = 5;

function hide() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("cnt").style.display = "none";
  document.getElementById("ans").style.display = "block";
  document.getElementById("secs").style.display = "none";
  document.getElementById("clk").style.display = "none";
}

function clicked() {
  if (init === false) { init = true; setTimeout(hide, amount * 1000); now = Date.now(); }
}

function App() {
  const [counter, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds((Date.now() - now)/1000);
    }, 10);
  }, []);
  return (
    <div className="App-header">
      <h1 className="App" id="clk"> Click! </h1>
      <button id="btn" className = "btn" onClick={() => { setCount(counter + 1); clicked(); setSeconds((Date.now() - now) / 1000) }}>+</button>
      <br></br>
      <h2 id="secs" > {seconds} </h2>
      <h2 id="cnt"> You clicked {counter} times</h2>
      <h2 id="ans" hidden> {counter/amount} clicks per second </h2>
    </div>
  );

}

export default App;
