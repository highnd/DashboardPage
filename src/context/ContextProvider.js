import React, { createContext, useState, useEffect, useContext } from "react";

const StateContext = createContext();

const initialState = {
  isChat: false,
  isCard: false,
  isUserProfile: false,
  isNotification: false,
};

export const ContextProvider = ({ children }) => {
  const [isActiveMenu, setisActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
  }, []);

  useEffect(() => {
    screenSize <= 900 ? setisActiveMenu(false) : setisActiveMenu(true);
  }, [screenSize]);

  return (
    <StateContext.Provider
      value={{
        isActiveMenu,
        setisActiveMenu,
        handleClick,
        isClicked,
        setisClicked,
        screenSize,
        setscreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
