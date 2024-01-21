import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { GetTask, GetSingleTask } from '../../../redux_toolkit/services'
import { Loading } from '../../../loading'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import moment from 'moment'

const SingleTask = ({ singleTaskId }: any) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.taskReduser.loading);
  const singleTask = useAppSelector((state) => state.taskReduser.singleTask)
  useEffect(() => {
    dispatch(GetSingleTask(singleTaskId))
  }, [dispatch])

  if (loading) {
    return <Loading />;
  }
  const handleGetTask = () => {
    dispatch(GetTask())
  }
  
  return (
      <>
          <Center py={20}>
            <Box
              maxW={'320px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}
              _after={{
                w: 'md',

              }}>
              <Stack spacing={[1, 5]} direction={['column', 'row']} display='Flex' justifyContent='end'>
                <Checkbox size='md' colorScheme='blue'>
                </Checkbox>
              </Stack>
              <Avatar
                size={'xl'}
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
                mb={4}
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
              <Heading fontSize={'2xl'} fontFamily={'body'}>{singleTask.title}</Heading>
              <Text
                mt='7'>
                {t("TASK.TASK_START_DATA")}{moment(singleTask.dueDate).format(' DD.MM.YYYY')} </Text>
              <Text mt='2'> {t("TASK.TASK_STATUS")}{singleTask.status}</Text>
              <Text
                mt='2'
                px={3}>
                {t("TASK.TASK_DESCRIPTION")}{singleTask.description}
              </Text>
              <Stack direction={'row'} spacing={4}>
              <Button
              onClick={handleGetTask}
              marginTop={'100'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              w={150}
              px={6}
              ml={'60px'}
              colorScheme={'white'}
              bg={'pink.500'}
              _hover={{ bg: 'pink.800' }}>
              <Link to="/programmertask"> {t("USER.ALL_TASKS")} </Link>
            </Button>
              </Stack>
            </Box>
          </Center>
      </>
  )
}

export default SingleTask
