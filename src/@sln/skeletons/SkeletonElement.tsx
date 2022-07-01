import React from 'react'

import {Stack, Skeleton} from '@mui/material'

const SkeletonElement = ({type}) => {
  // const classes: string = `skeleton ${type}`;

  return (
    <Stack spacing={1.5}>
      <Skeleton/>
    </Stack>
  )
}

export default SkeletonElement