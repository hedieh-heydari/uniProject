import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader
} from '@nextui-org/react';
import { FC } from 'react';
import { IDeleteWithdrawalModal } from '../interfaces/WithdrawalInterface';

const DeleteWithdrawalModal: FC<IDeleteWithdrawalModal> = ({
   open,
   setOpen,
   deleteHandler,
   selectedData
}) => {
   return (
      <Modal
         backdrop="opaque"
         isOpen={open}
         hideCloseButton={true}
         size="md"
         placement="center"
         className="max-sm:mx-4"
         scrollBehavior="inside"
      >
         <ModalContent>
            <ModalHeader className="flex flex-col gap-1 text-gray-800">
               حذف هزینه
            </ModalHeader>
            <ModalBody className="w-full ">
               <div className="flex max-sm:flex-col gap-4 text-gray-800">
                  آیا از حذف هزینه انتخابی اطمینان دارید؟
               </div>
            </ModalBody>
            <ModalFooter className="flex flex-wrap">
               <Button
                  color="danger"
                  className="bg-red-600 max-sm:w-full"
                  onClick={() => {
                     deleteHandler(selectedData?._id);
                  }}
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
export default DeleteWithdrawalModal;
