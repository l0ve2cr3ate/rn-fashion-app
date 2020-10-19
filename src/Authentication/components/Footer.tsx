import React, { FC } from "react";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer: FC<FooterProps> = ({ onPress, title, action }) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="s">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
