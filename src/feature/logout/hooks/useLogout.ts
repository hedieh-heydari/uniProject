import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutController } from '../helpers/controller';

export const useLogout = () => {
   const navigate = useNavigate();

   const logoutHandler = () => {
      logoutController(navigate);
   };

   useEffect(() => {
      logoutHandler();
   }, []);

   return {
      navigate,
      logoutHandler
   };
};
