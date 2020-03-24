import axios from './api';

export const userRegistration = async userData => {
  const form = new FormData();
  form.append('name', userData.name);
  form.append('image', userData.image);
  form.append('email', userData.email);
  form.append('password', userData.password);

  const { data } = await axios.post('/registrations', form, {
    withCredentials: true,
  });
  return data;
};
