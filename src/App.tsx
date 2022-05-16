import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { routes as appRoutes } from "@sln/routes";
import { SLNThemeProvider } from "@sln/styles";


import Home from "@sln/pages/Home";
import About from "@sln/pages/About";
import Starship from "@sln/pages/Starship"

function App() {

  return (
    <SLNThemeProvider>
      <CssBaseline />
        <Routes>
        <Route path="/">
          <Route index={true} element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/starship" element={<Starship />} />
          <Route path="launch">
            <Route index={true} element={<LaunchListIndex />}/>
            <Route path=":launchid" element={<Launch />} />
          </Route>
        </Route>
      </Routes>
    </SLNThemeProvider>
  );
}

function LaunchList() {
  return (
    <div> Launch List</div>
  )
}

function Launch() {
  let { launchid } = useParams();

  return (
    <div> Launch ID: {launchid}</div>
  )
}

function LaunchListIndex() {
  return (
    <div> Launch List Index</div>
  )
}

export default App;