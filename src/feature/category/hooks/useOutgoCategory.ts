import { useEffect, useState } from 'react';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import {
   addOutgoController,
   editOutgoController,
   getOutgoController
} from '../helper/controller';

export const useOutgoCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);
   const [outgoData, setOutgoData] = useState<IIncomeList[]>([
      {
         _id: '',
         title: '',
         logo: '',
         createdAt: '',
         updatedAt: '',
         __v: 0
      }
   ]);

   const [selectedOutgo, setSelectedOutgo] = useState<IIncomeList>();

   const getOutgoHandler = () => {
      getOutgoController(setOutgoData);
   };

   const addOutgoHandler = () => {
      addOutgoController(
         selectedOutgo,
         setSelectedOutgo,
         setOpenUpsertModal,
         getOutgoHandler
      );
   };
   const editOutgoHandler = () => {
      editOutgoController(
         selectedOutgo,
         getOutgoHandler,
         setOpenUpsertModal,
         setSelectedOutgo
      );
   };

   useEffect(() => {
      getOutgoHandler();
   }, []);

   return {
      openUpsertModal,
      setOpenUpsertModal,
      outgoData,
      addOutgoHandler,
      editOutgoHandler,
      selectedOutgo,
      setSelectedOutgo,
      getOutgoHandler
   };
};
