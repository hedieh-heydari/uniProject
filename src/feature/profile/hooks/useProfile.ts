import { useEffect, useState } from 'react';
import { getProfileController, updateProfileController } from '../helpers/controller';
import { IProfileInterface } from '../interface/profileInterface';

export const useProfile = () => {
   const uId = localStorage.getItem('userId');
   const [loading, setLoading] = useState<boolean>(true)
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

   const getProfileHandler = () => {
      uId && getProfileController(uId, setProfileData, setLoading);
   };
   const updateProfileHandler =() =>{
    updateProfileController(profileData, getProfileHandler)
   }

   useEffect(() => {
      getProfileHandler();
   }, [uId]);

   return {
      loading,
      profileData,
      setProfileData,
      updateProfileHandler
   };
};
