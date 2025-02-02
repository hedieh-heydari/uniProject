import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginController } from '../helper/controller';
import { useDispatch } from 'react-redux';

export const useLogin = () => {
   const navigate = useNavigate();
   const Dispatch = useDispatch();
   const [loginData, setLoginData] = useState({
      email: '',
      password: ''
   });

   const loginHandler = () =>{
    loginController(loginData, navigate, Dispatch)
   }

   return {
      navigate,
      loginData,
      setLoginData, 
      loginHandler
   };
};
