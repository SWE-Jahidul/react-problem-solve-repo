import React, { useEffect, useRef } from "react";

const From = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>
        <input ref={inputRef} type="text" placeholder="enter something"></input>
      </p>
    </div>
  );
};

export default From;
