import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { InputForm } from '../../components/molecule';
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddTask } from '../../models';
import { FormControl, Select, FormLabel, } from '@chakra-ui/react';
import { useEffect } from 'react'
import { IEditModal } from '../../models';
import { formatDateString } from '../../helpers';
import { useAppDispatch } from '../../hooks/redux';
import { UpdateTask } from '../../redux_toolkit/services';

export const EditModal = ({ isOpen, onClose, onConfirm, task }: IEditModal) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm<IAddTask>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IAddTask> = (newData) => {
    console.log(newData)

    dispatch(UpdateTask({ id: newData.id, task: newData }))
    onConfirm()

  };

  useEffect(() => {
    if (task) {
      setValue("id", task.id)
      setValue('title', task.title);
      setValue('description', task.description);
      setValue("dueDate", formatDateString(task.dueDate));
      // setValue('status', task.status);
    }
  }, [task]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent bgColor="pink" minH={'70vh'}>
            <ModalHeader>{t("EDIT.EDIT")}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <FormControl id="Title" isRequired >
                <InputForm
                  text={t("ADD_TASK.TITLE")}
                  type="text"
                  placeholder="Enter Title *"
                  size="md"
                  register={{
                    ...register("title", {
                      required: true
                    })
                  }}
                />
              </FormControl>
              <FormControl id="description" isRequired >
                <InputForm
                  text={t("ADD_TASK.DESCRIPTION")}
                  type="textarea"
                  placeholder="Description*"
                  size="md"
                  register={{
                    ...register("description", {
                      required: true
                    })
                  }}
                />
              </FormControl>
              <FormControl id="dueDate" isRequired >
                <InputForm
                  text={t("ADD_TASK.START_DATE")}
                  type="date"
                  placeholder="Start date*"
                  size="md"
                  register={{
                    ...register("dueDate")
                  }}
                />
              </FormControl>
              <FormControl id="status" isRequired >
                <FormLabel>{t("ADD_TASK.STATUS")}</FormLabel>
                <Select {...register("status", { required: true })} textDecor="Select" >
                  <option value="ToDo">{t("ADD_TASK.TODO")}</option>
                  <option value="in process">{t("ADD_TASK.IN_PROGRESS")}</option>
                  <option value="done">{t("ADD_TASK.DONE")}</option>
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                {t("EDIT.CLOSE")}
              </Button>
              <Button variant='ghost' type='submit' >{t("EDIT.EDETEDIT")} </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>

    </>
  )
}