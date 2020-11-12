import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Header, Content } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
          title="Notifications"
        />
        <Box padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notifications"
            description="If the product you 💜 comes back in stock, you will be notified"
          />
          <Notification
            title="New Stuff"
            description="Here it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;
