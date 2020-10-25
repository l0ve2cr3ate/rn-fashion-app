import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Button } from "../../components";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer: FC<FooterProps> = ({ label, onPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box backgroundColor="secondary" padding="m" borderTopLeftRadius="xl">
      <Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
        <Button variant="primary" {...{ onPress, label }} />
      </Box>
    </Box>
  );
};

export default Footer;
