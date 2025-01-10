import { FC } from 'react';
import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader
} from '@nextui-org/react';
import { IUpsertCategoryModal } from '../interfaces/CategoryInterfaces';

const UpsertCategoryModal: FC<IUpsertCategoryModal> = ({ open, setOpen }) => {
   return (
      <Modal
         backdrop="opaque"
         isOpen={open}
         hideCloseButton={true}
         size="2xl"
         placement="center"
         className="max-sm:mx-4 font-IranYekanNumber"
         scrollBehavior="inside"
      >
         <ModalContent>
            <ModalHeader className="text-base font-bold  text-gray-700">
               مدیریت ورودی/خروجی
            </ModalHeader>
            <ModalBody className="w-full">
               <div className="w-full flex flex-wrap">
                  <div className="w-full sm:w-1/2 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold">عنوان</p>
                     <input className="w-full h-10 border rounded-medium focus:outline-none px-3" />
                  </div>
                  <div className="w-full sm:w-1/2 max-sm:mt-4">
                     <p className="text-gray-700 mb-2 font-bold">لوگو</p>
                     <input
                        className="w-full h-10 border rounded-medium focus:outline-none px-3"
                        type="file"
                     />
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
               <div className="w-full justify-end flex flex-wrap">
                  <Button
                     onClick={() => {}}
                     type="submit"
                     className={`max-sm:w-full bg-green-900 text-green-100`}
                  >
                     ثبت
                  </Button>
                  <Button
                     color="default"
                     className="text-white bg-gray-400 max-sm:w-full sm:mr-2 max-sm:mt-3"
                     onClick={() => {
                        setOpen(false);
                     }}
                  >
                     بازگشت
                  </Button>
               </div>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};
export default UpsertCategoryModal;
