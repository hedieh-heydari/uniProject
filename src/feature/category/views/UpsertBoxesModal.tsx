import { FC } from 'react';
import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader
} from '@nextui-org/react';
import { IUpsertBoxesModal } from '../interfaces/CategoryInterfaces';
import { NumericFormat } from 'react-number-format';

const UpsertBoxesModal: FC<IUpsertBoxesModal> = ({
   open,
   setOpen,
   addHandler,
   editHandler,
   selectedData,
   setData,
   disableBtn
}) => {
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
               مدیریت صندوق‌ها
            </ModalHeader>
            <ModalBody className="w-full">
               <div className="w-full flex flex-wrap">
                  <div className="w-full sm:w-1/2 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold">عنوان</p>
                     <input
                        value={
                           selectedData && selectedData.title
                              ? selectedData.title
                              : ''
                        }
                        onChange={(e: any) => {
                           setData({ ...selectedData, title: e.target.value });
                        }}
                        className="w-full h-10 border rounded-medium focus:outline-none px-3"
                     />
                  </div>
                  <div className="w-full sm:w-1/2 max-sm:mt-4 relative">
                     <p className="text-gray-700 mb-2 font-bold">لوگو</p>
                     <input
                        onChange={(e: any) => {
                           setData({ ...selectedData, logo: e.target.files });
                        }}
                        type="file"
                        className="opacity-0 absolute top-0 right-0 w-full h-full cursor-pointer"
                     />
                     <div className="h-10 text-gray-500 rounded-14 flex flex-col justify-center align-middle border border-asiatech-darkblue-700 p-4">
                        <p className={`text-gray-600 font-light text-sm`}>
                           {typeof selectedData?.logo == 'object'
                              ? selectedData?.logo[0].name
                              : selectedData?.logo}
                        </p>
                     </div>
                  </div>
                  <div className="w-full sm:w-1/2 sm:pl-4 mt-4">
                     <p className="text-gray-700 mb-2 font-bold">
                        موجودی اولیه
                     </p>
                     <NumericFormat
                        dir="ltr"
                        className="w-full h-10 border rounded-medium focus:outline-none px-3"
                        thousandSeparator={true}
                        onValueChange={(e: any) => {
                           setData({ ...selectedData, initialAmount: e.value });
                        }}
                        value={selectedData?.initialAmount}
                     />
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
               <div className="w-full justify-end flex flex-wrap">
                  <Button
                  isDisabled={disableBtn}
                     onClick={() => {
                        selectedData?._id ? editHandler() : addHandler();
                     }}
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
export default UpsertBoxesModal;
