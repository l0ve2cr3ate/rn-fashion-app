import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Text, useTheme } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  label?: string;
  variant: "default" | "primary";
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ label, variant, onPress }) => {
  const theme = useTheme();

  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : theme.colors.backgroundSecondary;
  const color =
    variant === "primary" ? theme.colors.background : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
