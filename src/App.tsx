import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { SLNThemeProvider } from "@sln/styles";
import RouterComponent from "@sln/RouterComponent";
import axios, { Axios } from "axios";
import { QueryClient, QueryClientProvider } from 'react-query';

axios.defaults.baseURL = 'https://spacelaunchnow.me/api/ll/';
// TODO figure out how to secretly handle this
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <SLNThemeProvider>
        <CssBaseline />
          <RouterComponent/>
        </SLNThemeProvider>
    </QueryClientProvider>
  );
}




export default App;