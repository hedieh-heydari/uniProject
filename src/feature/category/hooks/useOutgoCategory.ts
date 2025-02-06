import { useEffect, useState } from 'react';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import {
   addOutgoController,
   editOutgoController,
   getOutgoController
} from '../helper/controller';

export const useOutgoCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);
   const [disableBtn, setDisableBtn] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(true);
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
      getOutgoController(setOutgoData, setLoading);
   };

   const addOutgoHandler = () => {
      addOutgoController(
         selectedOutgo,
         setSelectedOutgo,
         setOpenUpsertModal,
         getOutgoHandler,
         setDisableBtn
      );
   };
   const editOutgoHandler = () => {
      editOutgoController(
         selectedOutgo,
         getOutgoHandler,
         setOpenUpsertModal,
         setSelectedOutgo,
         setDisableBtn
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
      getOutgoHandler,
      disableBtn,
      loading
   };
};
