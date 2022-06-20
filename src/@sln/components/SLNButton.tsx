import { Theme, Typography, Button} from '@mui/material'
import { ButtonProps } from '@mui/material/Button'
import { makeStyles } from '@sln/styles'
import React from 'react'

// TODO build out different button styles
const useStyles = makeStyles()((theme: Theme) => ({
  standard: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.43,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    margin: 0,
    padding: 0,
  },
  
  

}))

type Kind = keyof ReturnType<typeof useStyles>['classes']

const getVariant = (kind: Kind) => {
//   if (kind === 'boldTitle') return 'h1'
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
        className={cx(classes.standard, classes[kind], userClassName)}
        // @ts-ignore - weird ts error but is harmless i think
        variant={getVariant(kind)}
      {...rest}
    />
  )
}
SLNButton.displayName = 'SLNButton'
