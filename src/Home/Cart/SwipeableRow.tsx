import React, { FC, ReactNode, useCallback, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

import { Box, Text, RoundedIconButton, useTheme } from "../../components";

const { width } = Dimensions.get("window");
const aspectRatio = width / 750;
const editWidth = 85 * aspectRatio;

const finalDestination = width;
const snapPoints = [-editWidth, 0, finalDestination];

interface SwipaebleRowProps {
  children: ReactNode;
  onDelete: () => void;
  height: number;
}

const SwipaebleRow: FC<SwipaebleRowProps> = ({
  children,
  onDelete,
  height: defaultHeight,
}) => {
  const height = useSharedValue(defaultHeight);
  const deleteItem = useCallback(() => {
    onDelete();
  }, [onDelete]);
  const theme = useTheme();
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, { overshootClamping: true }, () => {
        if (dest === finalDestination) {
          height.value = withTiming(0, { duration: 250 }, () => deleteItem());
        }
      });
    },
  });
  const style = useAnimatedStyle(() => ({
    height: height.value,
    backgroundColor: theme.colors.background,
    transform: [{ translateX: translateX.value }],
  }));

  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));
  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFill, , deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          justifyContent="space-evenly"
          alignItems="center"
          width={editWidth}
          flex={1}
        >
          <Text variant="header" color="background">
            Delete
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.edit, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.7, 0.5]}
        />
        <Box
          justifyContent="space-evenly"
          alignItems="center"
          alignSelf="flex-end"
          width={editWidth}
          flex={1}
        >
          <RoundedIconButton
            name="plus"
            size={24}
            color="background"
            backgroundColor="primary"
            onPress={() => alert("hello!")}
          />
          <RoundedIconButton
            name="minus"
            size={24}
            color="background"
            backgroundColor="danger"
            onPress={() => alert("hello!")}
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipaebleRow;
