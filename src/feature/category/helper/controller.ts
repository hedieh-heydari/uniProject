import { toast } from 'react-toastify';
import { addIncomeApi, GetIncomeApi } from './api';

export const getIncomeController = (setIncomeData: Function) => {
   GetIncomeApi()
      .then((res: any) => {
         setIncomeData(res.data.categories);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const addIncomeController = (
   addIncomeData: any,
   setSelectedIncome: Function,
   setOpenUpsertModal: Function,
   getIncomeHandler: Function
) => {
   const formData = new FormData();
   formData.append('logo', addIncomeData.logo[0]);
   formData.append('title', addIncomeData.title);
   addIncomeApi(formData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.');
         setSelectedIncome();
         setOpenUpsertModal(false);
         getIncomeHandler();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
      });
};
