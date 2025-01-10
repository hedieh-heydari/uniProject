import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react';
import CardExchangeIcon from '../../../assets/icons/CardExchangeIcon';
import IncomeCategory from './IncomeCategory';
import OutgoCategory from './OutgoCategory';
import BoxesCategory from './BoxesCategory';
import { useState } from 'react';

const CategoryIndex = () => {
   const [selectedTab, setSelectedTab] = useState<string>('import');
   return (
      <>
         <Card className="px-4 py-6 my-6 overflow-visible">
            <CardHeader className=" text-asiatech-gray-800">
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
                        tabList: 'bg-green-600 text-white w-full',
                        tabContent: 'text-white group-data-[selected=true]:text-black',
                        cursor: 'bg-blue-800',
                        base: 'overflow-auto lg:w-5/12 '
                     }}
                     onSelectionChange={(e: any) => {
                        setSelectedTab(e);
                     }}
                  >
                     <Tab key="import" title="ورودی"></Tab>
                     <Tab key="export" title="خروجی"></Tab>
                     <Tab key="boxes" title="صندوق‌ها"></Tab>
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
