import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react';
  import { useTranslation } from 'react-i18next'
  import { IDeleteModal } from '../../models';
  
  export const  DeleteModal=({ isOpen, onClose, onConfirm }: IDeleteModal) => {
    const { t } = useTranslation()
      return (
         <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor="white" minH={'30vh'}>
          <ModalHeader>{t("DELETE.DELETE")}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
          <Text>
             {t("DELETE.ARE_YOU_SURE")}
          </Text>
          </ModalBody>
             <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                {t("DELETE.NO")}
              </Button>
              <Button onClick={onConfirm} >{t("DELETE.YES")}</Button>
            </ModalFooter>
          </ModalContent>
           </Modal>
    )
  }


  