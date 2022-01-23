import { Box, TextField, Typography } from '@mui/material';

import { FormButton } from '@components/Form/Button';
import { FormInput, FormLabel } from '@components/Form/Input';

import { useForm } from '@hooks/useForm';

export const PersonalDetailsForm = () => {
  const [
    { fullName = 'Steve Jobs', displayName = 'Steve' },
    { onSubmit, onChange },
  ] = useForm();

  const handleSubmit = () => {
    if (!fullName || !displayName) {
      return;
    }
    onSubmit();
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
          onChange={onChange}
          error={!fullName}
          id="fullName"
          name="fullName"
        />
      </FormInput>

      <Box marginTop={['2rem']} />

      <FormInput>
        <FormLabel htmlFor="displayName">Display Name</FormLabel>
        <TextField
          value={displayName}
          onChange={onChange}
          error={!displayName}
          id="displayName"
          name="displayName"
        />
      </FormInput>

      <Box marginTop={['2rem']} />

      <FormButton onClick={handleSubmit}>
        <Typography textTransform={'capitalize'}>Create Workspace</Typography>
      </FormButton>
    </Box>
  );
};
