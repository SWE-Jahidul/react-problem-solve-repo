/**
 * DONE : Handle User input fields
 * TODO : Handle Operation
 * Handle a list of histories
 * Render history List
 * Restore the history
 */

import { useState } from "react";

const InitialInputState = {
  a: 0,
  b: 0,
};

function JsonToJsxToJson() {
  const [inputState, setInputState] = useState({ ...InitialInputState });

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const handleClearOps = () => {
    setInputState({ ...InitialInputState });
  };

  //   const handleFieldA = (e) => {
  //     setInputState({
  //       ...inputState,
  //       a: parseInt(e.target.vaue),
  //     });
  //   };
  //   const handleFieldB = (e) => {
  //     setInputState({
  //       ...inputState,
  //       b: parseInt(e.target.vaue),
  //     });
  //   };

  //   const handleInputFields = (key, value) => {
  //     setInputState({
  //       ...inputState,
  //       [key]: value,
  //     });
  //   };

  //   const handleInputFields = (inp) => {
  //     setInputState({
  //       ...inputState,
  //        ...inp

  //     });
  //   };

  const handleArithmeticOperations = (e) => {
    console.log(
      eval(`${inputState.a} ${e.target.textContent} ${inputState.b} `)
    );
  };

  return (
    <>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <h1> Result : 0</h1>

        <div>
          <p> Inputs </p>

          <input
            type="number"
            value={inputState.a}
            onChange={handleInputFields}
            // onChange={(e) => handleInputFields( {a: parseInt(e.target.value) })}
            name="a"
          />
          <input
            type="number"
            value={inputState.b}
            onChange={handleInputFields}
            // onChange={(e) => handleInputFields({b: parseInt(e.target.value)})}
            name="b"
          />
        </div>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <p> Operations </p>
          <button onClick={() => handleArithmeticOperations("+")}> + </button>
          <button onClick={() => handleArithmeticOperations("-")}> - </button>
          <button onClick={() => handleArithmeticOperations("*")}> * </button>
          <button onClick={() => handleArithmeticOperations("/")}> / </button>
          <button onClick={handleClearOps}> Clear </button>
        </div>
      </div>
    </>
  );
}

export default JsonToJsxToJson;
