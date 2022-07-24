import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts: {
    body: `"Roboto", sans-serif`,
    heading: `"Baloo 2", sans-serif`,
  },
  styles: {
    global: {},
  },
});
