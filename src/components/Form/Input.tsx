import { Box, BoxProps, FormLabelProps, Typography } from '@mui/material';

export const FormInput = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={['80%', '25rem']}
      {...props}
    >
      {children}
    </Box>
  );
};

type LabelType = FormLabelProps & { optional?: boolean };

export const FormLabel = ({
  children,
  optional = false,
  ...props
}: LabelType) => {
  return (
    <Typography component={'label'} marginBottom={'0.5rem'} {...props}>
      {children}
      <Typography variant="body2" component={'span'}>
        {optional && ' (optional)'}
      </Typography>
    </Typography>
  );
};
