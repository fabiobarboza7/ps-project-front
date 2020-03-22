import axios from './api';

export const userLogin = async userData => {
  const { data } = await axios.post('/sessions', userData, {
    withCredentials: true,
  });

  return data;
};
