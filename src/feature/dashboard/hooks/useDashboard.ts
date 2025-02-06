import { useEffect, useState } from 'react';
import {
   getAllTransactionController,
   getTopwithdrawalController,
   getTotalAmountOfMoneyController,
   getTotalTransactionController
} from '../helpers/controller';
import NumberSeparator from '../../../utils/NumberSeprator';

export const useDashboard = () => {
   const [totalAmount, setTotalAmount] = useState<any>();
   const [allTransaction, setAllTransaction] = useState<any>();
   const [totalTransaction, setTotalTransaction] = useState<any>();
   const [topwithdrawal, setTopwithdrawal] = useState<any>();
   const [loading, setLoading] = useState<boolean>(true);

   const fetchData = async () => {
      setLoading(true);
      try {
         await Promise.all([
            getTotalAmountOfMoneyController(setTotalAmount),
            getAllTransactionController(setAllTransaction),
            getTotalTransactionController(setTotalTransaction),
            getTopwithdrawalController(setTopwithdrawal)
         ]);
      } catch (error) {
         console.error('Error fetching data:', error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      if (
         !allTransaction ||
         !topwithdrawal ||
         !totalAmount ||
         !totalTransaction ||
         allTransaction.length === 0 ||
         topwithdrawal.length === 0
      ) {
         setLoading(false);
      } else {
         setLoading(false);
      }
   }, [allTransaction, topwithdrawal, totalAmount, totalTransaction]);

   useEffect(() => {
      fetchData();
   }, []);

   const tooltipFormatter = (params: any) => {
      const item = topwithdrawal?.find((i: any) => i.toBox === params.name);
      return item
         ? `<div style="direction: rtl; text-align: right; font-size: 14px; font-weight: 600; color: #333;">
             مبلغ: ${NumberSeparator(item.totalAmount)} تومان
          </div>
          <div style="direction: rtl; text-align: right; font-size: 14px; font-weight: 400; color: #555;">
             دسته بندی: ${item.toBox}
          </div>`
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
                  value: item.totalAmount,
                  name: item.toBox,
                  itemStyle: {
                     color: item.color
                  }
               };
            })
         }
      ]
   };
   return {
      totalAmount,
      allTransaction,
      totalTransaction,
      topwithdrawal,
      loading,
      option
   };
};
