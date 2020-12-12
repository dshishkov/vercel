import { ChakraProvider, Stack, Box } from '@chakra-ui/react'
import Header from 'components/section/Header'
import theme from '../util/theme'

let MyApp = ({ Component, pageProps: { showNav = true, ...pageProps } }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Stack maxW="1200px" m="auto">
      {showNav && <Header />}
      <Box p={4}>
        <Component {...pageProps} />
      </Box>
    </Stack>
  </ChakraProvider>
)

export default MyApp
