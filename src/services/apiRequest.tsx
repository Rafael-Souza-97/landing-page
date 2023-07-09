import IUser from '@/interfaces/IUser';
import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestEmail = async (body: IUser) => {
  try {
    const { data } = await api.post('http://localhost:3001/contact', body);
    console.log('retorno da api', data);
    return data;
  } catch (error: any) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export default requestEmail;
