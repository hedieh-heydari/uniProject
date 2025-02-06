import { toast } from 'react-toastify';
import { addDepositApi, deleteDepositApi, editDepositApi, GetDepositApi } from './api';

export const getDepositController = (setDepositeData: Function) => {
   GetDepositApi()
      .then((res: any) => {
        setDepositeData(res.data.deposits);
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const addDepositController = (
   addDepositData: any,
   setSelectedDeposit: Function,
   setOpenUpsertModal: Function,
   getDepositHandler: Function,
   setUpsertDisableBtn:Function
) => {
   setUpsertDisableBtn(true)
   addDepositApi(addDepositData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedDeposit();
         setOpenUpsertModal(false);
         getDepositHandler();
         setUpsertDisableBtn(false)
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
         setUpsertDisableBtn(false)
      });
};

export const editDepositsController = (
   editDepositData: any,
   getDepositHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedDeposit: Function,
   setUpsertDisableBtn:Function
) => {
   setUpsertDisableBtn(true)
   editDepositApi(editDepositData._id, editDepositData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getDepositHandler();
         setOpenUpsertModal(false);
         setSelectedDeposit();
         setUpsertDisableBtn(false)
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
         setUpsertDisableBtn(false)
      });
};

export const deleteDepositsController = (
   editDepositData: any,
   getDepositeHandler: Function,
   setOpenDeleteDepositModal: Function,
   setSelectedDeposit: Function,
   setDeleteDisableBtn:Function
) => {
   setDeleteDisableBtn(true)
   deleteDepositApi(editDepositData._id)
      .then(() => {
         toast.success('با موفقیت حذف شد.');
         getDepositeHandler();
         setOpenDeleteDepositModal(false);
         setSelectedDeposit();
         setDeleteDisableBtn(false)
      })
      .catch((err:any) => {
         setDeleteDisableBtn(false)
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

