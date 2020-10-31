import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Text } from "../../components";
import TextInput from "../../components/Form/TextInput";

import CheckboxGroup from "./CheckboxGroup";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text marginBottom="m" variant="body">
          Account Information
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Name..."
            autoCompleteType="name"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password..."
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address..."
            autoCompleteType="street-address"
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
