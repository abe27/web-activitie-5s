import { useToast } from '@chakra-ui/react';

const ToastMessage = ({timer=2500, title='ข้อความแจ้งเตือน', description='ข้อความ', status='success', position='top-right'}) => {
  const toast = useToast();
  return (
    toast({
      title: title,
      description: description,
      status: status,
      duration: timer,
      position: position,
      isClosable: true,
    })
  );
}

export default ToastMessage;
