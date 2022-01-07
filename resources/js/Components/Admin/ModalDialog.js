import React from 'react';
import { Button, Input, Textarea, Switch, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';

const ModalDialog = ({ title = "Model Title", isOpen = false, onClose = true, routeLink = null }) => {
  const toast = useToast();
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    is_status: false,
  });

  const submitData = async (e) => {
    e.preventDefault();
    if (data.title.length <= 0) {
      toast({
        title: 'เกิดข้อผิดพลาด',
        description: "กรุณาระบุหัวข้อที่ต้องการบันทึกด้วย",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    else {
      // const postData =
      post(routeLink);
      onClose();
    }
  };

  const changeStatus = (e) => {
    e.preventDefault();
    if (e.target.type == "text") {
      data.title = e.target.value.trim();
    }
    else if (e.target.type == "textarea") {
      data.description = e.target.value.trim();
    }
    else if (e.target.type == "checkbox") {
      data.is_status = !data.is_status;
    }
    console.dir(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="py-2">
              <Input onChange={changeStatus} placeholder='หัวข้อ' />
            </div>
            <div className="py-2">
              <Textarea onChange={changeStatus} placeholder='รายละเอียด/ข้อมูลเพิ่มเติม' />
            </div>
            <div className="py-2">
              <Switch onChange={changeStatus}>เปิดใช้งาน</Switch>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme='blue' mr={3} onClick={submitData}>บันทึก</Button>
            <Button colorScheme='red' variant='ghost' onClick={onClose}>ยกเลิก</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDialog;
