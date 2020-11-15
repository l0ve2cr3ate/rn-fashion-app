import React, { FC } from "react";

import { Box, Text } from "../../components";
import SwipeableRow from "./SwipeableRow";

interface ItemProps {
  onDelete: () => void;
}

const Item: FC<ItemProps> = ({ onDelete }) => {
  return (
    <SwipeableRow onDelete={onDelete}>
      <Box padding="m" flexDirection="row" alignItems="center">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          style={{ backgroundColor: "#BFEAF5" }}
        />
        <Box padding="m" flex={1} justifyContent="center">
          <Text variant="header">Size M, L</Text>
          <Text variant="title3">Short Sleeve Organic Top</Text>
          <Text variant="title3" color="primary">
            $29.99
          </Text>
        </Box>
        <Box justifyContent="center">
          <Box
            backgroundColor="secondary"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          >
            <Text variant="header" color="background">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
  );
};

export default Item;
