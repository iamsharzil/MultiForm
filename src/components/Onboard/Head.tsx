import SpaIcon from '@mui/icons-material/Spa';
import { Stack, Typography } from '@mui/material';

export const OnboardHead = () => {
  return (
    <Stack
      spacing={2}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <SpaIcon color="primary" fontSize="large" />
      <Typography
        component={'h1'}
        variant={'h4'}
        fontWeight={'bold'}
        textAlign={'center'}
      >
        Eden
      </Typography>
    </Stack>
  );
};
