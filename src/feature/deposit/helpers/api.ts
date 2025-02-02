import Axiose from '../../../utils/Axios/axios';

export const GetDepositApi = async () => {
   return Axiose.get(`${import.meta.env.VITE_BASE_URL}deposits`);
};
export const addDepositApi = async (depositData: any) => {
   return Axiose.post(
      `${import.meta.env.VITE_BASE_URL}deposits`,
      depositData
   );
};
export const editDepositApi = async (
    depositId: string,
   depositData: any
) => {
   return Axiose.put(
      `${import.meta.env.VITE_BASE_URL}deposits/${depositId}`,
      depositData
   );
};
export const deleteDepositApi = async (depositId: string) => {
   return Axiose.delete(
      `${import.meta.env.VITE_BASE_URL}deposits/${depositId}`
   );
};

