import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

const color = theme('mode', {
  light: '#000',
  dark: '#80A6E4'
})

const Box = styled.div`
  background-color: ${boxBackgroundColor};
  color: ${color};
`

export default (props) =>
  <ThemeProvider theme={{ mode: props.mode }}>
    <Box>Hello World</Box>
  </ThemeProvider>
