import { useReducer } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import LandlordReducers from '../../reducers/landlord/LandlordReducers';

export const useAddListing = () => {
  const [
    {
      isActivating,
    },
    dispatch,
  ] = useReducer(LandlordReducers, {
    isActivating: false,
  
  });


  const addListing = async (data) => {
    console.log(data, 'data');
    dispatch({ type: "START_ACTIVATING_ACCOUNT" });
    try {
      const response = await axios.post(`${"https://tokunbojamesandco.herokuapp.com/api/api/v1/landlord"}`, data);
      console.log(response.data);
      if (
        response.data
      ) {
        toastr.success('User has been created!');
      
        dispatch({ type: "STOP_ACTIVATING_ACCOUNT" });
      }
    } catch (e) {
   
        toastr.info('Something went wrong!');
        dispatch({ type: "STOP_ACTIVATING_ACCOUNT" });
      }
  };

  


  return {
    isActivating,
    addListing,
  };
};

export default useAddListing;
