import axios from './api';

export const userRegistration = async userData => {
  // console.log(userData);
  const form = new FormData();
  form.append('image', userData.image);
  form.append('email', userData.email);
  form.append('password', userData.password);

  // console.log(form);
  const { data } = await axios.post('/registrations', form, {
    withCredentials: true,
  });
  return data;
};
