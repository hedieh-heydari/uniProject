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

const DashboardIndex = () => {
   const { allTransaction, topwithdrawal, totalAmount, totalTransaction } =
      useDashboard();

   // const tooltipFormatter = (params: any) => {
   //    return params
   //       .map((param: any) => {
   //          const item = topwithdrawal?.find((i: any) => i.name === param.name);
   //          return item
   //             ? `<div style="direction: rtl; text-align: right;">مقدار: ${item.percentage}</div>
   //            <div style="direction: ltr; text-align: left;">${item.name}</div>`
   //             : '';
   //       })
   //       .join('<br/><br/>');
   // };

   const option = {
      textStyle: {
         fontFamily: 'IranYekanNumber'
      },

      tooltip: {
         trigger: 'item',
         confine: true
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
                  name: item.name
                  //   itemStyle: {
                  //     color: item.color,
                  //   },
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
                  داشبورد
               </span>
            </div>
         </CardHeader>
         <CardBody className="text-right">
            هزینه های خود را مدیریت کنید.
         </CardBody>
         <div className="w-full flex flex-wrap">
            <div className="w-full sm:w-1/2 sm:pl-2 max-sm:mb-4">
               <div className="w-full min-h-full p-2 border rounded-14">
                  <div>total amount: {NumberSeparator(totalAmount)}</div>
                  <div>
                     total withdrawal:
                     {NumberSeparator(totalTransaction?.totalWithdrawals)}
                  </div>
                  <div>
                     total deposit:
                     {NumberSeparator(totalTransaction?.totalDeposits)}
                  </div>
               </div>
            </div>
            <div className="w-full sm:w-1/2 sm:pr-2">
               <div className="w-full min-h-full p-2 border rounded-14 ">
                  {topwithdrawal && <ReactECharts option={option} />}
               </div>
            </div>
         </div>
         <div className="w-full mt-4">
            <div className="p-2 border rounded-14">
               <p>all transactions</p>
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
                     emptyContent={true ? ' ' : 'اطلاعات وارد شده وجود ندارد.'}
                  >
                     {allTransaction &&
                        allTransaction.map(
                           (i: IAllTransaction, index: number) => {
                              return (
                                 <TableRow className="bordertabel" key={index}>
                                    <TableCell>{index + 1} </TableCell>
                                    <TableCell dir="ltr">
                                       {' '}
                                       {NumberSeparator(i.amount)}{' '}
                                    </TableCell>
                                    <TableCell dir="ltr">
                                       {i.date && i.date.split('T')[0]}
                                    </TableCell>

                                    <TableCell dir="ltr">
                                       {i.type === 'withdrawal'
                                          ? 'برداشت'
                                          : 'واریز'}
                                    </TableCell>
                                    <TableCell dir="ltr">
                                       {i.description}
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
