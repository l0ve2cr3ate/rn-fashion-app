import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

import theme, { Box } from "../../components/Theme";

const SIZE = theme.borderRadii.l * 2;

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 533.5 544.3">
    <Path
      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
      fill="#4285f4"
    />
    <Path
      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
      fill="#34a853"
    />
    <Path
      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
      fill="#fbbc04"
    />
    <Path
      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
      fill="#ea4335"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={10} height={18} viewBox="88.428 12.828 107.543 207.085">
    <Path
      d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
      fill="#3c5a9a"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={18} height={20} viewBox="0 0 1000 1187.198">
    <Path
      fill="#000"
      d="M979.042 925.188c-17.954 41.477-39.206 79.657-63.828 114.759-33.563 47.853-61.044 80.976-82.222 99.37-32.83 30.192-68.006 45.654-105.672 46.533-27.041 0-59.652-7.694-97.611-23.303-38.085-15.536-73.084-23.23-105.086-23.23-33.563 0-69.56 7.694-108.061 23.23-38.561 15.609-69.625 23.743-93.376 24.55-36.12 1.538-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.888-36.875-51.883-67.191-112.047-90.942-180.639C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.19 63.066-82.625 108.127-109.373 45.06-26.748 93.749-40.378 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.376 99.443-31.064 53.313-19.185 98.307-27.129 135.168-24 99.883 8.062 174.923 47.436 224.828 118.372-89.33 54.126-133.52 129.936-132.64 227.188.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.183 82.222 53.934-6.595 19.127-13.557 37.447-20.958 55.035zM749.964 23.75c0 59.374-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.497c0-56.999 24.813-117.998 68.878-167.874 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.187.88 7.937 1.246 15.875 1.246 23.75z"
    />
  </Svg>
);

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon: FC<SocialIconProps> = ({ children }) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;