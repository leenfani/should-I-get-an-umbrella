import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Playpen"],
  },
});
export function UseTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
