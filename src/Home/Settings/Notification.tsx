import React, { useState } from "react";
import { Platform, Switch } from "react-native";
import { Box, Text, useTheme } from "../../components";

interface NotificationProps {
  title: string;
  description: string;
}

const Notification: React.FC<NotificationProps> = ({ title, description }) => {
    const [toggled, setToggled] = useState(false)
    const theme = useTheme()
  return (
    <Box flexDirection="row" marginBottom="m">
      <Box flex={1} justifyContent="center">
        <Text variant="title3">{title}</Text>
        <Text variant="body">{description}</Text>
      </Box>
      <Box paddingVertical="m">
          <Switch value={toggled} onValueChange={() => setToggled(prev => !prev)} thumbColor={toggled && Platform.OS === "android" ? theme.colors.primary : theme.colors.switch} trackColor={{true: theme.colors.primary, false:  theme.colors.backgroundSecondary}}/>
      </Box>
    </Box>
  );
};

export default Notification;
