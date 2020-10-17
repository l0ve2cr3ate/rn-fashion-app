import React from "react";

import { Button, Container, Text } from "../../components";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";
import Checkbox from "../components/Form/Checkbox";

const emailValidator = (email: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );

const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button onPress={() => alert("SignUp!")} variant="transparent">
          <Box flexDirection="row" justifyContent="center" flex={1}>
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box paddingHorizontal="xl" paddingVertical="s">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email..."
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your Password..."
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button onPress={() => true} variant="transparent">
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
