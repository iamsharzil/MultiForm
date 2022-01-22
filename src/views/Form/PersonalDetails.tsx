import React from 'react';

import { Box, TextField, Typography } from '@mui/material';

import { FormButton } from '@components/Form/Button';
import { FormInput, FormLabel } from '@components/Form/Input';

import { useForm } from '@hooks/useForm';

export const PersonalDetailsForm = () => {
  const [fullName, setFullName] = React.useState('Steve Jobs');
  const [displayName, setDisplayName] = React.useState('Steve');

  const { onSubmit } = useForm();

  const onChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const onChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleSubmit = () => {
    if (!fullName || !displayName) {
      return;
    }

    const userInfo = {
      fullName,
      displayName,
    };

    onSubmit(userInfo);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant="h5" component={'h2'} fontWeight={'bold'}>
        Welcome! First things first...
      </Typography>

      <Box marginTop={['1rem']} />

      <Typography variant="body2" component={'p'}>
        You can always change them later.
      </Typography>

      <Box marginTop={['2rem']} />

      <FormInput>
        <FormLabel htmlFor="fullName">Full Name</FormLabel>
        <TextField
          value={fullName}
          onChange={onChangeFullName}
          error={!fullName}
          id="fullName"
        />
      </FormInput>

      <Box marginTop={['2rem']} />

      <FormInput>
        <FormLabel htmlFor="displayName">Display Name</FormLabel>
        <TextField
          value={displayName}
          onChange={onChangeDisplayName}
          error={!displayName}
          id="displayName"
        />
      </FormInput>

      <Box marginTop={['2rem']} />

      <FormButton onClick={handleSubmit}>
        <Typography textTransform={'capitalize'}>Create Workspace</Typography>
      </FormButton>
    </Box>
  );
};
