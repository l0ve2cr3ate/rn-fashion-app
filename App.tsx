import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import { assets as authenticationAssets } from "./src/Authentication/Onboarding";
import { LoadAssets, theme } from "./src/components";
import { AuthenticationNavigator } from "./src/Authentication";

const assets = [...authenticationAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </LoadAssets>
    </ThemeProvider>
  );
}
