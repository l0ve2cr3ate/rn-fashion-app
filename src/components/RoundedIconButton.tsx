import React, { FC } from "react";
import { RectButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress?: () => void;
}

const RoundedIconButton: FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
