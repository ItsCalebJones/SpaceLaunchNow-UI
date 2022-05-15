// src/pages/Home.tsx
import React, {ReactElement, FC, useState} from "react";
import { Box, Button, Typography } from "@mui/material";

import {
    Configuration,
    PaginatedLaunchSerializerCommonList,
    LaunchApi,
    BASE_PATH,
    LaunchSerializerCommon,
  } from "../services/api";

const Home: FC<any> = (): ReactElement => {

    const configuration = new Configuration({
        basePath: BASE_PATH,
      });
    
      const launchApi = new LaunchApi(configuration);
    
      const [launches, setLaunches] =
        useState<PaginatedLaunchSerializerCommonList | null>(null);
    
      const onClick = async () => {
        const loadedPosts = await launchApi.launchUpcomingList();
        setLaunches(loadedPosts);
      };
    
      const title = "Get Launches"
    
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Home</Typography>
            <Button 
            variant="contained"
            onClick={(e) => onClick()}
          >
            Clickable - passes prop
          </Button>
            {launches && <LaunchItemList launches={launches.results!} />}
            
        </Box>
    );
};

const LaunchItemList = ({
    launches,
  }: {
    launches: LaunchSerializerCommon[];
  }) => (
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

export default Home;