import React, { ReactNode } from "react";
import {
  createBox,
  createText,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const palette = {
  green: "#2CB9B0",
  white: "white",
  pink: "#FF87A2",
  orange: "#FE5E33",
  violet: "#442CB9",
  yellow: "#FFC641",
  lightBlue: "#BFEAF5",
  darkBlue: "#0C0D34",
  darkGrey: "#808080",
  grey: "rgba(12,13, 52, 0.05)",
  grey200: "#f4f3f4",
};

const theme = {
  colors: {
    primary: palette.green,
    secondary: palette.darkBlue,
    danger: "#FF0058",
    text: "rgba(12,13,52, 0.7)",
    textContrast: palette.white,
    background: palette.white,
    backgroundSecondary: palette.grey,
    info: palette.darkGrey,
    edit: palette.lightBlue,
    primaryLight: "#E7F9F7",
    graph1: palette.yellow,
    graph2: palette.orange,
    drawer1: palette.green,
    drawer2: palette.orange,
    drawer3: palette.yellow,
    drawer4: palette.pink,
    drawer5: palette.violet,
    drawer6: palette.darkBlue,
    switch: palette.grey200,
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
      color: "background",
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
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
