import { Card, CardBody, CardHeader } from "@nextui-org/react";

const ProfileIndex = () => {
  return (
    <Card>
         <CardHeader className=" text-asiatech-gray-800">
            {/* <div>
            <TriangleExclamationIcon className="w-6 h-6" />
          </div> */}
            <div className="pr-2">پروفایل</div>
         </CardHeader>
         <CardBody className="text-right">
          اطلاعات کاربری خود را تکمیل کنید.
         </CardBody>
      </Card>
  );
};

export default ProfileIndex;
