//global styling page for next.js *Special*
import React from 'react'
import {ThemeProvider} from 'theme-ui'
//ex import 'cal.ss'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>  
  )
}