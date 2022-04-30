import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
