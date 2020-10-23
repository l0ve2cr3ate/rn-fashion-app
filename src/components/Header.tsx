import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
}

const Header: FC<HeaderProps> = ({ title, left, right }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
        size={24}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
        size={24}
      />
    </Box>
  );
};

export default Header;
