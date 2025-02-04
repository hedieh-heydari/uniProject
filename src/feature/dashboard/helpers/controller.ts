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
         // setTopwithdrawal(res.data.topWithdrawals);

         // response.data.response.chart_data.map((i: IReasonsChart, index: number) => {
         //    return { ...i, color: reasonscolor[index].color };
         //  })

         setTopwithdrawal(
            res.data.topWithdrawals.map((i: any) => {
               return { ...i, color: getRandomHexColor() };
            })
         );
      })
      .catch((err: any) => {
         console.log(err);
      });
};
