import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialThemeState = {
  darkMode: false,
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme должен использоваться внутри ThemeProvider");
  }
  return context;
};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
