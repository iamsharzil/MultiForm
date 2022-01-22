import { Button, ButtonProps } from '@mui/material';

export const FormButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      sx={{
        height: '3rem',
        width: ['80%', '25rem'],
      }}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
};
