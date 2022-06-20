import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { routes as appRoutes } from "@sln/routes";

import Home from "@sln/pages/Home";
import About from "@sln/pages/About";
import Starship from "@sln/pages/Starship"
import Events from './pages/EventsListPage';
const RouterComponent = () => {
  return (
    <div>
    <Routes>
        <Route path="/">
          <Route index={true} element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/starship" element={<Starship />} />
          <Route path="launch">
            <Route index={true} element={<LaunchListIndex />}/>
            <Route path=":launchid" element={<Launch />} />
          </Route>
          <Route path="/events" element= {<Events/>}/>
        </Route>
      </Routes>

    </div>
  )
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

export default RouterComponent