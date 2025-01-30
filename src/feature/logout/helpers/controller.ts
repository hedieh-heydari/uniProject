import { toast } from "react-toastify";
import { logoutApi } from "./api";

export const logoutController = (
   navigate: Function,
) => {
   logoutApi()
      .then(() => {
         localStorage.removeItem('token');
         navigate('/login');
      })
      .catch((err: any) => {
         console.log(err);
         toast.error('خطایی رخ داده است.');
      })
};