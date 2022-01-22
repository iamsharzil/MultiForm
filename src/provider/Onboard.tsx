import React from 'react';

const initialState = {
  activeStep: 0,
  userInfo: {
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    useCase: {
      title: '',
      description: '',
    },
  },
};

export type OnboardType = typeof initialState;
export type PayloadType = Partial<typeof initialState.userInfo>;

type ACTIONTYPE =
  // | { type: 'PREV_STEP' }
  | { type: 'NEXT_STEP' }
  | { type: 'RESET' }
  | {
      type: 'UPDATE_USER_INFO';
      payload: PayloadType;
    };

type OnboardDispatchType = React.Dispatch<ACTIONTYPE>;

const OnboardContext = React.createContext<OnboardType | null>(null);

const OnboardDispatchContext = React.createContext<OnboardDispatchType | null>(
  null
);

const onboardReducer = (state = initialState, action: ACTIONTYPE) => {
  const { type } = action;
  switch (type) {
    // case 'PREV_STEP':
    //   return {
    //     ...state,
    //     activeStep: state.activeStep - 1,
    //   };

    case 'NEXT_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };

    case 'RESET':
      return {
        ...state,
        activeStep: 0,
      };

    case 'UPDATE_USER_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload,
        },
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export const OnboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(onboardReducer, initialState);

  return (
    <OnboardDispatchContext.Provider value={dispatch}>
      <OnboardContext.Provider value={state}>
        {children}
      </OnboardContext.Provider>
    </OnboardDispatchContext.Provider>
  );
};

export const useOnboard = () => {
  const context = React.useContext(OnboardContext);

  if (!context) {
    throw new Error('useOnboard must be used within a OnboardProvider');
  }

  return context;
};

export const useOnboardDispatch = () => {
  const context = React.useContext(OnboardDispatchContext);

  if (!context) {
    throw new Error('useOnboardDispatch must be used within a OnboardProvider');
  }

  return context;
};
