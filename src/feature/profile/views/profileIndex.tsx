import { Button, Card, CardBody, CardHeader, Spinner } from '@nextui-org/react';
import DatePickerComponent from '../../../components/DatePickerComponent';
import UserIcon from '../../../assets/icons/UserIcon';
import { useProfile } from '../hooks/useProfile';
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

const ProfileIndex = () => {
   const { profileData, setProfileData, updateProfileHandler, loading } =
      useProfile();
   return (
      <Card className="px-4 py-6 my-6 overflow-visible bg-[#EFF9F0]">
         {loading ? (
            <Spinner size="lg" color='success' />
         ) : (
            <>
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
                  {profileData.completedProfile ? (
                     <div className="w-full bg-green-50 border border-green-300 text-green-900 rounded-14 p-4">
                        پروفایل تکمیل است.
                     </div>
                  ) : (
                     <div className="w-full bg-orange-50 border border-orange-300 text-orange-900 rounded-14 p-4">
                        لطفا پروفایل خود را تکمیل کنید.
                     </div>
                  )}
                  <form
                     className="flex flex-wrap justify-between font-IranYekanNumber mt-4"
                     onSubmit={(e: any) => {
                        e.preventDefault();
                        updateProfileHandler();
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
                           className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800`}
                           onChange={(e: any) => {
                              setProfileData({
                                 ...profileData,
                                 firstName: e.target.value
                              });
                           }}
                           disabled={profileData.completedProfile}
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
                           onChange={(e: any) => {
                              setProfileData({
                                 ...profileData,
                                 lastName: e.target.value
                              });
                           }}
                           disabled={profileData.completedProfile}
                        />
                     </div>
                     <div className="w-full md:w-1/2 mb-4 md:pl-2">
                        <label
                           className="mb-2 text-gray-700"
                           htmlFor="nationalCode"
                        >
                           کدملی
                        </label>
                        <input
                           id="nationalCode"
                           type="text"
                           value={profileData.nationalCode}
                           className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800`}
                           disabled
                        />
                     </div>
                     <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label className="mb-2 text-gray-700">تاریخ تولد</label>
                        <DatePickerComponent
                           value={
                              profileData.birthDate !== null
                                 ? profileData.birthDate.split('T')[0]
                                 : ''
                           }
                           onFocusedDateChange={(e: any) => {
                              setProfileData({
                                 ...profileData,
                                 birthDate: new DateObject(e)
                                    .convert(persian, gregorian_en)
                                    .format()
                              });
                           }}
                           disabled={profileData.completedProfile}
                        />
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
                           onChange={(e: any) => {
                              setProfileData({
                                 ...profileData,
                                 mobile: e.target.value
                              });
                           }}
                           disabled={profileData.completedProfile} // Disable input if profile is completed
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
                           className={`w-full h-10 rounded-14 border mt-2 focus:outline-none px-3 text-gray-800 cursor-not-allowed`}
                           disabled
                        />
                     </div>

                     <div className="flex justify-end w-full mt-5">
                        {!profileData.completedProfile && (
                           <Button
                              type="submit"
                              className={`text-white rounded-14 px-4 py-2 bg-green-900`}
                           >
                              ثبت اطلاعات
                           </Button>
                        )}
                     </div>
                  </form>
               </CardBody>
            </>
         )}
      </Card>
   );
};

export default ProfileIndex;
