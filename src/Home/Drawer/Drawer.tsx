import React from "react";
import { Dimensions, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, RoundedIconButton, Text, useTheme } from "../../components";

import DrawerItem, { DrawerIconProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerIconProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoritOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Log Out",
    screen: "LogOut",
    color: "secondary",
  },
];

const Drawer = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          paddingHorizontal="m"
          justifyContent="space-between"
          style={{ paddingTop: insets.top }}
        >
          <RoundedIconButton
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
            size={24}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
            size={24}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Image
          source={require("../../../assets/pattern3.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        height={height * 0.61}
        overflow="hidden"
      >
        <Image
          source={require("../../../assets/pattern3.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
