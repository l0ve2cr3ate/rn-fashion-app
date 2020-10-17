import React, { FC, useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../../../components/Theme";

const SIZE = theme.borderRadii.m * 2;

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput: FC<TextInputProps> = ({ icon, validator, ...props }) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    // eslint-disable-next-line no-nested-ternary
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

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
          {...{ onChangeText }}
          onBlur={() => validate()}
          {...props}
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={state === Valid ? "primary" : "danger"}
          justifyContent="center"
          alignItems="center"
          marginRight="s"
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            size={16}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
