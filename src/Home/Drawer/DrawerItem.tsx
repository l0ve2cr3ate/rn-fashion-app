import React, { FC } from "react";
import { RectButton } from "react-native-gesture-handler";

import { RoundedIcon } from "../../components";
import { Box, Theme, Text, useTheme } from "../../components/Theme";

export interface DrawerIconProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
}

const DrawerItem: FC<DrawerIconProps> = ({ icon, color, screen, label }) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          backgroundColor={color}
          color="white"
          size={36}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
