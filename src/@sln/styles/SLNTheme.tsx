import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeOptions, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TssCacheProvider } from "tss-react";
import React from "react";

import boxShadow from "@sln/styles/functions/boxShadow";
import hexToRgb from "@sln/styles/functions/hexToRgb";
import linearGradient from "@sln/styles/functions/linearGradient";
import pxToRem from "@sln/styles/functions/pxToRem";
import rgba from "@sln/styles/functions/rgba";

const white = "#FFF";
const dark = "#222";
const darkPaper = "#363D43";
const darkPaperText = "#D7D8D9";
const primaryBlueDark = "#2196F3";
const primaryBlueLight = "#2196F3";
const defaultDarkBg = "#201F1F";
const defaultLightBackground = "#F5F5F5";
const grayForDark = "#CFCFCF";
const grayForLight = "#595959";

const fontFamily = ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(
  ","
);

interface themeOptions {
  prefersDarkMode: boolean;
}

export const getThemeOptions = ({ prefersDarkMode }: themeOptions) =>
  ({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      common: {
        black: "#000",
        white: "#fff",
      },
      white: {
        main: "#ffffff",
        focus: "#ffffff",
      },
    
      black: {
        light: "#000000",
        main: "#000000",
        focus: "#000000",
      },
      primary: {
        main: prefersDarkMode ? primaryBlueDark : primaryBlueLight,
        contrastText: prefersDarkMode ? dark : white,
      },
      text: {
        primary: prefersDarkMode ? white : grayForLight,
        secondary: prefersDarkMode ? "#CDD0D0" : "rgba(0, 0, 0, 0.7)",
        disabled: prefersDarkMode
          ? "rgba(255, 255, 255, 0.38)"
          : "rgba(0, 0, 0, 0.38)",
        hint: prefersDarkMode
          ? "rgba(255, 255, 255, 0.38)"
          : "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(255, 255, 255, 0.4)",
      background: {
        paper: prefersDarkMode ? darkPaper : white,
        default: prefersDarkMode ? defaultDarkBg : defaultLightBackground,
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily, // theme.typography.fontFamily
    },
    functions: {
      boxShadow,
      hexToRgb,
      linearGradient,
      pxToRem,
      rgba,
    },

    components: {
      MuiAppBar: {
        styleOverrides: {
          // header and tabs bar
          root: {
            "&.MuiPaper-elevation4": {
              // backgroundColor: prefersDarkMode
              //     ? defaultDarkBg
              //     : defaultLightBackground,
              backgroundImage: "unset",
              boxShadow: prefersDarkMode
                ? "0px 2px 4px -1px rgb(255 255 255 / 9%), 0px 4px 5px 0px rgb(255 255 255 / 9%)"
                : "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%)",
            },
          },
          colorDefault: {
            color: prefersDarkMode ? grayForDark : grayForLight,
          },
        },
      },
      

        // Potentially used for overriding button style, but trying to create SLNButton 
        // // Button
        // MuiButton: {
        //   styleOverrides: {
        //     // Name of the slot
        //     root: {
        //       borderRadius: '30px',
        //       fontSize: '.75rem',
        //       color: 'white',
  
        //     },
        //   },
        // },
    },

    // src/@sln/material/util/createPalette.d.ts
    //
    // usage example: theme.sln.boxShadow
    sln: {
      bannerShadow: prefersDarkMode
        ? `inset 0px 0px 9px 0px ${white}`
        : `0px 0px 9px 0px ${dark}`,
      borderStandard: prefersDarkMode
        ? "rgba(255, 255, 255, 0.18)"
        : "rgba(0, 0, 0, 0.18)",
      defaultDarkBackground: defaultDarkBg,
      defaultLightBackground,
      navText: darkPaperText,
    },
  } as ThemeOptions);

const useGetActiveTheme = () => {
  const osAppearance = useMediaQuery("(prefers-color-scheme: dark)");
  const appearance = "light";

  //@ts-ignore
  return appearance === "dark" || (appearance === "auto" && osAppearance)
    ? "dark"
    : "light";
};

const useGetPreferredTheme = () => {
  const prefersDarkMode = useGetActiveTheme() === "dark" ? true : false;

  // for updating TFD styling
  document.body.setAttribute("appearance", useGetActiveTheme());

  return createTheme(
    getThemeOptions({
      prefersDarkMode,
    })
  );
};

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

export const tssCache = createCache({
  key: "tss",
});

export const SLNThemeProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const theme = useGetPreferredTheme();

  return (
    <CacheProvider value={muiCache}>
      <TssCacheProvider value={tssCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </TssCacheProvider>
    </CacheProvider>
  );
};
