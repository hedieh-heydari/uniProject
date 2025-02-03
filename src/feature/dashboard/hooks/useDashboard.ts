import { useEffect, useState } from 'react';
import {
   getAllTransactionController,
   getTopwithdrawalController,
   getTotalAmountOfMoneyController,
   getTotalTransactionController
} from '../helpers/controller';

export const useDashboard = () => {
   const [totalAmount, setTotalAmount] = useState();
   const [allTransaction, setAllTransaction] = useState();
   const [totalTransaction, setTotalTransaction] = useState();
   const [topwithdrawal, setTopwithdrawal] = useState();

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
