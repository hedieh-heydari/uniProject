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
         toast.success('ثبت نام با موفقیت انجام شد',{ className: 'toast-custom' });
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      })
      .finally(() => {
         setLoading(false);
      });
};
