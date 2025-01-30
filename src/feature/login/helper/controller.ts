import { toast } from 'react-toastify';
import { loginApi } from './api';

export const loginController = (
   loginData: any,
   navigate: Function,
   setLoading: Function
) => {
   setLoading(true);
   loginApi(loginData)
      .then((res: any) => {
         localStorage.setItem('token', res.data.token);
         navigate('/');
         toast.success('خوش آمدید.');
      })
      .catch((err: any) => {
         console.log(err);
         toast.error('خطایی رخ داده است.');
      })
      .catch(() => {
         setLoading(false);
      });
};
