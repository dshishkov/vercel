import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
let colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

let styles = {
  // global: (props) => ({
  //   'html, body': {
  //     fontSize: 'md',
  //     lineHeight: 'tall',
  //   },
  //   a: {
  //     color: props.colorMode === 'dark' ? 'gray.300' : 'gray.500',
  //   },
  // }),
}

let components = {
  Button: {
    variants: {
      ghost: {
        _hover: {
          bg: 'gray.400',
        },
      },
    },
  },
}

let theme = extendTheme({ colors, styles, components })
export default theme
