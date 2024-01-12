import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
//import "./styles.css";

export default function App() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [transform, setTransform] = useState("rotate(0deg)");
  const place = () => {
    setTop("calc(50% - 65px)");
    setLeft(5);
  };
  const move = () => {
    setTop((prev) => (prev <= 350 ? prev + 1 : prev));
    setLeft((prev) => (prev <= 370 ? prev + 1 : prev));
  };
  const right = () => {
    setTransform("rotate(90deg)");
  };
  const leftt = () => {
    setTransform("rotate(90deg)");
  };
  return (
    <div className="App">
      <div
        style={{
          width: "480px",
          height: "480px",
          background: "cyan",
          position: "relative",
        }}
      >
        <img
          style={{
            width: "100px",
            height: "130px",
            position: "absolute",
            top: top,
            left: left,
            transform: transform,
          }}
          src="data:image/jpeg;base64,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"
        />
      </div>
      <button onClick={place}>Place</button>
      <button onClick={move}>Move</button>
      <button onClick={right}>Right</button>
      <button onClick={leftt}>Left</button>
    </div>
  );
}

