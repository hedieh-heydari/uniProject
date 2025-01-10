import { Button } from '@nextui-org/react';
import { useSignup } from '../hooks/useSignup';

const SignupIndex = () => {
   const { navigate } = useSignup();
   return (
      <>
         <div className="green-radial min-w-full min-h-screen flex justify-center relative">
            <div className="flex justify-center items-center">
               <form
                  className="rounded-14 px-12 py-8 transparent-white  w-[450px] flex flex-col items-center"
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  <img
                     src="/money.png"
                     className="w-14 h-14 flex justify-center"
                     alt="logo"
                  />
                  <div className="w-full mb-6">
                     <p className="text-center pb-4 text-xl font-bold text-white mb-4 mt-8">
                        ثبت نام
                     </p>
                     <div className="border-b-1 mx-32 flex justify-center"></div>
                  </div>
                  <div className="flex flex-col w-full">
                     <label htmlFor="username" className="font-bold text-white">
                        کدملی
                     </label>
                     <input
                        type="text"
                        className="mt-2 p-2 h-10 rounded-14 bg-green-50 text-white focus:outline-none text-left "
                        dir="ltr"
                     />
                  </div>
                  <div className="flex flex-col w-full mt-4">
                     <label htmlFor="password" className="font-bold text-white">
                       ایمیل
                     </label>
                     <input
                        type="email"
                        className="mt-2 p-2 h-10 rounded-14 bg-green-50 text-white focus:outline-none text-left"
                        dir="ltr"
                     />
                  </div>
                  <div className="flex flex-col w-full mt-4">
                     <label htmlFor="password" className="font-bold text-white">
                        رمز عبور
                     </label>
                     <input
                        type="password"
                        className="mt-2 p-2 h-10 rounded-14 bg-green-50 text-white focus:outline-none text-left"
                        dir="ltr"
                     />
                  </div>
                  <Button
                     type="submit"
                     className="bg-green-900 text-white w-full rounded-14 mt-6 font-bold"
                     color="primary"
                  >
                     ثبت نام
                  </Button>
                  <span
                     onClick={() => {
                        navigate('/login');
                     }}
                     className="text-xs cursor-pointer mt-2 text-green-950"
                  >
                     ورود به پنل
                  </span>
               </form>
            </div>
         </div>
      </>
   );
};

export default SignupIndex;
