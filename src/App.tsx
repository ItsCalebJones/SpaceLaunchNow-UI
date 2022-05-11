import React, {useState} from 'react';
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

import {
  Configuration,
  PaginatedLaunchSerializerCommonList,
  LaunchApi,
  BASE_PATH,
  LaunchSerializerCommon
} from "./services/api/"

function App() {
  const configuration = new Configuration({
    basePath: BASE_PATH,
  });

  const launchApi = new LaunchApi(configuration)

  const [launches, setLaunches] = useState<PaginatedLaunchSerializerCommonList | null>(null);

  const onClick = async () => {
    const loadedPosts = await launchApi.launchUpcomingList();
    setLaunches(loadedPosts);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
    </ThemeProvider>
      <header className="App-header">
        <button onClick={onClick}>Get Launches</button>
        {launches && <LaunchItemList launches={launches.results!}/>}
      </header>
    </div>
  );
}

const LaunchItemList = ({ launches }: { launches: LaunchSerializerCommon[] }) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
      </tr>
    </thead>
    <tbody>
      {launches.map(({ name, net, status }) => (
        <tr>
          <td>{name}</td>
          <td>{net?.toDateString()}</td>
          <td>{status?.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default App;
