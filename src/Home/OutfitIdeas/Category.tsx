import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Box, Text } from "../../components";

import BorderlessTap from "./BorderlessTap";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
  category: {
    title: string;
    color: string;
    id: string;
  };
}

const Category: FC<CategoryProps> = ({
  category: { color: backgroundColor, title },
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
