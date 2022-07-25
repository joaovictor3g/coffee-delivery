import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  config,
  fonts: {
    body: `"Roboto", sans-serif`,
    heading: `"Baloo 2", sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
      },
    },
  },
  components: {
    Input: {
      variants: {
        address: {
          field: {
            background: "#EEEDED",
            border: "1px solid #E6e5e5",
            color: "#8D8686",
            _placeholder: {
              color: "#8D8686",
            },
            _focus: {
              borderColor: "yellow.200",
            },
          },
        },
      },
      defaultProps: {
        variant: null,
      },
    },
  },
});
