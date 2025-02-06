import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react';
import CardExchangeIcon from '../../../assets/icons/CardExchangeIcon';
import IncomeCategory from './IncomeCategory';
import OutgoCategory from './OutgoCategory';
import BoxesCategory from './BoxesCategory';
import { useCategory } from '../hooks/useCategory';

const CategoryIndex = () => {
   const { navigate, selectedTab, tabData } = useCategory();

   return (
      <>
         <Card className="px-4 py-6 my-6 overflow-visible bg-[#EFF9F0] shadow-lg rounded-xl">
            <CardHeader className=" text-gray-800">
               <div className="flex items-center max-sm:w-full max-sm:mb-2">
                  <CardExchangeIcon className="w-6 h-6 ml-2" />
                  <span className="font-extrabold text-base whitespace-nowrap max-sm:text-sm">
                     مدیریت دسته‌بندی‌ها
                  </span>
               </div>
            </CardHeader>
            <CardBody className="text-right">
               <p className="mb-2">دسته‌بندی حساب‌های خود را مدیریت کنید.</p>

               <div className="w-full flex flex-col items-start justify-center mb-4">
                  <Tabs
                     aria-label="Options"
                     classNames={{
                        panel: '!px-0',
                        tabList: 'bg-green-800 text-white w-full',
                        tabContent:
                           'text-white group-data-[selected=true]:text-black ',
                        cursor: '!bg-green-100',
                        base: 'overflow-auto lg:w-4/12 '
                     }}
                     selectedKey={selectedTab}
                     onSelectionChange={(e: any) => {
                        navigate(`/category?page=${e}`);
                     }}
                  >
                     {tabData.map((i: any) => {
                        return <Tab key={i.key} title={i.title}></Tab>;
                     })}
                  </Tabs>
               </div>
               {selectedTab === 'import' ? (
                  <IncomeCategory />
               ) : selectedTab === 'export' ? (
                  <OutgoCategory />
               ) : selectedTab === 'boxes' ? (
                  <BoxesCategory />
               ) : (
                  ''
               )}
            </CardBody>
         </Card>
      </>
   );
};

export default CategoryIndex;
