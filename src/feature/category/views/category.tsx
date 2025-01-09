import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react';
import WalletImportIcon from '../../../assets/icons/WalletImportIcon';

const CategoryIndex = () => {
   return (
      <>
         <Card className="px-4 py-6 my-6 overflow-visible">
            <CardHeader className=" text-asiatech-gray-800">
               {/* <div>
            <TriangleExclamationIcon className="w-6 h-6" />
          </div> */}
             <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <WalletImportIcon className="w-6 h-6 ml-2" />
               <span className="font-extrabold text-base whitespace-nowrap max-sm:text-sm">
                  مدیریت درآمدها
               </span>
            </div>
            </CardHeader>
            <CardBody className="text-right">
               مبدا و مقصد تراکنش های خود را مدیریت کنید.
            </CardBody>

            <div className="w-full flex flex-wrap items-center justify-between">
               <Tabs
                  aria-label="Options"
                  classNames={{
                     panel: '!px-0',
                     tabList: 'bg-asiatech-darkblue-400 w-full',
                     tabContent: 'group-data-[selected=true]:text-white',
                     cursor: 'bg-asiatech-blue-904',
                     base: 'overflow-auto max-sm:w-full'
                  }}
                  //   selectedKey={selected}
                  onSelectionChange={(e: any) => {
                     // router.push(`/panel/discounts?page=${e}`);
                  }}
               >
                  <Tab
                     key="discount"
                     title={
                        <p className="flex items-center">
                           {/* <CurlyPercentIcon className="w-4 h-4 ml-2" /> */}
                           <span>تخفیف ها</span>
                        </p>
                     }
                  ></Tab>
                  <Tab
                     key="giftcard"
                     title={
                        <p className="flex items-center">
                           {/* <DebitCardIcon className="w-4 h-4 ml-2" /> */}
                           <span>کارت هدیه ها</span>
                        </p>
                     }
                  ></Tab>
               </Tabs>
            </div>
         </Card>
      </>
   );
};

export default CategoryIndex;
