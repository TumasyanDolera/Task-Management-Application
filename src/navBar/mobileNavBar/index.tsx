import { Link } from 'react-router-dom'
import {
  Box,
  Text,
  Stack,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react'

const MobileNav = () => {

  return (
    <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {<Link to="/">Home</Link>}
        </Text>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {<Link to="/about">Contact Us</Link>}
        </Text>

      </Box>

      <Collapse animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default MobileNav