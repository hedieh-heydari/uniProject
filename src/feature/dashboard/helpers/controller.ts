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
         setTotalAmount(0); // Set a fallback value to prevent breaking the UI
      });
};

export const getAllTransactionController = (setAllTransaction: Function) => {
   getAllTransactionApi()
      .then((res: any) => {
         setAllTransaction(res.data.transactions);
      })
      .catch((err: any) => {
         console.log(err);
         setAllTransaction([]); // Set a fallback empty array if data is not available
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
         setTotalTransaction(null); // Set null to indicate no data
      });
};

function getRandomHexColor() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

export const getTopwithdrawalController = (setTopwithdrawal: Function) => {
   getTopwithdrawalApi()
      .then((res: any) => {

         setTopwithdrawal(
            res.data.topWithdrawals.map((i: any) => {
               return { ...i, color: getRandomHexColor() };
            })
         );
      })
      .catch((err: any) => {
         console.log(err);
         setTopwithdrawal([]); // Set fallback empty array in case of no data
      });
};

