import React, { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import calculate from "../logic/calculate.js";

const Calculator = ({ result, setResult, calRef }) => {
  const [leftOperand, setLeftOperand] = useState("");
  const [rightOperand, setRightOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleKeydown = (e) => {
    const key = e.key;
    const isNumber = !isNaN(key) || key === ".";
    const isOperator = key === "+" || key === "-" || key === "*" || key === "/";
    const isClear = key === "Backspace" || key === "Escape";
    const isEnter = key === "Enter";

    if (!isNumber && !isOperator && !isClear && !isEnter) return;

    handleClick("", key);
  };

  const clear = () => {
    setResult(0);
    setLeftOperand("");
    setRightOperand("");
    setOperator("");
  };

  const del = () => {
    if (rightOperand) {
      let newRightOperand = rightOperand.toString().slice(0, -1);
      newRightOperand = newRightOperand === "" ? 0 : newRightOperand;
      setRightOperand(newRightOperand);
      setResult(newRightOperand);
    } else if (operator) {
      setOperator("");
    } else if (leftOperand) {
      console.log(typeof leftOperand);
      let newLeftOperand = leftOperand.toString().slice(0, -1);
      newLeftOperand = newLeftOperand === "" ? 0 : newLeftOperand;
      setLeftOperand(newLeftOperand);
      setResult(newLeftOperand);
    }
  };

  const handleNumberClick = (value) => {
    if (value !== "=") {
      if (!operator) {
        if (
          leftOperand == "0" ||
          leftOperand == "Infinity" ||
          leftOperand == "NaN"
        ) {
          setLeftOperand(value);
          setResult(value);
        } else {
          //character limit
          if (leftOperand.length >= 14) return;
          if (value === "." && leftOperand.includes(".")) return;
          setLeftOperand(leftOperand + value);
          setResult(leftOperand + value);
        }
      } else {
        if (
          rightOperand == "0" ||
          leftOperand == "Infinity" ||
          leftOperand == "NaN"
        ) {
          setRightOperand(value);
          setResult(value);
        } else {
          //character limit
          if (rightOperand.length >= 14) return;

          if (value === "." && rightOperand.includes(".")) return;
          setRightOperand(rightOperand + value);
          setResult(rightOperand + value);
        }
      }
    }
  };

  const handleOperatorClick = (value, key) => {
    if (
      leftOperand &&
      rightOperand &&
      operator &&
      value !== "=" &&
      key !== "Enter"
    ) {
      let res = calculate(leftOperand, rightOperand, value);
      setResult(res);
      setLeftOperand(res);
      setOperator(value);
      setRightOperand("");
    } else {
      setOperator(value);
    }
  };

  const handleClick = (value, key) => {
    if (value === "AC" || key === "Escape") {
      clear();
    } else if (value === "DEL" || key === "Backspace") {
      del();
    } else {
      //Check if it's a keydown event

      if (value === "") {
        if (key === "Enter") {
          value = "=";
        } else {
          value = key;
        }
      }

      const isOperator = "+-*/".includes(value);

      if (isOperator) {
        //Operator Click

        handleOperatorClick(value, key);
      } else {
        //Number Click

        handleNumberClick(value);
      }
    }

    //Equal Click

    if (value === "=" && leftOperand && rightOperand && operator) {
      let res = calculate(leftOperand, rightOperand, operator);
      setResult(res);
      setLeftOperand(res);
      setRightOperand("");
      setOperator("");
    }
  };

  return (
    <div
      className="calculator p-4 bg-[#E8F1F2] text-center m-auto mt-8"
      tabIndex="0"
      ref={calRef}
      onKeyDown={handleKeydown}
    >
      <div className="headingx">
        <h1 className="pb-4 text-4xl font-bold text-[#008090]">Calculator</h1>
      </div>
      <div className="display p-8 bg-[#008090] mb-4 text-bold text-white text-4xl break-all">
        {result}
      </div>
      <div className="grid grid-cols-4">
        <Buttons
          result={result}
          setResult={setResult}
          handleClick={handleClick}
        />
      </div>
      <div className="pt-4">
        <p className="font-bold text-[#008090]">
          <span className="text-[#008090]">Built by </span>
          <a
            href="https://github.com/DaminiPandey"
            className="text-[#104B5F] cursor-pointer hover:underline"
          >
            Damini Pandey{" "}
          </a>{" "}
          |{" "}
          <a
            className="text-[#104B5F] cursor-pointer hover:underline"
            href="https://github.com/DaminiPandey/react-calculator"
          >
            Source Code
          </a>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
