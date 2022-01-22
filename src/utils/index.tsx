import { OnboardType } from '@provider/Onboard';

export const saveInfoInLocalStorage = (
  key: 'formInfo',
  value: Partial<OnboardType>
) => {
  let info = JSON.parse(localStorage.getItem(key)!);

  if (info) {
    info = {
      ...info,
      ...value,
    };
  } else {
    info = value;
  }

  localStorage.setItem('formInfo', JSON.stringify(info));
};
