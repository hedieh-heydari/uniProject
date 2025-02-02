import { useEffect, useState } from 'react';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import {
   addIncomeController,
   editIncomeController,
   getIncomeController
} from '../helper/controller';

export const useIncomeCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);
   const [incomeData, setIncomeData] = useState<IIncomeList[]>([
      {
         _id: '',
         title: '',
         logo: '',
         createdAt: '',
         updatedAt: '',
         __v: 0
      }
   ]);

   const [selectedIncome, setSelectedIncome] = useState<IIncomeList>();

   const getIncomeHandler = () => {
      getIncomeController(setIncomeData);
   };

   const addIncomeHandler = () => {
      addIncomeController(
         selectedIncome,
         setSelectedIncome,
         setOpenUpsertModal,
         getIncomeHandler
      );
   };
   const editIncomeHandler = () => {
      editIncomeController(selectedIncome, getIncomeHandler,setOpenUpsertModal,setSelectedIncome);
   };

   useEffect(() => {
      getIncomeHandler();
   }, []);

   return {
      openUpsertModal,
      setOpenUpsertModal,
      incomeData,
      setIncomeData,
      selectedIncome,
      setSelectedIncome,
      addIncomeHandler, 
      editIncomeHandler
   };
};
