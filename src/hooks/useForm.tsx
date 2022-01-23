import React from 'react';

import {
  initialState,
  PayloadType,
  useOnboard,
  useOnboardDispatch,
} from '@provider/Onboard';

import { saveInfoInLocalStorage } from '@utils/index';

type useFormType = () => [
  PayloadType,
  {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    onSubmit: () => void;
    onUseCaseClick: ({ useCase }: Pick<PayloadType, 'useCase'>) => void;
  }
];

export const useForm: useFormType = () => {
  const [userInfo, setUserInfo] = React.useState<PayloadType>({});
  const { activeStep } = useOnboard();
  const dispatch = useOnboardDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onUseCaseClick = ({ useCase }: Pick<PayloadType, 'useCase'>) => {
    setUserInfo({ ...userInfo, useCase });
  };

  const onSubmit = () => {
    console.log('submit 1', userInfo);
    dispatch({
      type: 'UPDATE_USER_INFO',
      payload: userInfo,
    });

    dispatch({ type: 'NEXT_STEP' });

    saveInfoInLocalStorage('formInfo', {
      ...userInfo,
      activeStep: activeStep + 1,
    });
  };

  const onReset = () => {
    dispatch({ type: 'RESET' });
    localStorage.removeItem('formInfo');
  };

  return [
    userInfo,
    {
      onChange,
      onReset,
      onSubmit,
      onUseCaseClick,
    },
  ];
};
