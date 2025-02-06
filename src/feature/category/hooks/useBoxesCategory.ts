import { useEffect, useState } from 'react';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import {
   addBoxController,
   editBoxesController,
   getBoxesController
} from '../helper/controller';

export const useBoxesCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);
   const [disableBtn , setDisableBtn] = useState<boolean>(false)
   const [loading, setLoading] = useState<boolean>(true)
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
      getBoxesController(setBoxesData, setLoading);
   };

   const addBoxesHandler = () => {
      addBoxController(
         selectedBox,
         setSelectedBox,
         setOpenUpsertModal,
         getBoxesHandler, 
         setDisableBtn
      );
   };
   const editBoxesHandler = () => {
      editBoxesController(
         selectedBox,
         getBoxesHandler,
         setOpenUpsertModal,
         setSelectedBox, 
         setDisableBtn
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
      editBoxesHandler,
      disableBtn, 
      loading
   };
};
