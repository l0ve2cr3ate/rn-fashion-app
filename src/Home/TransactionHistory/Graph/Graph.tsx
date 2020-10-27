import React, { FC } from "react";
import { Dimensions } from "react-native";
import moment from "moment";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";

import { lerp } from "./Scale";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

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
      <Box width={width} height={height}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );
          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
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
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
