import {
   Button,
   Card,
   CardHeader,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownTrigger,
   Spinner,
   Table,
   TableBody,
   TableCell,
   TableColumn,
   TableHeader,
   TableRow
} from '@nextui-org/react';
import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import { useWithdrawal } from '../hooks/useWithdrawal';
import PlusIcon from '../../../assets/icons/PlusIcon';
import ElipsisIcon from '../../../assets/icons/ElipsisIcon';
import TrashIcon from '../../../assets/icons/TrashIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import DeleteWithdrawalModal from './DeleteWithdrawalModal';
import UpsertWithdrawalModal from './UpsertWithdrawalModal';
import { IWithdrawal } from '../interfaces/WithdrawalInterface';
import NumberSeparator from '../../../utils/NumberSeprator';
import EmptyStateComponent from '../../../components/EmptyStateComponent';

const WithdrawalIndex = () => {
   const {
      openDeleteWidthrawalModal,
      openUpsertWidthrawalModal,
      setOpenDeleteWithdrawalModal,
      setOpenUpsertWithdrawalModal,
      setSelectedWithdraw,
      addWithdrawalHandler,
      deleteWithdrawHandler,
      editWithdrawalHandler,
      selectedWithdraw,
      withdrwalaData, 
      outgoSelect, boxes
   } = useWithdrawal();
   return (
      <Card className="px-4 py-6 my-6 overflow-visible">
         <CardHeader className="flex max-sm:flex-wrap justify-between p-0 mb-6 text-gray-700">
            <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <WalletExportIcon className="w-6 h-6 ml-2" />
               <span className="font-extrabold text-base whitespace-nowrap max-sm:text-sm">
                  مدیریت هزینه‌ها
               </span>
            </div>
            <Button
               className="h-12 max-sm:w-full text-green-100 bg-green-900"
               onClick={() => {
                  setOpenUpsertWithdrawalModal(true);
               }}
            >
               <PlusIcon className="w-4 h-4" />
               <span>افزودن هزینه</span>
            </Button>
         </CardHeader>

         <Table
            aria-label="reasons table"
            shadow="none"
            isHeaderSticky
            className="!p-0 mt-2 mb-6 overflow-x-auto"
            removeWrapper
            classNames={{
               th: 'text-center',
               td: 'text-center py-6 ',
               thead: 'shadow-none',
               table: 'text-gray-800'
            }}
         >
            <TableHeader>
               <TableColumn className="!rounded-l-none rounded-r-lg" key="id">
                  #
               </TableColumn>
               <TableColumn key="date">مبلغ </TableColumn>
               <TableColumn key="type"> تاریخ</TableColumn>
               <TableColumn key="mobile"> از حساب </TableColumn>
               <TableColumn key="register-date">به حساب </TableColumn>
               <TableColumn key="description">توضیحات</TableColumn>
               <TableColumn
                  key="description"
                  className="!rounded-r-none rounded-l-lg flex justify-end items-center"
               >
                  عملیات
               </TableColumn>
            </TableHeader>
            <TableBody
               loadingContent={<Spinner />}
               isLoading={false}
               emptyContent={<EmptyStateComponent/>}
            >
               {
                  withdrwalaData && withdrwalaData.map((i:IWithdrawal, index:number)=>{
                     return(
                        <TableRow className="bordertabel" key={index}>
                        <TableCell>{index +1} </TableCell>
                        <TableCell> {NumberSeparator(i.amount)} تومان </TableCell>
                        <TableCell dir="ltr">{i.date&& i.date.split('T')[0]}</TableCell>
                        <TableCell dir="ltr"> {i.fromBox} </TableCell>
                        <TableCell dir="ltr">{i.toBox}</TableCell>
                        <TableCell dir="ltr">{i.description? i.description : '-'}</TableCell>
                        <TableCell className="flex justify-end">
                           <Dropdown
                              placement="bottom-start"
                              aria-labelledby="option button"
                              className="!min-w-[130px] font-IranYekan"
                           >
                              <DropdownTrigger onClick={() => {
                                 setSelectedWithdraw(i)
                              }}>
                                 <div>
                                    <ElipsisIcon className="w-6 h-6" />
                                 </div>
                              </DropdownTrigger>
                              <DropdownMenu
                                 aria-label="Static Actions"
                                 className=" text-gray-600"
                              >
                                 <DropdownItem
                                    key="edit"
                                    onClick={() => {
                                       setOpenUpsertWithdrawalModal(true);
                                    }}
                                 >
                                    <div className="flex items-center">
                                       <EditIcon className="w-4 h-4 ml-2" />
                                       <span> ویرایش </span>
                                    </div>
                                 </DropdownItem>
                                 <DropdownItem
                                    key="new"
                                    onClick={() => {
                                       setOpenDeleteWithdrawalModal(true);
                                    }}
                                 >
                                    <div className="flex items-center">
                                       <TrashIcon className="w-4 h-4 ml-2 text-gray-600" />
                                       <span>حذف </span>
                                    </div>
                                 </DropdownItem>
                              </DropdownMenu>
                           </Dropdown>
                        </TableCell>
                     </TableRow>
                     )
                  })
               }
              
            </TableBody>
         </Table>

         <DeleteWithdrawalModal
            open={openDeleteWidthrawalModal}
            setOpen={setOpenDeleteWithdrawalModal}
            deleteHandler ={deleteWithdrawHandler}
            selectedData= {selectedWithdraw}
         />
         <UpsertWithdrawalModal
            open={openUpsertWidthrawalModal}
            setOpen={setOpenUpsertWithdrawalModal}
            selectedData= {selectedWithdraw}
            setSelectedData={setSelectedWithdraw}
            editHandler ={editWithdrawalHandler}
            addHandler = {addWithdrawalHandler}
            outgoSelect={outgoSelect}
            boxesSelect={boxes}
         />
      </Card>
   );
};

export default WithdrawalIndex;
