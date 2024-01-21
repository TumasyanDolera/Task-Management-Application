import { Flex, Stack, Button } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex alignItems={'center'}>
      <Stack direction={'row'} spacing={7} m={1}>
        <Button onClick={toggleColorMode} bg={'purple'}
          _hover={{
            bg: 'purple',
            boxShadow: 'lg'
          }}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Flex>
  )
}

export default ThemeSelector