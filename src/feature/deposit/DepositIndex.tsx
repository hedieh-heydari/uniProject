import { Card, CardBody, CardHeader } from "@nextui-org/react";

const DepositIndex = () => {
   return (
      <Card>
      <CardHeader className=" text-asiatech-gray-800">
         {/* <div>
         <TriangleExclamationIcon className="w-6 h-6" />
       </div> */}
         <div className="pr-2">درآمد</div>
      </CardHeader>
      <CardBody className="text-right">
       درآمد های خود را مدیریت کنید.
      </CardBody>
   </Card>
   );
};

export default DepositIndex;
