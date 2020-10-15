import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../components/Navigation";

import Onboarding, { assets as onboardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";
import Login from "./Login";

export const assets = [...onboardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
