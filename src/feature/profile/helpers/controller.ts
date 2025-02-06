import { toast } from 'react-toastify';
import { IProfileInterface } from '../interface/profileInterface';
import { GetProfileApi, udateProfileApi } from './api';

export const getProfileController = (
   userId: string,
   setProfileData: Function,
   setLoading:Function
) => {
   GetProfileApi(userId)
      .then((res: any) => {
         setProfileData(res.data.user);
         setLoading(false)
         localStorage.setItem('name', res.data.user.firstName)
      })
      .catch((err: any) => {
         console.log(err);
         setLoading(false)
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const updateProfileController = (profileData: IProfileInterface, getProfileHandler: Function) => {
   udateProfileApi(profileData)
      .then(() => {
         toast.success('تغییرات با موفقیت اعمال شد.');
         getProfileHandler();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در به‌روزرسانی پروفایل رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};
