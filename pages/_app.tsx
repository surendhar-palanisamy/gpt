import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      drawer: "#002853",
      button: "#FF4820",
    },
  },
})
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme} >
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp

