import Axiose from '../../../utils/Axios/axios';

export const GetWithdrawalApi = async () => {
   return Axiose.get(`${import.meta.env.VITE_BASE_URL}withdrawals`);
};
export const addWithdrawalApi = async (addWithdrawalData: any) => {
   return Axiose.post(
      `${import.meta.env.VITE_BASE_URL}withdrawals`,
      addWithdrawalData
   );
};
export const editWithdrawalApi = async (
   withdrawalId: string,
   addWithdrawalData: any
) => {
   return Axiose.put(
      `${import.meta.env.VITE_BASE_URL}withdrawals/${withdrawalId}`,
      addWithdrawalData
   );
};
export const deleteWithdrawalApi = async (withdrawalId: string) => {
   return Axiose.delete(
      `${import.meta.env.VITE_BASE_URL}withdrawals/${withdrawalId}`
   );
};

