import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfileController } from '../helpers/controller';
import { IProfileInterface } from '../interface/profileInterface';

export const useProfile = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const userID = useSelector((state: any) => state.profile.person?.id);
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
      getProfileController(setLoading, userID, setProfileData);
   };

   useEffect(() => {
      getProfileHandler();
   }, [userID]);

   return {
      loading,
      setLoading,
      profileData,
      setProfileData
   };
};
