import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import * as Yup from "yup";

import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Form/TextInput";
import { AuthNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: "" },
      onSubmit: (values) => {
        console.log(values);
        navigation.navigate("PasswordChanged");
      },
      validationSchema: ForgotPasswordSchema,
    }
  );

  const footer = (
    <Footer
      title="Doesn't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="s">
        Forgot Password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email adress associated with your account
      </Text>

      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email..."
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCompleteType="email"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit}
          />
        </Box>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Change password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
