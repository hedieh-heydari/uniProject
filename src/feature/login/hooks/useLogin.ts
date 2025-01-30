import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginController } from '../helper/controller';

export const useLogin = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState<boolean>(false)
   const [loginData, setLoginData] = useState({
      email: '',
      password: ''
   });

   const loginHandler = () =>{
    loginController(loginData, navigate, setLoading)
   }

   return {
      navigate,
      loginData,
      setLoginData, 
      loginHandler, 
      loading
   };
};
