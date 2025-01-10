import { Suspense, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
   const [open, setOpen] = useState<boolean>(false);
   return (
      <body className="font-IranYekanNumber">
         <Sidebar open={open} setOpen={setOpen} />
         <div
            className={`min-h-screen h-full w-full overflow-hidden transition-all duration-300 ${
               open ? 'pr-56 max-sm:pr-14' : 'pr-14'
            }`}
         >
            <NextUIProvider>
               <Suspense fallback={<p>Loading feed...</p>}>
                  <main className="w-full h-full">
                     <section className="w-full h-32 bg-green-950"></section>
                     <section className="w-full h-full px-2 lg:px-6 -mt-12">
                        <Outlet />
                     </section>
                  </main>
               </Suspense>
            </NextUIProvider>
         </div>
      </body>
   );
};

export default MainLayout;
