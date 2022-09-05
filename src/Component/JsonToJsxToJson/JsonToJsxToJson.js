/**
 * DONE : Handle User input fields
 * DONE : Handle Operation
 * DONE : Handle a list of histories
 * DONE : Render history List
 * Restore the history
 */

import { useEffect, useState } from "react";
import NumberField from "./components/ui/NumberField";
function* genarateId() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = genarateId();

const InitialInputState = {
  a: 10,
  b: 20,
};

const JsonToJsxToJson = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restored, setRestored] = useState(null);

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

  const handleArithmeticOperation = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid");
      return;
    }
    const operationsStr = `${inputState.a} ${operation} ${inputState.b}`;

    const f = new Function("operation", `return ${operationsStr}`);
    const result = f(operation);
    setResult(result);

    const historyItem = {
      id: gen.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestored(historyItem.id);
  };

  return (
    <>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <h1> Result :{result} </h1>

        <div>
          <p> Inputs </p>

          <input
            type="number"
            value={inputState.a}
            onChange={handleInputFields}
            // onChange={(e) => handleInputFields( {a: parseInt(e.target.value) })}
            name="a"
          />
          <NumberField
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
          <button onClick={() => handleArithmeticOperation("+")}> + </button>
          <button onClick={() => handleArithmeticOperation("-")}> - </button>
          <button onClick={() => handleArithmeticOperation("*")}> * </button>
          <button onClick={() => handleArithmeticOperation("/")}> / </button>
          <button onClick={handleClearOps}> Clear </button>
        </div>

        <div>
          <p> History </p>
          {histories.length === 0 ? (
            <p>
              <small> There is no History </small>{" "}
            </p>
          ) : (
            <ul>
              {/* <p> {JSON.stringify(histories)} </p> */}
              {histories.map((historyItem) => (
                <li key={historyItem.id}>
                  <p>
                    Oparation : {historyItem.inputs.a} {historyItem.operation}
                    {historyItem.inputs.b} Result : {historyItem.result}
                  </p>
                  <small>{new Date().toLocaleDateString()}</small>
                  <button
                    onClick={() => handleRestoreBtn(historyItem)}
                    disabled={restored !== null && historyItem === restored.id}
                  >
                    Restore
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default JsonToJsxToJson;
