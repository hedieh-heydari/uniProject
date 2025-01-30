import { useEffect } from 'react';
import MainLayout from './feature/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';


function App() {
   const navigate = useNavigate()
   console.log(localStorage.getItem('token'))
   useEffect(() => {
      if (!localStorage.getItem('token'))
         navigate('/login')
   },[])


   return <MainLayout />;
}

export default App;
