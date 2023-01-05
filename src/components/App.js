import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (num1 === 0) {
      setData(num2);
    } else if (num2 === 0) {
      setData(num1);
    } else {
      setData(Number(num1) + Number(num2));
    }
  });
  return (
    <div id="main">
      <input id="input1" onChange={(e) => setNum1(e.target.value)} />
      +
      <input id="input2" onChange={(e) => setNum2(e.target.value)} />
      <p id="result">{data}</p>
    </div>
  );
};

export default App;
