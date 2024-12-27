import { Card, CardBody, CardHeader } from '@nextui-org/react';

const DashboardIndex = () => {
   return (
      <Card>
         <CardHeader className=" text-asiatech-gray-800">
            {/* <div>
            <TriangleExclamationIcon className="w-6 h-6" />
          </div> */}
            <div className="pr-2">داشبورد</div>
         </CardHeader>
         <CardBody className="text-right">
          هزینه های خود را مدیریت کنید.
         </CardBody>
      </Card>
   );
};

export default DashboardIndex;
