import Axiose from "../../../utils/Axios/axios";

export const getTotalAmountOfMoneyApi = async () => {
    return Axiose.get(`${import.meta.env.VITE_BASE_URL}dashboard/total-money`);
 };

 export const getAllTransactionApi = async () => {
    return Axiose.get(`${import.meta.env.VITE_BASE_URL}dashboard/transactions`);
 };

 export const getTotalTransactionApi = async () => {
    return Axiose.get(`${import.meta.env.VITE_BASE_URL}dashboard/total-transactions`);
 };

 export const getTopwithdrawalApi = async () => {
    return Axiose.get(`${import.meta.env.VITE_BASE_URL}dashboard/top-withdrawals`);
 };