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
         toast.success('با موفقیت افزوده شد.');
         setSelectedIncome();
         setOpenUpsertModal(false);
         getIncomeHandler();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
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
         toast.success('با موفقیت ویرایش شد.');
         getIncomeHandler();
         setOpenUpsertModal(false);
         setSelectedIncome();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
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
         toast.success('با موفقیت افزوده شد.');
         setSelectedOutgo();
         setOpenUpsertModal(false);
         getOutgoHandler();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
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
         toast.success('با موفقیت ویرایش شد.');
         getOutgoHandler();
         setOpenUpsertModal(false);
         setSelectedOutgo();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
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
   getBoxesHandler: Function
) => {
   const formData = new FormData();
   formData.append('logo', addBoxData.logo[0]);
   formData.append('title', addBoxData.title);
   formData.append('initialAmount', addBoxData.initialAmount);
   addBoxesApi(formData)
      .then(() => {
         toast.success('با موفقیت افزوده شد.');
         setSelectedBox();
         setOpenUpsertModal(false);
         getBoxesHandler();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
      });
};

export const editBoxesController = (
   editBoxesData: any,
   getBoxesHandler: Function,
   setOpenUpsertModal: Function,
   setSelectedBox: Function
) => {
   const formData = new FormData();
   formData.append('logo', editBoxesData.logo[0]);
   formData.append('title', editBoxesData.title);
   formData.append('initialAmount', editBoxesData.initialAmount);

   editBoxesApi(editBoxesData._id, formData)
      .then(() => {
         toast.success('با موفقیت ویرایش شد.');
         getBoxesHandler();
         setOpenUpsertModal(false);
         setSelectedBox();
      })
      .catch(() => {
         toast.error('خطایی رخ داده است.');
      });
};
