import React, { FC, useState } from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, useTheme } from "../../components";

type Option = { value: string };

interface RoundedCheckboxGroupProps {
  options: Option[];
  valueIsColor?: boolean;
}

const RoundedCheckboxGroup: FC<RoundedCheckboxGroupProps> = ({
  options,
  valueIsColor,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme();

  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.backgroundSecondary;
        return (
          <BorderlessButton
            key={value}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: isSelected ? 1 : 0,
                borderColor: theme.colors.primary,
                marginBottom: theme.spacing.m,
                marginRight: theme.spacing.s,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: valueIsColor ? value : backgroundColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!valueIsColor && (
                  <Text
                    textAlign="center"
                    variant="header"
                    color={isSelected ? "textContrast" : "secondary"}
                  >
                    {value.toUpperCase()}
                  </Text>
                )}

                {valueIsColor && isSelected && (
                  <Icon color="white" name="check" size={16} />
                )}
              </View>
            </View>
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
