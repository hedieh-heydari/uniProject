import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
         />
   </StrictMode>
);
