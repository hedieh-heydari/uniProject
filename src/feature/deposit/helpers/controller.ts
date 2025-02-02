import { toast } from 'react-toastify';
import { addDepositApi, deleteDepositApi, editDepositApi, GetDepositApi } from './api';

export const getDepositController = (setDepositeData: Function) => {
   GetDepositApi()
      .then((res: any) => {
        setDepositeData(res.data.deposits);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const addDepositController = (
   addDepositData: any,
   setSelectedDeposit: Function,
   setOpenUpsertModal: Function,
   getDepositHandler: Function
) => {
   addDepositApi(addDepositData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.');
         setSelectedDeposit();
         setOpenUpsertModal(false);
         getDepositHandler();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
      });
};

export const editDepositsController = (
   editDepositData: any,
   getDepositHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedDeposit: Function
) => {
   editDepositApi(editDepositData._id, editDepositData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.');
         getDepositHandler();
         setOpenUpsertModal(false);
         setSelectedDeposit();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
      });
};

export const deleteDepositsController = (
   editDepositData: any,
   getDepositeHandler: Function,
   setOpenDeleteDepositModal: Function,
   setSelectedDeposit: Function
) => {
   deleteDepositApi(editDepositData._id)
      .then(() => {
         toast.success('با موفقیت حذف شد.');
         getDepositeHandler();
         setOpenDeleteDepositModal(false);
         setSelectedDeposit();
      })
      .catch(() => {});
};

