import { useEffect, useState } from 'react';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import {
   addBoxController,
   editBoxesController,
   getBoxesController
} from '../helper/controller';

export const useBoxesCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);
   const [boxesData, setBoxesData] = useState<IIncomeList[]>([
      {
         _id: '',
         title: '',
         logo: '',
         createdAt: '',
         updatedAt: '',
         __v: 0,
         initialAmount: ''
      }
   ]);
   const [selectedBox, setSelectedBox] = useState<IIncomeList>();

   const getBoxesHandler = () => {
      getBoxesController(setBoxesData);
   };

   const addBoxesHandler = () => {
      addBoxController(
         selectedBox,
         setSelectedBox,
         setOpenUpsertModal,
         getBoxesHandler
      );
   };
   const editBoxesHandler = () => {
      editBoxesController(
         selectedBox,
         getBoxesHandler,
         setOpenUpsertModal,
         setSelectedBox
      );
   };

   useEffect(() => {
      getBoxesHandler();
   }, []);

   return {
      openUpsertModal,
      setOpenUpsertModal,
      boxesData,
      selectedBox,
      setSelectedBox,
      addBoxesHandler,
      editBoxesHandler
   };
};
