import {
   Card,
   CardHeader,
   Spinner,
   Table,
   TableBody,
   TableCell,
   TableColumn,
   TableHeader,
   TableRow
} from '@nextui-org/react';
import DebitCardIcon from '../../../assets/icons/DebitCardIcon';
import { useDashboard } from '../hooks/useDashboard';
import NumberSeparator from '../../../utils/NumberSeprator';
import { IAllTransaction } from '../interface';
import ReactECharts from 'echarts-for-react';
import EmptyStateComponent from '../../../components/EmptyStateComponent';
import CardExchangeIcon from '../../../assets/icons/CardExchangeIcon';
import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import WalletImportIcon from '../../../assets/icons/WalletImportIcon';

const DashboardIndex = () => {
   const {
      allTransaction,
      topwithdrawal,
      totalAmount,
      totalTransaction,
      loading,
      option, 
      navigate
   } = useDashboard();

   return (
      <Card className="px-4 py-6 my-6 overflow-visible  bg-[#EFF9F0] shadow-lg rounded-xl">
         {loading ? (
            <Spinner size="lg"  color='success'/>
         ) : (
            <>
               
               <div className="w-full flex flex-wrap justify-between">
                  <div className="w-full sm:w-4/12 sm:pl-2 max-sm:mb-4">
                  
                     <div className="w-full min-h-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                     <div className="flex items-center max-sm:w-full max-sm:mb-2 mt-2 mb-4">
                     <DebitCardIcon className="w-6 h-6 ml-2 stroke-1 text-green-900" />
                     <span className="text-base text-gray-600 max-sm:text-sm">
                        مدیریت مالی در یک نگاه
                     </span>
                  </div>
                        <div className="border-l-4 border-green-500 p-4 mb-4 cursor-pointer hover:bg-green-50"
                        onClick={()=>{
                           navigate('/category?page=boxes')
                        }}
                        >
                           <div className="flex justify-between">
                              <div className="flex items-center">
                                 <CardExchangeIcon className="w-5 h-5 text-green-600" />
                                 <p className="mr-2 font-medium text-green-900">
                                    موجودی کل:
                                 </p>
                              </div>
                              <p className="font-semibold text-green-800">
                                 {totalAmount
                                    ? NumberSeparator(totalAmount)
                                    : '0'}{' '}
                                 تومان
                              </p>
                           </div>
                        </div>

                        <div className="border-l-4 border-yellow-500 p-4 mb-4 cursor-pointer hover:bg-yellow-50"
                        onClick={()=>{
                           navigate('/withdrawal')
                        }}
                        >
                           <div className="flex justify-between">
                              <div className="flex items-center">
                                 <WalletExportIcon className="w-5 h-5 text-yellow-600" />
                                 <p className="mr-2 font-medium text-yellow-900">
                                    مجموع هزینه ها:
                                 </p>
                              </div>
                              <p className="font-semibold text-yellow-800">
                                 {totalTransaction?.totalWithdrawals > 0
                                    ? NumberSeparator(
                                         totalTransaction.totalWithdrawals
                                      )
                                    : '0'}{' '}
                                 تومان
                              </p>
                           </div>
                        </div>

                        <div className="border-l-4 border-blue-500 p-4 mb-4 cursor-pointer hover:bg-blue-50"
                        onClick={()=>{
                           navigate('/deposit')
                        }}
                        >
                           <div className="flex justify-between">
                              <div className="flex items-center">
                                 <WalletImportIcon className="w-5 h-5 text-blue-600" />
                                 <p className="mr-2 font-medium text-blue-900">
                                    مجموع درآمدها :
                                 </p>
                              </div>
                              <p className="font-semibold text-blue-800">
                                 {totalTransaction?.totalDeposits > 0
                                    ? NumberSeparator(
                                         totalTransaction.totalDeposits
                                      )
                                    : '0'}{' '}
                                 تومان
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="w-full sm:w-8/12 sm:pr-2">
                     <div className="w-full min-h-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        {topwithdrawal && topwithdrawal.length > 0 ? (
                           <>
                              <p className="m-2 text-base text-gray-600 flex">
                              <DebitCardIcon className="w-6 h-6 ml-2 stroke-1 text-green-900" />
                                 برای چه دسته بندی بیشتر هزینه کرده اید؟
                              </p>
                              <div className="w-full flex flex-wrap-reverse items-center justify-between">
                                 <div className="w-full lg:w-1/2">
                                    {topwithdrawal.map((i: any) => {
                                       return (
                                          <p
                                             className="flex items-center mt-2 text-green-900"
                                             key={i.toBox}
                                          >
                                             <span
                                                className={`w-3 h-3 block rounded-full`}
                                                style={{ background: i.color }}
                                             ></span>
                                             <span className="mr-2 text-sm font-medium">
                                                {i.toBox} :{' '}
                                                {NumberSeparator(i.totalAmount)}{' '}
                                                تومان
                                             </span>
                                          </p>
                                       );
                                    })}
                                 </div>
                                 <div className="w-full lg:w-1/2">
                                    <ReactECharts option={option} />
                                 </div>
                              </div>
                           </>
                        ) : (
                           <EmptyStateComponent text="هنوز هزینه ای ثبت نکرده اید!" />
                        )}
                     </div>
                  </div>
               </div>

               <div className="w-full mt-6">
                  <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                     <p className="flex items-center m-2 mb-4 text-gray-600 text-base">
                        <DebitCardIcon className="w-6 h-6 ml-2 stroke-1 text-gray-700" />
                        <span className="pt-1 text-gray-600">
                           نگاهی کلی به لیست تراکنش ها داشته باشید.
                        </span>
                     </p>

                     <Table
                        aria-label="reasons table"
                        shadow="none"
                        isHeaderSticky
                        className="!p-0 mt-2 mb-6 overflow-x-auto max-h-[400px] overflow-y-auto"
                        removeWrapper
                        classNames={{
                           th: 'text-center font-semibold text-gray-600',
                           td: 'text-center py-4 text-sm text-gray-700',
                           thead: 'shadow-none',
                           table: 'text-gray-800'
                        }}
                     >
                        <TableHeader>
                           <TableColumn
                              className="!rounded-l-none rounded-r-lg"
                              key="id"
                           >
                              #
                           </TableColumn>
                           <TableColumn key="amount">مبلغ </TableColumn>
                           <TableColumn key="type"> تاریخ</TableColumn>
                           <TableColumn key="date">نوع عملیات </TableColumn>
                           <TableColumn
                              className="!rounded-r-none rounded-l-lg"
                              key="description"
                           >
                              توضیحات
                           </TableColumn>
                        </TableHeader>
                        <TableBody
                           loadingContent={<Spinner />}
                           isLoading={loading}
                           emptyContent={
                              <EmptyStateComponent text="شما هیچ درآمد و هزینه ای نداشتید" />
                           }
                        >
                           {allTransaction && allTransaction.length > 0
                              ? allTransaction.map(
                                   (i: IAllTransaction, index: number) => (
                                      <TableRow
                                         className="bordertabel"
                                         key={index}
                                      >
                                         <TableCell>{index + 1} </TableCell>
                                         <TableCell>
                                            {i.amount
                                               ?`${NumberSeparator(i.amount)} تومان`
                                               : '0 تومان'}
                                         </TableCell>
                                         <TableCell dir="ltr">
                                            {i.date && i.date.split('T')[0]}
                                         </TableCell>
                                         <TableCell
                                            dir="ltr"
                                            className={
                                               i.type === 'withdrawal'
                                                  ? 'text-red-700'
                                                  : 'text-green-600'
                                            }
                                         >
                                            {i.type === 'withdrawal'
                                               ? 'برداشت'
                                               : 'واریز'}
                                         </TableCell>
                                         <TableCell dir="ltr">
                                            {i.description || '-'}
                                         </TableCell>
                                      </TableRow>
                                   )
                                )
                              : null}
                        </TableBody>
                     </Table>
                  </div>
               </div>
            </>
         )}
      </Card>
   );
};

export default DashboardIndex;
