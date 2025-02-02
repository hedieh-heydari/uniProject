import Axiose from '../../../utils/Axios/axios';
import { IProfileInterface } from '../interface/profileInterface';

export const GetProfileApi = async (userId: string) => {
   return Axiose.get(`${import.meta.env.VITE_BASE_URL}users/${userId}`);
};

export const udateProfileApi = async (profileData: IProfileInterface) => {
   return Axiose.put(`${import.meta.env.VITE_BASE_URL}auth/update-profile`, {
      userId: profileData._id,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      birthDate: profileData.birthDate,
      mobile: profileData.mobile
   });
};
