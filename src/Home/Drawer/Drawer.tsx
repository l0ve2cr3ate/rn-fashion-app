import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Dimensions, Image } from "react-native";

import { Box, Header, Text, useTheme } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

export const assets = [require("../../../assets/drawer.png")];
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "drawer1",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "drawer2",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "drawer3",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer4",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "Settings",
    color: "drawer5",
  },
  {
    icon: "log-out",
    label: "Log Out",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "drawer6",
  },
];

const Drawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Menu"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="background"
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
            <DrawerItem key={item.color} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="background"
        width={DRAWER_WIDTH}
        height={height * 0.61}
        overflow="hidden"
      >
        <Image
          source={assets[0]}
          style={{
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
