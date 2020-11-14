import React from "react";

import { Box, Text } from "../../components";

const Item = () => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        borderRadius="m"
        style={{ backgroundColor: "#BFEAF5" }}
      />
      <Box padding="m">
        <Text variant="header">Size M, L</Text>
        <Text variant="title3">Short Sleeve Organic Top</Text>
        <Text variant="title3" color="primary">
          $29.99
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
