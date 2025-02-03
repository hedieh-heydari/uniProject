import { useEffect, useState } from 'react';
import {
   getAllTransactionController,
   getTopwithdrawalController,
   getTotalAmountOfMoneyController,
   getTotalTransactionController
} from '../helpers/controller';

export const useDashboard = () => {
   const [totalAmount, setTotalAmount] = useState<any>();
   const [allTransaction, setAllTransaction] = useState<any>();
   const [totalTransaction, setTotalTransaction] = useState<any>();
   const [topwithdrawal, setTopwithdrawal] = useState<any>();

   useEffect(() => {
      getTotalAmountOfMoneyController(setTotalAmount);
      getAllTransactionController(setAllTransaction);
      getTotalTransactionController(setTotalTransaction);
      getTopwithdrawalController(setTopwithdrawal);
   }, []);

   return {
      totalAmount,
      allTransaction,
      totalTransaction,
      topwithdrawal
   };
};
