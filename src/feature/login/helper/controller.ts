import { toast } from 'react-toastify';
import { loginApi } from './api';

export const loginController = (loginData: any, navigate: Function) => {
   loginApi(loginData)
      .then((res: any) => {
         console.log(res);
         localStorage.setItem('token', res.data.token);
         navigate('/');
         toast.success('خوش آمدید.')
      })
      .catch((err: any) => {
         console.log(err);
         toast.error('خطایی رخ داده است.');
      });
};
