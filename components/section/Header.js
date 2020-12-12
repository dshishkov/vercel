import { useState } from 'react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box, Flex, Text, Button,
} from '@chakra-ui/react'
import Logo from 'components/ui/Logo'

let MenuItems = ({
  children, isLast, to = '/', ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    {...rest}
  >
    <Link href={to}>{children}</Link>
  </Text>
)

let Header = (props) => {
  let [show, setShow] = useState(false)
  let toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={['gray.500', 'gray.500', 'transparent', 'transparent']}
      color={['white', 'white', 'gray.500', 'gray.500']}
      {...props}
    >
      <Flex align="center">
        <Logo w="50px" />
      </Flex>

      <Button
        variant="ghost"
        display={{ base: 'block', md: 'none' }}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Button>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/how">How It works </MenuItems>
          <MenuItems to="/features">Features </MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color="gray.500"
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
