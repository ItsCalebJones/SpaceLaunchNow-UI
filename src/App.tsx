import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "@sln/routes";
import Layout from "@sln/components/Layout";
import { SLNThemeProvider } from "@sln/styles";

function App() {

  return (
    <SLNThemeProvider>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </SLNThemeProvider>
  );
}

export default App;