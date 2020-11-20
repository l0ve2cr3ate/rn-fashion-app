import React, { FC, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Button, Text } from "../../components";

import Card, { CardType } from "./Card";
import AddCard from "./AddCard";
import { CARD_HEIGHT } from "./CardLayout";
import LineItem from "./LineItem";

interface CheckoutProps {
  minHeight: number;
}

const cards = [
  {
    id: 0,
    type: CardType.VISA,
    last4Digits: 5467,
    expiration: "05/24",
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4Digits: 2620,
    expiration: "05/24",
  },
];
const Checkout: FC<CheckoutProps> = ({ minHeight }) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal>
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="xl">
          <Text variant="title3" color="background">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5}>
            <Box flex={1} paddingVertical="m">
              <Text color="background">Unit 15, York Farm Business Center</Text>
              <Text color="background">Waltling Street, Towcester</Text>
            </Box>
            <Box
              paddingVertical="m"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total items (6)" value={189.94} />
          <LineItem label="Standard Delivery" value={12} />
          <LineItem label="Total Payment" value={201.84} />
        </Box>
        <Box
          flex={1}
          paddingVertical="l"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            onPress={() => true}
            variant="primary"
            label="Swipe to pay $201.84"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
