import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
   const navigate = useNavigate();

   return {
      navigate
   };
};
