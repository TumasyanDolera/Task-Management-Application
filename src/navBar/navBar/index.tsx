import { Link, Outlet } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { MobileNav } from '..'
import { ThemeSelector } from '../../components/molecule'
import Translate from '../../i18n/i18Next'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { removeAccessToken } from '../../helpers'
import { removeRefreshToken } from '../../helpers/cookies'


const Layout = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { t } = useTranslation()

  const handleLogOut = () => {
    removeAccessToken()
    removeRefreshToken()
    window.location.reload();
  }

  return (
    <>
      <Box>
        <Box>
          <Flex
            bg={("purple")}
            color={useColorModeValue('gray.600', 'white')}
            minH={'90px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={('white')}>
                <Box w={20}>
                  <Image src='https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png' alt='Logo' />
                </Box>
              </Text>
              <Flex display={{ base: 'none', md: 'flex' }} color={'white'} ml={5} fontSize={'lg'} mt={6} >
                <Box ml={10}><Link to="/">{t("NAV_BAR.HOME")}</Link></Box>
                <Box ml={10}><Link to="about">{t("NAV_BAR.CONTACT_US")}</Link></Box>
              </Flex>
            </Flex>
            <Translate />
            <ThemeSelector />
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                onClick={handleLogOut}
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'lg'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                _hover={{
                  bg: 'pink.300',
                }}>
                <Link to="/login">{t("NAV_BAR.SIGN_OUT")}</Link>
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'lg'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                _hover={{
                  bg: 'pink.300',
                }}>
                <Link to="/user">User</Link>
              </Button>
            </Stack>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </Box>
      <Outlet />

    </>
  )
}

export default Layout




