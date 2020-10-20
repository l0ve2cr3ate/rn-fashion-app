import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Button, Container, Text, CloseButton } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center" marginBottom="l">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="m"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="s">
          Password Changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Your password has been successdfully changed
        </Text>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
