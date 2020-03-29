import axios from './api';

export const adviserCreate = async adviserData => {
  const { data } = await axios.post(
    '/advisers',
    { data: adviserData },
    {
      withCredentials: true,
    }
  );

  return data;
};
