import { toast } from 'react-toastify';
import { signupApi } from './api';

export const signupController = (
   signupData: any,
   navigate: Function,
   setLoading: Function
) => {
   setLoading(true);
   signupApi(signupData)
      .then(() => {
         navigate('/login');
         toast.success('ثبت نام با موفقیت انجام شد');
      })
      .catch((err: any) => {
         console.log(err);
         toast.error('خطایی رخ داده است.');
      })
      .finally(() => {
         setLoading(false);
      });
};
