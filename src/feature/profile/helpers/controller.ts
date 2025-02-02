import { toast } from 'react-toastify';
import { IProfileInterface } from '../interface/profileInterface';
import { GetProfileApi, udateProfileApi } from './api';

export const getProfileController = (
   userId: string,
   setProfileData: Function
) => {
   GetProfileApi(userId)
      .then((res: any) => {
         setProfileData(res.data.user);
      })
      .catch((err: any) => {
         console.log(err);
      })
};

export const updateProfileController = (profileData: IProfileInterface, getProfileHandler:Function) => {
   udateProfileApi(profileData)
      .then(() => {
         toast.success('تغییرات اعمال شد.')
         getProfileHandler()
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.')
      })
};
