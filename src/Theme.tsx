import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Playpen",
  },
});

export function UseTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
