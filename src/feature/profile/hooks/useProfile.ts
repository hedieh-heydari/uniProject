import { useEffect, useState } from 'react';
import { getProfileController, updateProfileController } from '../helpers/controller';
import { IProfileInterface } from '../interface/profileInterface';

export const useProfile = () => {
   const uId = localStorage.getItem('userId');
   const [profileData, setProfileData] = useState<IProfileInterface>({
      birthDate: '',
      completedProfile: false,
      createdAt: '',
      email: '',
      firstName: '',
      lastName: '',
      mobile: '',
      nationalCode: '',
      updatedAt: '',
      __v: 0,
      _id: ''
   });

   console.log(profileData)

   const getProfileHandler = () => {
      uId && getProfileController(uId, setProfileData);
   };
   const updateProfileHandler =() =>{
    updateProfileController(profileData, getProfileHandler)
   }

   useEffect(() => {
      getProfileHandler();
   }, [uId]);

   return {
      profileData,
      setProfileData,
      updateProfileHandler
   };
};
