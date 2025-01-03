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
import ElipsisIcon from '../../../assets/icons/ElipsisIcon';
import TrashIcon from '../../../assets/icons/TrashIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import PlusIcon from '../../../assets/icons/PlusIcon';
import WalletImportIcon from '../../../assets/icons/WalletImportIcon';
import { useDeposit } from '../hooks/useDeposit';
import DeleteDepositeModal from './DeleteDepositeModal';
import UpsertDepositModal from './UpsertDepositModal';

const DepositIndex = () => {
   const {
      openDeleteDepositModal,
      openUpsertDepositModal,
      setOpenDeleteDpositModal,
      setOpenUpserDepositModal
   } = useDeposit();

   return (
      <Card className="px-4 py-6 my-6 overflow-visible">
         <CardHeader className="flex max-sm:flex-wrap justify-between p-0 mb-6 text-gray-700">
            <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <WalletImportIcon className="w-6 h-6 ml-2" />
               <span className="font-extrabold text-base whitespace-nowrap max-sm:text-sm">
                  مدیریت درآمدها
               </span>
            </div>
            <Button
               color="primary"
               className="h-12 max-sm:w-full"
               onClick={() => {
                  setOpenUpserDepositModal(true);
               }}
            >
               <PlusIcon className="w-4 h-4" />
               <span>افزودن درآمد</span>
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
               <TableColumn key="date">از حجم</TableColumn>
               <TableColumn key="type">تا حجم</TableColumn>
               <TableColumn key="mobile"> قیمت </TableColumn>
               <TableColumn key="register-date">زمان ایجاد</TableColumn>
               <TableColumn key="update-date">زمان آپدیت</TableColumn>
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
               emptyContent={true ? ' ' : 'اطلاعات وارد شده وجود ندارد.'}
            >
               <TableRow className="bordertabel">
                  <TableCell>1</TableCell>
                  <TableCell dir="ltr">2</TableCell>
                  <TableCell dir="ltr">3</TableCell>
                  <TableCell dir="ltr">4 </TableCell>
                  <TableCell dir="ltr">5</TableCell>
                  <TableCell dir="ltr">6</TableCell>
                  <TableCell className="flex justify-end">
                     <Dropdown
                        placement="bottom-start"
                        aria-labelledby="option button"
                        className="!min-w-[130px] font-IranYekan"
                     >
                        <DropdownTrigger onClick={() => {}}>
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
                                 setOpenUpserDepositModal(true);
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
                                 setOpenDeleteDpositModal(true);
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
            </TableBody>
         </Table>

         <DeleteDepositeModal
            open={openDeleteDepositModal}
            setOpen={setOpenDeleteDpositModal}
         />
         <UpsertDepositModal
            open={openUpsertDepositModal}
            setOpen={setOpenUpserDepositModal}
         />
      </Card>
   );
};

export default DepositIndex;
