import { DefaultTheme } from "styled-components";

const color = {
  red: "#FF0000",
  blue: "#373A6D",
  black: "#000",
  dark: "#222",
  grey: "#444",
  lightgrey: "#CCC",
  offwhite: "#EDEDED",
  white: "#fff",
  lightblue: "#4286f4"
};

const myTheme: DefaultTheme = {
  borderRadius: "5px",
  maxWidth: "1200px",
  boxshadow: "0 12px 24px 0 rgba(0,0,0,0.09)",

  color: {
    text_main: color.lightgrey,
    text_secondary: color.white,
    text_logo: color.white,
    text_error: color.red,
    bg_main: color.dark,
    bg_secondary: color.dark,
    bg_logo: color.blue,
    bg_error: color.dark,
    border_main: color.lightgrey,
    border_secondary: color.black,
    border_logo: color.blue,
    border_error: color.red,
    ...color
  }
};

export { color, myTheme as default };
