import {
  Container,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Button,
  Box
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { GetTask, GetUser } from '../../../redux_toolkit/services';
import { useEffect } from 'react';
import { Loading } from '../../../loading';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { formatDateString } from '../../../helpers';
import { IAddTask } from '../../../models';




const UserProfile = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.UserReducer.user)


  const loading = useAppSelector((state) => state.UserReducer.loading)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(GetUser())
  }, [dispatch])

  if (loading === true) return <Loading />

  const handleGetTask = () => {
    dispatch(GetTask())
  }

  return user ? (

    <Container maxW={'full'} bg={"pink.200"} height={"550"}>
      <Center>
        <VStack>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            mb={2}
            marginTop={"10"}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading >{user.firstName} {user.lastName}</Heading>
          <Heading fontSize={20} >{user.email} </Heading>
          <Heading fontSize="lg">{t("USER.ROLE")} {user.role}</Heading>
          <Text fontSize="lg">{t("USER.CREATED_AT")} {formatDateString(user.createdAt)} </Text>
          <Text fontSize="lg">{t("USER.UPDATED_AT")} {formatDateString(user.updatedAt)}</Text>
          <HStack>
            <Button
              marginTop={'100'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              w={150}
              px={6}
              colorScheme={'white'}
              bg={'pink.500'}
              _hover={{ bg: 'pink.800' }}>
              <Link to="task"> {t("USER.ADD_TASK")}</Link>
            </Button>
            <Button
              onClick={handleGetTask}
              marginTop={'100'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              w={150}
              px={6}
              colorScheme={'white'}
              bg={'pink.500'}
              _hover={{ bg: 'pink.800' }}>
              <Link to="programmertask"> {t("USER.ALL_TASKS")} </Link>
            </Button>
            <Button
              marginTop={'100'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              w={150}
              px={6}
              colorScheme={'white'}
              bg={'pink.500'}
              _hover={{ bg: 'pink.800' }}>
              <Link to="changepassword"> {t("USER.CHANGEPASS")} </Link>
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Container>
  ) :
    (<Box textAlign="center" fontSize="xl" mt={8} color="gray.500">
      {t("USER.USER_NOT_FOUND")}
    </Box>

    )
}

export default UserProfile


