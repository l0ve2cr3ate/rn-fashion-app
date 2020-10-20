import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme } from "../Theme";
import RoundedIcon from "../RoundedIcon";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    // eslint-disable-next-line no-nested-ternary
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>

        <Box flex={1}>
          <RNTextInput
            placeholderTextColor={color}
            underlineColorAndroid="transparent"
            {...{ ref }}
            {...props}
          />
        </Box>

        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
