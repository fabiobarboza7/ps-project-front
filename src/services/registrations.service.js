import axios from './api';

export const userRegistration = async userData => {
  const { data } = await axios.post('/registrations', userData, {
    withCredentials: true,
  });
  return data;
};
