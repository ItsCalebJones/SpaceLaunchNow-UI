import { Theme, Typography } from '@mui/material'
import { TypographyProps } from '@mui/material/Typography'
import { makeStyles } from '@sln/styles'
import React from 'react'

// TODO build out commonly used typography, titles, subtitles, etc
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
    
  // titles
  boldTitle: {
    fontSize: '5rem', // 16px
    fontWeight: 700,
    lineHeight: 1.6,
    color: theme.palette.common.white,
  },
}))

type Kind = keyof ReturnType<typeof useStyles>['classes']

const getVariant = (kind: Kind) => {
  if (kind === 'boldTitle') return 'h1'
  return null
}

interface Props {
  kind?: Kind
}

export const SLNTypography: React.FC<Props & TypographyProps> = ({
  kind,
  className: userClassName,
  ...rest
}) => {
  const { classes, cx } = useStyles()
    return (
     
    <Typography
        className={cx(classes.standard, classes[kind], userClassName)}
        // @ts-ignore - weird ts error but is harmless i think
        variant={getVariant(kind)}
      {...rest}
    />
  )
}
SLNTypography.displayName = 'SLNTypography'
