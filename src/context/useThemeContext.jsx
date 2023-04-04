import { createContext, useReducer } from "react";
const ThemeContent = createContext();
function changeContextValue(state, action) {
  switch (action.type) {
    case "Change_Color":
      return { ...state, color: action.payload };
    case "Change_Mode":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}
function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeContextValue, {
    color: "orange",
    mode: "light",
  });
  const changeColor = (color) => {
    dispatch({
      type: "Change_Color",
      payload: color,
    });
  };
  const changeMode = (mode) => {
    dispatch({
      type: "Change_Mode",
      payload: mode,
    });
  };

  return (
    <ThemeContent.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContent.Provider>
  );
}

export { ThemeContextProvider, ThemeContent };
