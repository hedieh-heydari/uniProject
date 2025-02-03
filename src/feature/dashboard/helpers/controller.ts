import {
   getAllTransactionApi,
   getTopwithdrawalApi,
   getTotalAmountOfMoneyApi,
   getTotalTransactionApi
} from './api';

export const getTotalAmountOfMoneyController = (setTotalAmount: Function) => {
   getTotalAmountOfMoneyApi()
      .then((res: any) => {
         setTotalAmount(res.data.totalMoney);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const getAllTransactionController = (setAllTransaction: Function) => {
   getAllTransactionApi()
      .then((res: any) => {
         setAllTransaction(res.data.transactions);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const getTotalTransactionController = (
   setTotalTransaction: Function
) => {
   getTotalTransactionApi()
      .then((res: any) => {
         setTotalTransaction(res.data);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const getTopwithdrawalController = (setTopwithdrawal: Function) => {
   getTopwithdrawalApi()
      .then((res: any) => {
         setTopwithdrawal(res.data.topWithdrawals);
      })
      .catch((err: any) => {
         console.log(err);
      });
};
