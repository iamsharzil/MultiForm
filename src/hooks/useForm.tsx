import { PayloadType, useOnboard, useOnboardDispatch } from '@provider/Onboard';

import { saveInfoInLocalStorage } from '@utils/index';

export const useForm: () => {
  onSubmit: (userInfo: PayloadType) => void;
  onReset: () => void;
} = () => {
  const { activeStep } = useOnboard();
  const dispatch = useOnboardDispatch();

  const onSubmit = (userInfo: PayloadType) => {
    dispatch({ type: 'UPDATE_USER_INFO', payload: userInfo });
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

  return {
    onSubmit,
    onReset,
  };
};
