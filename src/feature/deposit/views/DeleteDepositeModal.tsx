import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader
} from '@nextui-org/react';
import { FC } from 'react';
import { IDeleteDepositModal } from '../interface/DepositInterface';

const DeleteDepositeModal: FC<IDeleteDepositModal> = ({ open, setOpen }) => {
   return (
      <Modal
         backdrop="opaque"
         isOpen={open}
         hideCloseButton={true}
         size="md"
         placement="center"
         className="max-sm:mx-4 font-IranYekanNumber"
         scrollBehavior="inside"
      >
         <ModalContent>
            <ModalHeader className="flex flex-col gap-1 text-gray-800">
               حذف درآمد
            </ModalHeader>
            <ModalBody className="w-full ">
               <div className="flex max-sm:flex-col gap-4 text-gray-800">
                  آیا از حذف درآمد انتخابی اطمینان دارید؟
               </div>
            </ModalBody>
            <ModalFooter className="flex flex-wrap">
               <Button
                  color="danger"
                  //   disabled={disableDeleteBtn}
                  className="bg-red-600 max-sm:w-full"
                  onClick={() => {}}
               >
                  حذف
               </Button>
               <Button
                  color="default"
                  className="text-white bg-gray-500 max-sm:w-full"
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  بازگشت
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};
export default DeleteDepositeModal;
