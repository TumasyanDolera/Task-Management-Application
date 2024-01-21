import { useState } from 'react';
import { Button, Input, FormControl, FormLabel, Box, Alert, AlertIcon, Center } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ChangePassword } from '../../../redux_toolkit/services';

const ChangePasswordButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.userAuth.loading);
  const error = useAppSelector((state) => state.userAuth.error);
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    dispatch(ChangePassword(newPassword));
  };

  return (
    <Center>
    <Box height={'500'}>
      <FormControl mt={'150'}>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          value={newPassword}
          placeholder="Enter New Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </FormControl>
      <Button
        mt={4}
        colorScheme="blue"
        isLoading={loading}
        onClick={handleChangePassword}
      >
        Change Password
      </Button>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Box>
    </Center>
  );
};

export default ChangePasswordButton;