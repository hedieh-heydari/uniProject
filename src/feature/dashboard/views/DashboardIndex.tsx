import {
   Card,
   CardBody,
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
   const { allTransaction, topwithdrawal, totalAmount, totalTransaction } =
      useDashboard();

   const tooltipFormatter = (params: any) => {
      const item = topwithdrawal?.find((i: any) => i.name === params.name);
      return item
         ? `<div style="direction: rtl; text-align: right;">مبلغ: ${NumberSeparator(
              item.amount
           )} تومان</div>
         <div style="direction: rtl; text-align: right;">${item.name}</div>`
         : '';
   };

   const option = {
      textStyle: {
         fontFamily: 'IranYekanNumber'
      },

      tooltip: {
         trigger: 'item',
         confine: true,
         formatter: tooltipFormatter
      },

      series: [
         {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
               show: false,
               position: 'center'
            },
            data: topwithdrawal?.map((item: any) => {
               return {
                  value: item.percentage,
                  name: item.name,
                  itemStyle: {
                     color: item.color
                  }
               };
            })
         }
      ]
   };
   return (
      <Card className="px-4 py-6 my-6 overflow-visible">
         <CardHeader className=" text-asiatech-gray-800">
            <div className="flex items-center max-sm:w-full max-sm:mb-2">
               <DebitCardIcon className="w-6 h-6 ml-2 stroke-1" />
               <span className="font-bold text-base whitespace-nowrap max-sm:text-sm">
                  مدیریت مالی در یک نگاه
               </span>
            </div>
         </CardHeader>
         <div className="w-full flex flex-wrap">
            <div className="w-full sm:w-4/12 sm:pl-2 max-sm:mb-4">
               <div className="w-full min-h-full p-2 border rounded-14">
                  <div className="border border-green-50 rounded-14 p-4 mb-4">
                     <div className="flex justify-between">
                        <div className="flex">
                           <CardExchangeIcon className="w-5 h-5 stroke-green-600" />
                           <p className="mr-2 font-medium text-green-900">
                              موجودی کل:
                           </p>
                        </div>
                        <p>{NumberSeparator(totalAmount)} تومان</p>
                     </div>
                  </div>

                  <div className="border border-green-50 rounded-14 p-4 mb-4">
                     <div className="flex justify-between">
                        <div className="flex">
                           <WalletExportIcon className="w-5 h-5 stroke-green-600" />
                           <p className="mr-2 font-medium text-green-900">
                              مجموع هزینه ها
                           </p>
                        </div>
                        <p>
                           {NumberSeparator(totalTransaction?.totalWithdrawals)}{' '}
                           تومان
                        </p>
                     </div>
                  </div>
                  <div className="border border-green-50 rounded-14 p-4 mb-4">
                     <div className="flex justify-between">
                        <div className="flex">
                           <WalletImportIcon className="w-5 h-5 stroke-green-600" />
                           <p className="mr-2 font-medium text-green-900">
                              مجموع درآمدها
                           </p>
                        </div>
                        <p>
                           {NumberSeparator(totalTransaction?.totalDeposits)}{' '}
                           تومان
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full sm:w-8/12 sm:pr-2">
               <div className="w-full min-h-full p-2 border rounded-14 ">
                  {topwithdrawal ? (
                     <>
                        <p className="m-2">
                           برای چه دسته بندی بیشتر هزینه کرده اید؟
                        </p>
                        <div className="w-full flex flex-wrap-reverse items-center justify-between">
                           <div className="w-full sm:w-1/2">
                              {topwithdrawal?.map((i: any) => {
                                 return (
                                    <p className="flex items-center mt-2 text-green-900">
                                       <span
                                          className={`w-3 h-3 block rounded-50`}
                                          style={{ background: i.color }}
                                       ></span>

                                       <span className="mr-2">
                                          {i.name} : {NumberSeparator(i.amount)}{' '}
                                          تومان
                                       </span>
                                    </p>
                                 );
                              })}
                           </div>
                           <div className="w-full sm:w-1/2">
                              {topwithdrawal && (
                                 <ReactECharts option={option} />
                              )}
                           </div>
                        </div>
                     </>
                  ) : (
                     <EmptyStateComponent text="هنوز هزینه ای ثبت نکرده اید!" />
                  )}
               </div>
            </div>
         </div>
         <div className="w-full mt-4">
            <div className="p-2 border rounded-14 ">
               <p className="flex items-center m-2 mb-4 text-gray-600">
                  <DebitCardIcon className="w-6 h-6 ml-2 stroke-1" />
                  <span className="pt-1">
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
                     th: 'text-center',
                     td: 'text-center py-6 ',
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
                        key="description"
                        className="!rounded-r-none rounded-l-lg"
                     >
                        توضیحات
                     </TableColumn>
                  </TableHeader>
                  <TableBody
                     loadingContent={<Spinner />}
                     isLoading={false}
                     emptyContent={<EmptyStateComponent />}
                  >
                     {allTransaction &&
                        allTransaction.map(
                           (i: IAllTransaction, index: number) => {
                              return (
                                 <TableRow className="bordertabel" key={index}>
                                    <TableCell>{index + 1} </TableCell>
                                    <TableCell>
                                       {' '}
                                       {NumberSeparator(i.amount)} تومان
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
                                       {i.description ? i.description : '-'}
                                    </TableCell>
                                 </TableRow>
                              );
                           }
                        )}
                  </TableBody>
               </Table>
            </div>
         </div>
      </Card>
   );
};

export default DashboardIndex;
