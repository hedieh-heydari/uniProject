import { toast } from 'react-toastify';
import { loginApi } from './api';
import { profileReduce } from '../../../store/profileSlice';

export const loginController = (
   loginData: any,
   navigate: Function,
   Dispatch: Function
) => {
   loginApi(loginData)
      .then((res: any) => {
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('userId', res.data.user.id);
         navigate('/');
         toast.success('خوش آمدید.', { className: 'toast-custom' });
         Dispatch(profileReduce(res.data.user));
         if (res.data.user.firstName !== '') {
            localStorage.setItem('name', res.data.user.firstName);
         }
         window.location.reload();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage =
            err?.response?.data?.message ||
            'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};
