import React, { FC } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon: FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
}) => {
  const iconSize = size * 0.7;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      marginRight="s"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon
          size={iconSize}
          color="white"
          style={{ textAlign: "center" }}
          {...{ name }}
        />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
