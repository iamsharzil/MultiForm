import React from 'react';

import { Box, TextField, Typography } from '@mui/material';

import { FormButton } from '@components/Form/Button';
import { FormInput, FormLabel } from '@components/Form/Input';

import { useForm } from '@hooks/useForm';

export const WorkspaceForm = () => {
  const [
    { workspaceName = 'Eden', workspaceUrl = 'example' },
    { onChange, onSubmit },
  ] = useForm();

  const handleSubmit = () => {
    if (!workspaceName || !workspaceUrl) {
      return;
    }

    onSubmit();
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant="h5" component={'h2'} fontWeight={'bold'}>
        Let&#39;s setup a home for all your work
      </Typography>

      <Box marginTop={'1rem'} />

      <Typography variant="body2" component={'p'}>
        You can always create another workspace later
      </Typography>

      <Box marginTop={'2rem'} />

      <FormInput>
        <FormLabel htmlFor="workspaceName">Workspace Name</FormLabel>
        <TextField
          id="workspaceName"
          name="workspaceName"
          value={workspaceName}
          onChange={onChange}
          error={!workspaceName}
        />
      </FormInput>

      <Box marginTop={'2rem'} />

      <FormInput>
        <FormLabel htmlFor="workspaceUrl" optional={true}>
          Workspace URL
        </FormLabel>
        <Box display={'flex'} alignContent={'center'}>
          <TextField
            id="url"
            variant="filled"
            required={false}
            defaultValue={'www.eden.com/'}
            disabled
            sx={{
              position: 'absolute',
              width: ['9.5rem'],

              '.MuiFilledInput-root': {
                input: {
                  padding: '16.5px 14px',
                },

                '&::before': {
                  borderBottom: '0px',
                },

                '.Mui-disabled': {
                  backgroundColor: '#f5f5f5',
                },
              },
            }}
          />
          <TextField
            id="workspaceUrl"
            name="workspaceUrl"
            value={workspaceUrl}
            onChange={onChange}
            error={!workspaceUrl}
            sx={{
              flex: 1,

              '.MuiInputBase-input': {
                paddingLeft: '10rem',
              },
            }}
          />
        </Box>
      </FormInput>

      <Box marginTop={'2rem'} />

      <FormButton onClick={handleSubmit}>
        <Typography textTransform={'capitalize'}>Create Workspace</Typography>
      </FormButton>
    </Box>
  );
};
