import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52, 0.7)",
    white: "white",
    grey: "rgba(12,13, 52, 0.05)",
    lightGrey: "#FAFAFA",
    darkGrey: "#808080",
    primaryLight: "#E7F9F7",
    pink: "#FF87A2",
    orange: "#FE5E33",
    violet: "#442CB9",
    yellow: "#FFC641",
    lightBlue: "#BFEAF5",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title3: {
      fontSize: 16,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
