import {
  PersonalDetailsForm,
  ThankYouScreen,
  UseCaseForm,
  WorkspaceForm,
} from '@views/Form';

import { useOnboard } from '@provider/Onboard';

export const OnboardBody = () => {
  const { activeStep } = useOnboard();

  switch (activeStep) {
    case 0:
      return <PersonalDetailsForm />;

    case 1:
      return <WorkspaceForm />;

    case 2:
      return <UseCaseForm />;

    case 3:
      return <ThankYouScreen />;

    default:
      return null;
  }
};
