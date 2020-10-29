import React, { FC } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"] | undefined;
  iconRatio?: number;
  align?: "center" | "flex-start" | "flex-end";
}

const RoundedIcon: FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align,
}) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems={align}
      marginRight="s"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  align: "center",
};

export default RoundedIcon;
