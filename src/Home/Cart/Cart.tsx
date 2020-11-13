import React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import Animated from "react-native-reanimated";
import { usePanGestureHandler } from "react-native-redash";

import { Box, useTheme } from "../../components";

const { width } = Dimensions.get("window");
const height = (1125 * width) / 750;

const Cart = () => {
  const theme = useTheme();
  const onGestureEvent = usePanGestureHandler();
  return (
    <Box flex={1} backgroundColor="secondary">
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height,
          backgroundColor: "white",
          borderBottomLeftRadius: theme.borderRadii.xl,
          borderBottomRightRadius: theme.borderRadii.xl,
        }}
      />
    </Box>
  );
};

export default Cart;
