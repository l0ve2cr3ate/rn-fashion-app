import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";

import { lerp } from "./Scale";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph: FC<GraphProps> = ({ data, startDate, numberOfMonths }) => {
  const transition = useSharedValue(0);
  useFocusEffect(() => {
    transition.value = withTiming(1, { duration: 650 });
    return () => (transition.value = 0);
  });
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.l * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const step = canvasWidth / numberOfMonths;
  const values = data.map((p) => p.value);

  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        minY={minY}
        maxY={maxY}
        step={step}
      />
      <View style={{ width, height, overflow: "hidden" }}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );
          const totalHeight = lerp(0, height, point.value / maxY);

          const style = useAnimatedStyle(() => {
            const currentHeight = totalHeight * transition.value;
            const translateY = (totalHeight - currentHeight) / 2;
            return {
              transform: [{ translateY }, { scaleY: transition.value }],
            };
          });
          return (
            <AnimatedBox
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={totalHeight}
              style={style}
            >
              <Box
                backgroundColor={point.color}
                opacity={0.1}
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
