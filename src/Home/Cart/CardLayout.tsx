import { BoxProps } from "@shopify/restyle";
import React, { FC, ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box } from "../../components";
import { Theme } from "../../components/Theme";

export const CARD_HEIGHT = 160;
const CARD_WIDTH = 120;

export enum CardType {
  VISA,
  MASTERCARD,
}
export interface CardModel {
  id: number;
  type: CardType;
  last4Digits: number;
  expiration: string;
}

interface CardLayoutProps {
  children: ReactNode;
  onPress: () => void;
  backgroundColor: BoxProps<Theme>["backgroundColor"];
}

const CardLayout: FC<CardLayoutProps> = ({
  onPress,
  children,
  backgroundColor,
}) => {
  return (
    <BorderlessButton onPress={onPress}>
      <Box
        padding="m"
        marginLeft="m"
        borderRadius="m"
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </BorderlessButton>
  );
};

export default CardLayout;
