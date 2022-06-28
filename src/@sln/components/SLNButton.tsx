import {Theme, Typography, Button} from '@mui/material'
import {ButtonProps} from '@mui/material/Button'
import shadows from '@mui/material/styles/shadows'
import { makeStyles } from '@sln/styles'
import boxShadow from '@sln/styles/functions/boxShadow'
import React from 'react'

// TODO build out different button styles
const useStyles = makeStyles()((theme: Theme) => ({
  evtbtn: {
    fontSize: ".75rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
    padding: 12.5,
    // todo: figure out how to add boxshadow 
    // '&:hover': {
    //   backgroundColor: theme.palette.primary.main,
    
    // }
  }
  
  

}))

// creating new type Kind 

type Kind = keyof ReturnType<typeof useStyles>['classes']

const getVariant = (kind: Kind) => {
  return null
}

interface Props {
  kind?: Kind
}

export const SLNButton: React.FC<Props & ButtonProps> = ({
  kind,
  className: userClassName,
  ...rest
}) => {
  const { classes, cx } = useStyles()
    return (
     
    <Button
        className={cx(classes[kind], userClassName)}
        // @ts-ignore - weird ts error but is harmless i think
        variant={getVariant(kind)}
      {...rest}
    />
  )
}
SLNButton.displayName = 'SLNButton'
