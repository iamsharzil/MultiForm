import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/system';

import { useOnboard } from '@provider/Onboard';

import theme from '@shared/theme';

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
}));

export const OnboardStepper = () => {
  const { activeStep } = useOnboard();

  return (
    <Box maxWidth={['20rem']} margin={'0 auto'}>
      <Stepper activeStep={activeStep} connector={<QontoConnector />}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Step key={i}>
            <StepLabel
              sx={{
                '.MuiSvgIcon-root': {
                  fill: '#fff',
                  strokeWidth: '0',
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  border: '1px solid #ddd',

                  text: {
                    fontSize: '0.6rem',
                    fill: '#999797',
                  },

                  '&.Mui-completed': {
                    fill: `${theme.palette.primary.main}`,
                    strokeWidth: '0',
                    border: 'none',

                    text: {
                      fill: '#fff',
                    },
                  },

                  '&.Mui-active': {
                    fill: `${theme.palette.primary.main}`,
                    strokeWidth: '0',
                    border: 'none',

                    text: {
                      fill: '#fff',
                    },
                  },
                },
              }}
            ></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
