import { toast } from "react-toastify";
import { logoutApi } from "./api";

export const logoutController = (
   navigate: Function,
) => {
   logoutApi()
      .then(() => {
         localStorage.removeItem('token');
         localStorage.removeItem('userId');
         navigate('/login');
         window.location.reload();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};