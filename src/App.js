import { useState } from 'react';
import './App.css';
var init = false;
var now;
function vaiDeCuruTau() {
  document.getElementById("btn").style.display = "none";
  document.getElementById("cnt").style.display = "none";
  document.getElementById("ans").style.display = "block";
}
function clicked() {
  if (init == false) { init = true; setTimeout(vaiDeCuruTau, 5000); now = Date.now() }
}

function App() {
  const [counter, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="App-header">
      <h1 className="App"> Click! </h1>
      <h1> {seconds} </h1>
      <button id="btn" onClick={() => { setCount(counter + 1); clicked(); setSeconds((Date.now() - now) / 1000) }}>Increment</button>
      <h2 id="cnt"> You clicked {counter} times</h2>
      <h2 id="ans" hidden> {counter/5} clicks per second </h2>
    </div>
  );

}

export default App;
