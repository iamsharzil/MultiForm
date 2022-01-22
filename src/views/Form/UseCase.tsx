import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

import { FormButton } from '@components/Form/Button';

import { useForm } from '@hooks/useForm';

import theme from '@shared/theme';

const useCaseItems = [
  {
    title: 'For Myself',
    Icon: PersonIcon,
    description: `
Write better, Think more clearly, Stay organized`,
  },
  {
    title: 'With my team',
    Icon: GroupsIcon,
    description: `
Write docs, tasks & projects, all in one place`,
  },
];

export const UseCaseForm = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { onSubmit } = useForm();

  const onToggleUseCaseClick = (id: number) => {
    if (id === activeIndex) return;
    setActiveIndex(id);
  };

  const handleSubmit = () => {
    const { Icon, ...rest } = useCaseItems[activeIndex];

    const userInfo = {
      useCase: rest,
    };

    onSubmit(userInfo);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant="h5" component={'h2'} fontWeight={'bold'}>
        How are you planning to use Eden?
      </Typography>

      <Typography variant="body2" component={'p'}>
        We&#39;ll streamline your setup experience accordingly
      </Typography>

      <Box marginTop={'2rem'} />

      <Stack direction="row" spacing={2}>
        {useCaseItems.map(({ title, description, Icon }, id) => (
          <Box
            key={id}
            display={'flex'}
            flexDirection={'column'}
            borderRadius={'5px'}
            padding={'1.5rem'}
            width={['10rem', '12rem']}
            onClick={() => onToggleUseCaseClick(id)}
            sx={{
              cursor: 'pointer',
              border: `1px solid ${
                activeIndex === id
                  ? theme.palette.primary.main
                  : theme.palette.info.main
              }`,
            }}
          >
            <Icon />
            <Box marginTop={'1rem'} />

            <Typography
              variant="body1"
              fontWeight={'bold'}
              component={'span'}
              autoCapitalize="true"
            >
              {title}
            </Typography>

            <Box marginTop={'1rem'} />

            <Typography variant="body2" component={'p'}>
              {description}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Box marginTop={'2rem'} />

      <FormButton onClick={handleSubmit}>
        <Typography textTransform={'capitalize'}>Create Workspace</Typography>
      </FormButton>
    </Box>
  );
};
