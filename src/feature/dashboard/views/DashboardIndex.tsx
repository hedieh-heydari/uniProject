import { Card, CardBody, CardHeader } from '@nextui-org/react';
import DebitCardIcon from '../../../assets/icons/DebitCardIcon';
import { useDashboard } from '../hooks/useDashboard';

const DashboardIndex = () => {
   const {} = useDashboard()
   return (
      <Card className="px-4 py-6 my-6 overflow-visible">
         <CardHeader className=" text-asiatech-gray-800">
            <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <DebitCardIcon className="w-6 h-6 ml-2 stroke-1" />
               <span className="font-bold text-base whitespace-nowrap max-sm:text-sm">
                داشبورد
               </span>
            </div>
         </CardHeader>
         <CardBody className="text-right">
            هزینه های خود را مدیریت کنید.
         </CardBody>
      </Card>
   );
};

export default DashboardIndex;
