"use client"

import { createTheme, ThemeProvider as ThemeProviderMui } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "36px"
    }
  }
});

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProviderMui theme={theme}>
      { children }
    </ThemeProviderMui>
  )
};
