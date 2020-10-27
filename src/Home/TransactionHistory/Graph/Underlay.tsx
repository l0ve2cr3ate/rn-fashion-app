import React, { FC } from "react";
import { StyleSheet } from "react-native";
import moment from "moment";

import { Box, Text, useTheme } from "../../../components";

import { lerp } from "./Scale";

export const MARGIN = "xl";
const ROW_HEIGHT = 16;

interface UnderlayProps {
  startDate: number;
  numberOfMonths: number;
  minY: number;
  maxY: number;
  step: number;
}

const Underlay: FC<UnderlayProps> = ({
  startDate,
  numberOfMonths,
  minY,
  maxY,
  step,
}) => {
  const theme = useTheme();
  const minDate = moment(startDate);
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection="row"
            alignItems="center"
            height={ROW_HEIGHT}
            style={{
              // eslint-disable-next-line no-nested-ternary
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
            }}
          >
            <Box width={theme.spacing[MARGIN]} paddingRight="s">
              <Text textAlign="right" color="darkGrey">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor="grey" />
          </Box>
        ))}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center"
      >
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => moment(minDate.clone().add(i, "month")))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
