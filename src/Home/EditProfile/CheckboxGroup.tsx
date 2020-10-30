import React, { FC, useState } from "react";

import { Box, Button, useTheme } from "../../components";

type Option = { value: string; label: string };

interface CheckboxGroupProps {
  options: Option[];
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme();
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
            style={{
              width: "auto",
              height: "auto",
              paddingHorizontal: 16,
              paddingVertical: 10,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
