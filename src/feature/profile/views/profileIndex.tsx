import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import DatePickerComponent from '../../../components/DatePickerComponent';
import UserIcon from '../../../assets/icons/UserIcon';
import { useProfile } from '../hooks/useProfile';

const ProfileIndex = () => {
   const {profileData, setProfileData, loading} = useProfile()
   return (
      <Card className="px-4 py-6 my-6 overflow-visible">
         <CardHeader className=" text-gray-800">
            <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <UserIcon className="w-6 h-6 ml-2" />
               <span className="font-extrabold text-base whitespace-nowrap max-sm:text-sm">
                  پروفایل
               </span>
            </div>
         </CardHeader>
         <CardBody className="text-right">
            <p className="mb-6">اطلاعات کاربری خود را تکمیل کنید.</p>
            <form
               className="flex flex-wrap justify-between font-IranYekanNumber"
               onSubmit={(e: any) => {
                  e.preventDefault();
               }}
            >
               <div className="w-full md:w-1/2 mb-4 md:pl-2">
                  <label className="mb-2 text-gray-700" htmlFor="name">
                     نام
                  </label>
                  <input
                  value={profileData.firstName}
                     id="name"
                     type="text"
                     className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800 
                       
                     `}
                     onChange={(e: any) => {}}
                  />
               </div>
               <div className="w-full md:w-1/2 mb-4 md:pr-2">
                  <label className="mb-2 text-gray-700" htmlFor="family">
                     نام خانوادگی
                  </label>
                  <input
                     id="family"
                     type="text"
                     value={profileData.lastName}
                     className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800 `}
                     onChange={(e: any) => {}}
                  />
               </div>
               <div className="w-full md:w-1/2 mb-4 md:pl-2">
                  <label className="mb-2 text-gray-700" htmlFor="nationalCode">
                     کدملی
                  </label>
                  <input
                     id="nationalCode"
                     type="text"
                     value={profileData.nationalCode}
                     className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800`}
                     onChange={(e: any) => {}}
                  />
               </div>
               <div className="w-full md:w-1/2 mb-4 md:pr-2">
                  <label className="mb-2 text-gray-700">تاریخ تولد</label>
                  <DatePickerComponent value={profileData.birthDate as string} />
               </div>
               <div className="w-full md:w-1/2 mb-4 md:pl-2">
                  <label className="mb-2 text-gray-700" htmlFor="mobile">
                     شماره موبایل
                  </label>
                  <input
                     id="mobile"
                     type="text"
                     value={profileData.mobile}
                     className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800`}
                     onChange={(e: any) => {}}
                  />
               </div>
               <div className="w-full md:w-1/2 mb-4 md:pr-2">
                  <label className="mb-2 text-gray-700" htmlFor="email">
                     ایمیل
                  </label>
                  <input
                     id="email"
                     type="text"
                     value={profileData.email}
                     className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800 `}
                     onChange={(e: any) => {}}
                  />
               </div>

               <div className="flex justify-end w-full mt-5">
                  <Button
                     className={`text-white rounded-14 px-4 py-2 bg-green-900`}
                  >
                     ثبت اطلاعات
                  </Button>
               </div>
            </form>
         </CardBody>
      </Card>
   );
};

export default ProfileIndex;
