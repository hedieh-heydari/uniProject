import { toast } from 'react-toastify';
import { loginApi } from './api';
import { profileReduce } from '../../../store/profileSlice';

export const loginController = (
   loginData: any,
   navigate: Function,
   setLoading: Function,
   Dispatch:Function
) => {
   setLoading(true);
   loginApi(loginData)
      .then((res: any) => {
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('userId', res.data.user.id)
         navigate('/');
         toast.success('خوش آمدید.');
         Dispatch(profileReduce(res.data.user));
      })
      .catch((err: any) => {
         console.log(err);
         toast.error('خطایی رخ داده است.');
      })
      .catch(() => {
         setLoading(false);
      });
};
