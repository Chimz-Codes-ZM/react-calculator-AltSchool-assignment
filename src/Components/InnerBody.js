import React from "react"
import { useState } from "react";

function InnerBody() {
  const [calculate, setCalculate] = useState("");

  const operations = ["/", "+", "-", "*", "."];

  const updateCalculator = (value) => {
    if (
      (operations.includes(value) && calculate === "") ||
      (operations.includes(value) && operations.includes(calculate.slice(-1)))
    ) {
      return;
    }

    setCalculate(calculate + value);
    
    
  };

  const calculatedValue = () => {
    setCalculate(eval(calculate).toString())
  }

  const deleteBtn = () => {
    if(calculate == '') {
        return
    }

    const value = calculate.slice(0, -1);
    setCalculate(value)
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculator(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };
  return (
    <div>
      <div className="screen">{calculate || "0"}</div>
      <div className="operators">
        <button onClick={() => updateCalculator("/")}>/</button>
        <button onClick={() => updateCalculator("*")}>*</button>
        <button onClick={() => updateCalculator("+")}>+</button>
        <button onClick={() => updateCalculator("-")}>-</button>
        <button onClick={deleteBtn}>Del</button>
      </div>
      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalculator("0")}>0</button>
        <button onClick={() => updateCalculator(".")}>.</button>
        <button onClick={calculatedValue}>=</button>
      </div>
    </div>
  );
}

export default InnerBody;
