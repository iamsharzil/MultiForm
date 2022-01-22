import { Box, Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

import { FormButton } from '@components/Form/Button';
import { useOnboard } from '@provider/Onboard';

import theme from '@shared/theme';

export const ThankYouScreen = () => {
  const {
    userInfo: { displayName },
  } = useOnboard();
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box
        width={'4rem'}
        height={'4rem'}
        borderRadius={'50%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        component={'div'}
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <CheckIcon
          fontSize="large"
          sx={{
            color: '#fff',
          }}
        />
      </Box>

      <Box marginTop={'3rem'} />

      <Typography variant="h5" component={'h2'} fontWeight={'bold'}>
        Congratulations, {displayName}!
      </Typography>

      <Box marginTop={'1rem'} />

      <Typography variant="body2" component={'p'}>
        You have completed onboarding, you can start using the Eden!
      </Typography>

      <Box marginTop={'3rem'} />

      <FormButton>
        <Typography textTransform={'capitalize'}>Launch Eden</Typography>
      </FormButton>
    </Box>
  );
};
