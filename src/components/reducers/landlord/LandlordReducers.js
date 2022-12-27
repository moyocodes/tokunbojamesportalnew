
export const LandlordReducers = (state, action) => {
  const { type } = action;
  switch (type) {

    
    case "START_ACTIVATING_ACCOUNT":
      return {
        ...state,
        isActivating: true,
      };

    case "STOP_ACTIVATING_ACCOUNT":
      return {
        ...state,
        isActivating: false,
      };

    default:
      return state;
  }
};

export default LandlordReducers;
