import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import { Box, Text, useTheme } from "../../components/Theme";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box backgroundColor="white" flex={1}>
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Box marginVertical="m">
            <Button
              onPress={() => navigation.navigate("Login")}
              label="Have an account? Login."
              variant="primary"
            />
          </Box>
          <Button
            onPress={() => console.log("click")}
            label="Join us. It's free!"
            variant="default"
          />
          <Button
            onPress={() => console.log("click")}
            label="Forgot password?"
            variant="transparent"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Welcome;
