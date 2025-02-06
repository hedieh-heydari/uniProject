import { toast } from 'react-toastify';
import {
   addWithdrawalApi,
   deleteWithdrawalApi,
   editWithdrawalApi,
   GetWithdrawalApi
} from './api';

export const getWithdrawalController = (setWithdrawalData: Function, setLoading:Function) => {
   GetWithdrawalApi()
      .then((res: any) => {
         setWithdrawalData(res.data.withdrawals);
         setLoading(false)
      })
      .catch((err: any) => {
         console.log(err);
         setLoading(false)
      });
};

export const addwithdrawalsController = (
   addWithdrawalData: any,
   setSelectedWithdraw: Function,
   setOpenUpsertModal: Function,
   getWithdrawalHandler: Function,
   setUpsertDisableBtn:Function
) => {
   setUpsertDisableBtn(true)
   addWithdrawalApi(addWithdrawalData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedWithdraw();
         setOpenUpsertModal(false);
         getWithdrawalHandler();
         setUpsertDisableBtn(false)
      })
      .catch((err: any) => {
         console.log(err);
         setUpsertDisableBtn(false)
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const editwithdrawalsController = (
   editWithdrawalData: any,
   getWithdrawalHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedWithdraw: Function,
   setUpsertDisableBtn:Function
) => {
   setUpsertDisableBtn(true)
   editWithdrawalApi(editWithdrawalData._id, editWithdrawalData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getWithdrawalHandler();
         setOpenUpsertModal(false);
         setSelectedWithdraw();
         setUpsertDisableBtn(false)
      })
      .catch((err: any) => {
         console.log(err);
         setUpsertDisableBtn(false)
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const deleteWithdrawalController = (
   editWithdrawalData: any,
   getWithdrawalHandler: Function,
   setOpenDeleteWithdrawalModal: Function,
   setSelectedWithdraw: Function,
   setDeleteDisableBtn:Function
) => {
   setDeleteDisableBtn(true)
   deleteWithdrawalApi(editWithdrawalData._id)
      .then(() => {
         toast.success('با موفقیت حذف شد.');
         getWithdrawalHandler();
         setOpenDeleteWithdrawalModal(false);
         setSelectedWithdraw();
         setDeleteDisableBtn(false)
      })
      .catch((err:any) => {
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
         setDeleteDisableBtn(false)
      });
};

