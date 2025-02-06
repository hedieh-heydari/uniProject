import { toast } from 'react-toastify';
import {
   addBoxesApi,
   addIncomeApi,
   addOutgoApi,
   editBoxesApi,
   editIncomeApi,
   editOutgoApi,
   getBoxesApi,
   GetIncomeApi,
   getOutgoApi
} from './api';

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
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedIncome();
         setOpenUpsertModal(false);
         getIncomeHandler();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};
export const editIncomeController = (
   editIncomeData: any,
   getIncomeHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedIncome: Function
) => {
   const formData = new FormData();
   formData.append('logo', editIncomeData.logo[0]);
   formData.append('title', editIncomeData.title);
   editIncomeApi(editIncomeData._id, formData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getIncomeHandler();
         setOpenUpsertModal(false);
         setSelectedIncome();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const getOutgoController = (setOutgoData: Function) => {
   getOutgoApi()
      .then((res: any) => {
         setOutgoData(res.data.categories);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const addOutgoController = (
   addOutgoData: any,
   setSelectedOutgo: Function,
   setOpenUpsertModal: Function,
   getOutgoHandler: Function
) => {
   const formData = new FormData();
   formData.append('logo', addOutgoData.logo[0]);
   formData.append('title', addOutgoData.title);
   addOutgoApi(formData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedOutgo();
         setOpenUpsertModal(false);
         getOutgoHandler();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const editOutgoController = (
   editOutgoData: any,
   getOutgoHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedOutgo: Function
) => {
   const formData = new FormData();
   formData.append('logo', editOutgoData.logo[0]);
   formData.append('title', editOutgoData.title);
   editOutgoApi(editOutgoData._id, formData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getOutgoHandler();
         setOpenUpsertModal(false);
         setSelectedOutgo();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      });
};

export const getBoxesController = (setBoxesData: Function) => {
   getBoxesApi()
      .then((res: any) => {
         setBoxesData(res.data.boxes);
      })
      .catch((err: any) => {
         console.log(err);
      });
};

export const addBoxController = (
   addBoxData: any,
   setSelectedBox: Function,
   setOpenUpsertModal: Function,
   getBoxesHandler: Function, 
   setDisableBtn:Function
) => {
   const formData = new FormData();
   formData.append('logo', addBoxData.logo[0]);
   formData.append('title', addBoxData.title);
   formData.append('initialAmount', addBoxData.initialAmount);
   setDisableBtn(true)
   addBoxesApi(formData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.',{ className: 'toast-custom' });
         setSelectedBox();
         setOpenUpsertModal(false);
         getBoxesHandler();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      }).finally(()=>{
         setDisableBtn(true)
      })
};

export const editBoxesController = (
   editBoxesData: any,
   getBoxesHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedBox: Function, 
   setDisableBtn:Function
) => {
   const formData = new FormData();
   formData.append('logo', editBoxesData.logo[0]);
   formData.append('title', editBoxesData.title);
   formData.append('initialAmount', editBoxesData.initialAmount);
   setDisableBtn(true)
   editBoxesApi(editBoxesData._id, formData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.',{ className: 'toast-custom' });
         getBoxesHandler();
         setOpenUpsertModal(false);
         setSelectedBox();
      })
      .catch((err: any) => {
         console.log(err);
         const errorMessage = err?.response?.data?.message || 'خطایی در دریافت اطلاعات رخ داده است.';
         toast.error(errorMessage, { className: 'toast-custom' });
      }).finally(()=>{
         setDisableBtn(false)
      })
};
