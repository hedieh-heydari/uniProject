import { FC } from 'react';
import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   Select,
   SelectItem
} from '@nextui-org/react';
import { NumericFormat } from 'react-number-format';
import DatePickerComponent from '../../../components/DatePickerComponent';
import { IUpsertWithdrawalModal } from '../interfaces/WithdrawalInterface';

const UpsertWithdrawalModal: FC<IUpsertWithdrawalModal> = ({
   open,
   setOpen
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
               هزینه
            </ModalHeader>
            <ModalBody className="w-full">
               <div className="w-full flex flex-wrap">
                  <div className="w-full sm:w-1/2 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold">مبلغ</p>
                     <NumericFormat
                        dir="ltr"
                        className="w-full h-10 border rounded-medium focus:outline-none px-3"
                        thousandSeparator={true}
                        onValueChange={() => {}}
                        value={''}
                     />
                  </div>
                  <div className="w-full sm:w-1/2 max-sm:mt-4">
                     <p className="text-gray-700 mb-2 font-bold">تاریخ</p>
                     <DatePickerComponent
                        value={''}
                        placeHolder=" انتخاب کنید"
                        onFocusedDateChange={() => {}}
                     />
                  </div>
                  <div className="w-full sm:w-1/2 mt-4 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold ">از حساب</p>
                     <Select
                        className="w-full customised-select"
                        onChange={() => {}}
                        variant="bordered"
                        classNames={{
                           base: '!h-10',
                           trigger:
                              '!min-h-10 !h-10 rounded-xl focus:outline-none border-1 border-gray-200 active:!outline-none active:!border-gray-200 focous:!outline-none focous:!border-gray-200 hover:!outline-none hover:!border-gray-200 open:!outline-none open:!border-gray-200 visited:!outline-none visited:!border-gray-200',
                           value: 'text-right',
                           selectorIcon: 'right-[unset] left-2'
                        }}
                     >
                        <SelectItem value="created" key="created">
                           حساب مبدا
                        </SelectItem>
                     </Select>
                  </div>
                  <div className="w-full sm:w-1/2 mt-4">
                     <p className="text-gray-700 mb-2 font-bold ">به حساب</p>
                     <Select
                        className="w-full customised-select"
                        onChange={() => {}}
                        variant="bordered"
                        classNames={{
                           base: 'h-10',
                           trigger:
                              '!min-h-10 !h-10 rounded-xl focus:outline-none border-1 border-gray-200 active:!outline-none active:!border-gray-200 focous:!outline-none focous:!border-gray-200 hover:!outline-none hover:!border-gray-200 open:!outline-none open:!border-gray-200 visited:!outline-none visited:!border-gray-200',
                           value: 'text-right',
                           selectorIcon: 'right-[unset] left-2'
                        }}
                     >
                        <SelectItem value="created_at" key="created_at">
                           حساب مقصد
                        </SelectItem>
                     </Select>
                  </div>
                  <div className="w-full mt-4">
                     <p className="text-gray-700 mb-2 font-bold ">توضیحات</p>
                     <textarea
                        onChange={() => {}}
                        className="w-full border rounded-xl focus:outline-none p-3"
                     />
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
               <div className="w-full justify-end flex flex-wrap">
                  <Button
                     onClick={() => {}}
                     type="submit"
                     className={`max-sm:w-full text-green-100 bg-green-900`}
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
export default UpsertWithdrawalModal;
