import React, { useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, SetOnSmallScreen] = useState(false);
  

  useEffect(() => {

    const checkScreenSize = () => {
        SetOnSmallScreen(window.innerWidth < screenSize);
      };

    checkScreenSize();
    window.addEventListener('resize',checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);

  return onSmallScreen;
};

export default useWindowWidth;
