import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Divider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
    const {t} = useTranslation()
  return (
    <Box
      bg={useColorModeValue('purple.400', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>{t("FOOTER.COMPANY")}</ListHeader>
            <Divider orientation='horizontal' w={230}/>
            <Box as="a" href={'#about'}>
            {t("FOOTER.ABOUT_US")}
            </Box>
            <Box >
            <Link to="/about">{t("FOOTER.CONTACT")}</Link>
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>{t("FOOTER.SUPPORT")}</ListHeader>
            <Divider orientation='horizontal' w={230}/>
            <Box as="a" href={'#'}>
            {t("FOOTER.HELP_CENTER")}
            </Box>
            <Box as="a" href={'#'}>
            {t("FOOTER.SAFETY_CENTER")} 
            </Box>
            <Box as="a" href={'#'}>
            {t("FOOTER.COMMUNITY_GUIDELINES")}
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader> {t("FOOTER.FIND_US_ONLINE")}</ListHeader>
            <Divider orientation='horizontal' w={230}/>
            <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader> {t("FOOTER.INSTALL_APP")}</ListHeader>
            <Divider orientation='horizontal' w={270}/>
            <Box pt='1' display ='flex' justifyContent ='space-around' w='180px' h='50px' bg='black' borderRadius='10px'>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54vygnteNlmXHKrD9t0DQLTXFyEvAI8SRd4xDy54&s' bgSize='contain' h='40px'></Image>
              <Text fontSize='21px' color='white'><Link to="" >App Store </Link></Text>
            </Box>
            <Box pt='1' pl='2' display ='flex' justifyContent ='space-around' w='180px' h='50px' bg='black' borderRadius='10px'>
              <Image src='https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png' bgSize='contain' h='40px'></Image>
              <Text fontSize='21px' color='white'><Link to="" >Google Play </Link></Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'none'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'center' }}
          align={ 'center' }>
          <Text>©2023 All rights reserved, Designed and Developed by Brain Fors</Text>
        </Container>
      </Box>
    </Box>
  )
}