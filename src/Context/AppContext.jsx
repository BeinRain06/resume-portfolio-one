import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [isHovered, setHover] = useState(false);

  const isToggled = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const setHoverFunction = () => {
    setHover(!isHovered);
  };

  const contextValue = { isToggled, setHoverFunction, toggle, isHovered };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
