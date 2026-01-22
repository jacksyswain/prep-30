import React, { useState } from "react";
import "./Leapyear.css";


 function LeapYear() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function isLeapyear(n) {
    return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
  }

  const handleClick = () => {
    const year = Number(input);

    if (!year) {
      alert("Please enter a year");
      return;
    }

    if (isLeapyear(year)) {
      setResult(`${year} is a Leap Year`);
    } else {
      setResult(`${year} is NOT a Leap Year`);
    }
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>

      <label data-testid="label-date">Enter a year:</label>

      <input
        type="number"
        data-testid="year-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick} data-testid="check-btn">
        Check
      </button>

      <p>{result}</p>
    </div>
  );
}

export default LeapYear;