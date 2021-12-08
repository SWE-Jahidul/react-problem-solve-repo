import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponetn = () => {
  const onSmallScreen = useWindowWidth(700);
  return (
    <div>
      <h1>you are browsing on {onSmallScreen ? "small" : "large"} device</h1>
    </div>
  );
};

export default LayoutComponetn;
