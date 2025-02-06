import { FC, Key } from 'react';
import { IUpsertDepositModal } from '../interface/DepositInterface';
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
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

const UpsertDepositModal: FC<IUpsertDepositModal> = ({
   open,
   setOpen,
   IncomeSelect,
   addHandler,
   boxesSelect,
   editHandler,
   selectedData,
   setSelectedData,
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
               جستجوی پیشرفته
            </ModalHeader>
            <ModalBody className="w-full">
               <div className="w-full flex flex-wrap">
                  <div className="w-full sm:w-1/2 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold">مبلغ</p>
                     <NumericFormat
                        dir="ltr"
                        className="w-full h-10 border rounded-medium focus:outline-none px-3"
                        thousandSeparator={true}
                        onValueChange={(e: any) => {
                           setSelectedData({
                              ...selectedData,
                              amount: e.floatValue
                           });
                        }}
                        value={selectedData?.amount}
                     />
                  </div>
                  <div className="w-full sm:w-1/2 max-sm:mt-4">
                     <p className="text-gray-700 mb-2 font-bold">تاریخ</p>
                     <DatePickerComponent
                        placeHolder=" انتخاب کنید"
                        value={
                           selectedData?.date
                              ? selectedData?.date?.split('T')[0]
                              : ''
                        }
                        onFocusedDateChange={(e: any) => {
                           setSelectedData({
                              ...selectedData,
                              date: new DateObject(e)
                                 .convert(persian, gregorian_en)
                                 .format()
                           });
                        }}
                     />
                  </div>
                  <div className="w-full sm:w-1/2 mt-4 sm:pl-4">
                     <p className="text-gray-700 mb-2 font-bold ">از حساب</p>
                     <Select
                        className="w-full customised-select"
                        selectedKeys={
                           new Set<Key>([String(selectedData?.fromBox)]) as any
                        }
                        onChange={(e: any) => {
                           setSelectedData({
                              ...selectedData,
                              fromBox: e.target.value
                           });
                        }}
                        variant="bordered"
                        classNames={{
                           base: '!h-10',
                           trigger:
                              '!min-h-10 !h-10 rounded-xl focus:outline-none border-1 border-gray-200 active:!outline-none active:!border-gray-200 focous:!outline-none focous:!border-gray-200 hover:!outline-none hover:!border-gray-200 open:!outline-none open:!border-gray-200 visited:!outline-none visited:!border-gray-200',
                           value: 'text-right',
                           selectorIcon: 'right-[unset] left-2'
                        }}
                     >
                        {IncomeSelect.map((i: any) => {
                           return (
                              <SelectItem value={i.title} key={i.title}>
                                 {i.title}
                              </SelectItem>
                           );
                        })}
                     </Select>
                  </div>
                  <div className="w-full sm:w-1/2 mt-4">
                     <p className="text-gray-700 mb-2 font-bold ">به حساب</p>
                     <Select
                        className="w-full customised-select"
                        onChange={(e: any) => {
                           setSelectedData({
                              ...selectedData,
                              toBox: e.target.value
                           });
                        }}
                        selectedKeys={
                           new Set<Key>([String(selectedData?.toBox)]) as any
                        }
                        variant="bordered"
                        classNames={{
                           base: 'h-10',
                           trigger:
                              '!min-h-10 !h-10 rounded-xl focus:outline-none border-1 border-gray-200 active:!outline-none active:!border-gray-200 focous:!outline-none focous:!border-gray-200 hover:!outline-none hover:!border-gray-200 open:!outline-none open:!border-gray-200 visited:!outline-none visited:!border-gray-200',
                           value: 'text-right',
                           selectorIcon: 'right-[unset] left-2'
                        }}
                     >
                        {boxesSelect.map((i: any) => {
                           return (
                              <SelectItem value={i.title} key={i.title}>
                                 {i.title}
                              </SelectItem>
                           );
                        })}
                     </Select>
                  </div>
                  <div className="w-full mt-4">
                     <p className="text-gray-700 mb-2 font-bold ">توضیحات</p>
                     <textarea
                        value={selectedData?.description}
                        onChange={(e: any) => {
                           setSelectedData({
                              ...selectedData,
                              description: e.target.value
                           });
                        }}
                        className="w-full border rounded-xl focus:outline-none p-3"
                     />
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
               <div className="w-full justify-end flex flex-wrap">
                  <Button
                     disabled={disableBtn}
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
                        setSelectedData();
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
export default UpsertDepositModal;
