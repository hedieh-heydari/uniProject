import { GetProfileApi } from './api';

export const getProfileController = (
   setLoading: Function,
   userId: string,
   setProfileData:Function
) => {
   setLoading(true);
   GetProfileApi(userId)
      .then((res: any) => {
         setProfileData(res.data.user)
      })
      .catch((err: any) => {
         console.log(err);
      })
      .catch(() => {
         setLoading(false);
      });
};
