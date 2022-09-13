/**
 * DONE : Handle User input fields
 * DONE : Handle Operation
 * DONE : Handle a list of histories
 * DONE : Render history List
 * DONE : Restore the history
 */

import { useState } from "react";
import InputSection from "./components/inputs/InputSection";
import OparationsSection from "./components/operations/OparationsSection";
import HistorySection from "./components/history/HistorySection";

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
        <InputSection
          inputs={inputState}
          handleInputFields={handleInputFields}
        />
        <OparationsSection
          handleArithmeticOperation={handleArithmeticOperation}
          handleClearOps={handleClearOps}
        />

        <HistorySection
          histories={histories}
          restored={restored}
          handleRestoreBtn={handleRestoreBtn}
        />
      </div>
    </>
  );
};

export default JsonToJsxToJson;
