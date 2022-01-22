import { OnboardType } from '@provider/Onboard';

export const saveInfoInLocalStorage = (
  key: 'formInfo',
  value: Partial<OnboardType>
) => {
  let info = localStorage.getItem(key);

  if (info) {
    info = {
      ...JSON.parse(info),
      ...value,
    };
    localStorage.setItem('formInfo', JSON.stringify(info));
    return;
  }

  localStorage.setItem('formInfo', JSON.stringify(value));
};
