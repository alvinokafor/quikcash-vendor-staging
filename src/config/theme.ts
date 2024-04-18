import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  colors: {
    blue: {
      blue600: "#131313",
      blue500: "#242424",
      blue400: "#2C346D",
      blue300: "#3A4A7E",
      blue200: "#20486D",
      blue100: "#00203F",
    },
    red: {
      red500: "#EE4223",
      red400: "#F05C36",
      red300: "#F06944",
      red200: "#F3937A",
      red100: "#F5BDB7",
    },
    yellow: {
      yellow500: "#F9C301",
      yellow400: "#F79749",
      yellow300: "#FBBA7F",
      yellow200: "#FCC38D",
      yellow100: "#FEE8C9",
    },
    gray: {
      gray600: "#101828",
      gray500: "rgba(255, 255, 255, 0.6)",
      gray400: "#ADABAB",
      gray300: "#858383",
      gray200: "#C0C0C1",
      gray100: "#E1E1E1;",
      gray50: "#F9FAFB",
    },
    purple: {
      600: "#7F56D9",
      400: "#B692F6",
    },

    background: "#EEF3FF",
    white: "#FFFFFF",
    black: "#000000",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
