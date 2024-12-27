const Navbar = () => {
   return (
      <header className="w-full bg-blue-900">
         <nav
            className="flex justify-between items-center text-white px-6 pt-8 pb-2"
            dir="rtl"
         >
            <section>
               <p>داشبورد</p>
               <p>
                  امروز
                  <span className="mr-1">11</span>
                  <span className="mx-1">دی</span>
                  <span>1403</span>
               </p>
            </section>
            <section className="flex items-start">
               <div>
                  <p>
                     <span>name </span>
                  </p>
                  <p></p>
               </div>
            </section>
         </nav>
      </header>
   );
};
export default Navbar;
