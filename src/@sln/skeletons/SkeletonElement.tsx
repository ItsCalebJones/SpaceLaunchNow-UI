import React from 'react'

import {Stack, Skeleton, Typography, Grid, Box, Card, Chip, Button} from '@mui/material'
import { SLNTypography } from '@sln/components/SLNTypography'
import { Container } from '@mui/system'


const SkeletonElement = ({limit}) => {
  // const classes: string = `skeleton ${type}`;
  const n = limit
  return (
    <Container>
        {n  && [...Array(n)].map((elementInArray, index) => (
        <Stack direction="row" spacing={1.5} mt={5}> 
          <Box width={368.88} height={250}><Skeleton variant='rectangular' width='100%' height='100%' animation='wave'/></Box>
          <Grid container rowSpacing={0.2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <Grid item xs="auto">
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={100}/>
                  </Typography>
              </Grid>
              <Grid item xs="auto">
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={170}/>
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant='h3'>
                    <Skeleton variant='text' animation='wave' width={700}/>
                  </Typography>
              </Grid>
              <Grid item xs='auto'>
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={170}/>
                  </Typography>
              </Grid>
              <Grid item xs='auto'>
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={170}/>
                  </Typography>
              </Grid>
              <Grid item xs='auto'>
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={170}/>
                  </Typography>
              </Grid>
              <Grid item xs='auto'>
                  <Typography>
                    <Skeleton variant='text' animation='wave' width={170}/>
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>
                  <Skeleton variant='text' animation='wave' width={700}/>
                  </Typography>
                  <Typography>
                  <Skeleton variant='text' animation='wave' width={700}/>
                  </Typography>
                  <Typography>
                  <Skeleton variant='text' animation='wave' width={700}/>
                  </Typography>
                  <Typography>
                  <Skeleton variant='text' animation='wave' width={100}/>
                  </Typography>
              </Grid>
          </Grid>
        </Stack>  
    ))}
  </Container>        
  )
}

export default SkeletonElement