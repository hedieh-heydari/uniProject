import { toast } from 'react-toastify';
import {
   addWithdrawalApi,
   deleteWithdrawalApi,
   editWithdrawalApi,
   GetWithdrawalApi
} from './api';

export const getWithdrawalController = (setWithdrawalData: Function) => {
   GetWithdrawalApi()
      .then((res: any) => {
         setWithdrawalData(res.data.withdrawals);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const addwithdrawalsController = (
   addWithdrawalData: any,
   setSelectedWithdraw: Function,
   setOpenUpsertModal: Function,
   getWithdrawalHandler: Function
) => {
   addWithdrawalApi(addWithdrawalData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedWithdraw();
         setOpenUpsertModal(false);
         getWithdrawalHandler();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const editwithdrawalsController = (
   editWithdrawalData: any,
   getWithdrawalHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedWithdraw: Function
) => {
   editWithdrawalApi(editWithdrawalData._id, editWithdrawalData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getWithdrawalHandler();
         setOpenUpsertModal(false);
         setSelectedWithdraw();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const deleteWithdrawalController = (
   editWithdrawalData: any,
   getWithdrawalHandler: Function,
   setOpenDeleteWithdrawalModal: Function,
   setSelectedWithdraw: Function
) => {
   deleteWithdrawalApi(editWithdrawalData._id)
      .then(() => {
         toast.success('با موفقیت حذف شد.');
         getWithdrawalHandler();
         setOpenDeleteWithdrawalModal(false);
         setSelectedWithdraw();
      })
      .catch(() => {});
};

