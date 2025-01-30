import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupController } from '../helpers/controller';

export const useSignup = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState<boolean>(false)
   const [signupData, setSignupData] = useState({
      nationalCode: '',
      email: '',
      password: ''
   });

   const signupHandler = () =>{
      signupController(signupData, navigate, setLoading)
   }

   return {
      navigate, 
      signupData, 
      setSignupData, 
      signupHandler, 
      loading
   };
};
