import { Card, CardBody, CardHeader } from '@nextui-org/react';
const DashboardIndex = () => {
   return (
      <Card>
         <CardHeader className=" text-asiatech-gray-800">
            <div className="pr-2">داشبورد</div>
         </CardHeader>
         <CardBody className="text-right">
            هزینه های خود را مدیریت کنید.
         </CardBody>
      </Card>
   );
};

export default DashboardIndex;
