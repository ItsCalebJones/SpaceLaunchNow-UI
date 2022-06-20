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
  
  buttonText: {
    color: "white",
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.6,
  },

  subButtonText: {
    color: "black",
    fontSize: '.8125rem',
    fontWeight: 300,
    lineHeight: 1.4,
    textTransform: "none",
  },
    
  boldTitleWhite: {
    fontSize: '5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.common.white,
  },

  subTitleWhite: {
    fontSize: '3rem',
    fontWeight: 200,
    lineHeight: 1.2,
    color: theme.palette.common.white,
  }, 

  sectionTitleWhite: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.common.white,
  },

  // titles
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
  },

  boldTitle: {
    fontSize: '5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
  },
  // event card fonts 
  eventCategory: {
    fontSize: '.75rem',
    fontWeight: 500,
    lineHeight: 0,
    color: '#00bcd4!important',
    textTransform: 'uppercase',
  },
  eventDate: {
    fontSize: '.75rem',
    fontWeight: 500,
    lineHeight: 0,
    color: '#999',
    textTransform: 'uppercase',
  },
  eventTitle: {
    fontSize: '1.5625rem',
    fontWeight: 700,
    lineHeight: 0,
    color: '#3c4858',
  }


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
        uppercase={false}
      {...rest}
    />
  )
}
SLNTypography.displayName = 'SLNTypography'
