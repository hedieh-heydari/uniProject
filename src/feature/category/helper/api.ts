// router.put("/:type/:id", upload.single('logo'), updateCategory);

import Axiose from '../../../utils/Axios/axios';

export const GetIncomeApi = async () => {
   return Axiose.get(`${import.meta.env.VITE_BASE_URL}categories/income`);
};

export const addIncomeApi = async (addIncomeData: any) => {
   return Axiose.post(
      `${import.meta.env.VITE_BASE_URL}categories/income`,
      addIncomeData
   );
};
export const editIncomeApi = async (incomeId: string, editIncomeData: any) => {
   return Axiose.put(
      `${import.meta.env.VITE_BASE_URL}categories/income/${incomeId}`,
      editIncomeData
   );
};

export const getOutgoApi = async () => {
   return Axiose.get(`${import.meta.env.VITE_BASE_URL}categories/outgo`);
};
export const addOutgoApi = async (addOutgoData: any) => {
   return Axiose.post(
      `${import.meta.env.VITE_BASE_URL}categories/outgo`,
      addOutgoData
   );
};

export const editOutgoApi = async (OutgoId: string, editOutgoData: any) => {
   return Axiose.put(
      `${import.meta.env.VITE_BASE_URL}categories/outgo/${OutgoId}`,
      editOutgoData
   );
};
