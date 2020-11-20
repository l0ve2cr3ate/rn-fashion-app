import { BoxProps } from "@shopify/restyle";
import React, { FC } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme } from "../../components/Theme";

import CardLayout from "./CardLayout";

const AddCard = () => {
  return (
    <CardLayout onPress={() => true} backgroundColor="secondary">
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <Icon name="plus" color="white" size={32} />
      </Box>
    </CardLayout>
  );
};

export default AddCard;
