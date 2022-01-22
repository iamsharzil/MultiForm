import { Box } from '@mui/material';

import { OnboardBody, OnboardHead, Stepper } from '@components/Onboard';

import { OnboardProvider } from '@provider/Onboard';

export const Onboard = () => {
  return (
    <Box maxWidth={['100%', '30rem']} margin={'15% auto'} padding={'1rem'}>
      <OnboardHead />
      <Box marginTop={['3rem', '3rem', '4rem']} />
      <OnboardProvider>
        <Stepper />
        <Box marginTop={['3rem', '3rem', '4rem']} />
        <OnboardBody />
      </OnboardProvider>
    </Box>
  );
};
