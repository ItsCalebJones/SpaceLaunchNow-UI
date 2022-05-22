import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { SLNThemeProvider } from "@sln/styles";
import RouterComponent from "@sln/RouterComponent";


function App() {

  return (
    <SLNThemeProvider>
      <CssBaseline />
        <RouterComponent/>
    </SLNThemeProvider>
  );
}




export default App;