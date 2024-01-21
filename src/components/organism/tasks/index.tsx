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
import { DeleteTask, GetTask, UpdateTask, GetSingleTask } from '../../../redux_toolkit/services'
import { useEffect } from 'react'
import { Loading } from '../../../loading'
import { EditModal } from '../../../confirmModal/editModal'
import { DeleteModal } from '../../../confirmModal/deleteModal'
import { useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Task = () => {

  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.taskReduser.tasks);
  const loading = useAppSelector((state) => state.taskReduser.loading);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [edetedId, setEdetedId] = useState(null)

  const handleDeleteTask = () => {
    dispatch(DeleteTask(deleteId))
    setDeleteModalOpen(false);
    setTimeout(() => {
      dispatch(GetTask());
    }, 250)
  }
  const handleGetSingleTask = (item: any) => {
    dispatch(GetSingleTask(item.id));
  };

  const handleEdetTask = () => {
    dispatch(UpdateTask(edetedId))
    setIsEditModalOpen(false)
    setTimeout(() => {
      dispatch(GetTask());
    }, 250)
    
  }

  useEffect(() => {
    dispatch(GetTask());
  }, []);

  if (loading) {
    return <Loading />;
  }
  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleOpenEditModal = (task: any) => {
    setIsEditModalOpen(true);
    setEditTaskData(task);
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <>
      {tasks && tasks.data?.length > 0 ? (
        tasks?.data.map((task: any) => (
          <Center py={20} key={task.id} >
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
              <Heading fontSize={'2xl'} fontFamily={'body'}>{task.title}</Heading>
              <Text
                mt='7'>
                {t("TASK.TASK_START_DATA")}{moment(task.dueDate).format(' DD.MM.YYYY')} </Text>
              <Text mt='2'> {t("TASK.TASK_STATUS")}{task.status}</Text>
              <Text
                mt='2'
                px={3}>
                {t("TASK.TASK_DESCRIPTION")}{task.description}
              </Text>
              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  onClick={() => {
                    setDeleteId(task.id);
                    handleOpenDeleteModal()
                  }}
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  {t("TASK.TASK_DELEDTE")}
                </Button>
                <Button
                  onClick={() => {
                    handleGetSingleTask(task)
                    console.log(task, "task");
                  }}
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}><Link to={`/user/programmertask/${task.id}`}> SingleTask</Link>

                </Button>
                <Button
                  onClick={() => {
                    setEdetedId(task.id)
                    handleOpenEditModal(task)
                  }}
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  {t("TASK.TASK_EDET")}

                </Button>
              </Stack>
            </Box>
          </Center>)
        )
      ) : (
        <Box>No tasks available.</Box>
      )

      }
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteTask} />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        task={editTaskData}
        onConfirm={handleEdetTask} />
    </>
  )
}

export default Task