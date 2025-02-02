import { useEffect, useState } from 'react';
import {
   addwithdrawalsController,
   deleteWithdrawalController,
   editwithdrawalsController,
   getWithdrawalController
} from '../helpers/controller';
import { IWithdrawal } from '../interfaces/WithdrawalInterface';
import {
   getBoxesController,
   getOutgoController
} from '../../category/helper/controller';

export const useWithdrawal = () => {
   const [openDeleteWidthrawalModal, setOpenDeleteWithdrawalModal] =
      useState<boolean>(false);
   const [openUpsertWidthrawalModal, setOpenUpsertWithdrawalModal] =
      useState<boolean>(false);
   const [outgoSelect, setOutgoSelect] = useState([]);
   const [boxes, setBoxes] = useState([]);

   const [withdrwalaData, setwithdrwalaData] = useState<IWithdrawal[]>([]);
   const [selectedWithdraw, setSelectedWithdraw] = useState<IWithdrawal>();

   const getWithdrawalHandler = () => {
      getWithdrawalController(setwithdrwalaData);
   };

   const addWithdrawalHandler = () => {
      addwithdrawalsController(
         selectedWithdraw,
         setSelectedWithdraw,
         setOpenUpsertWithdrawalModal,
         getWithdrawalHandler
      );
   };
   const editWithdrawalHandler = () => {
      editwithdrawalsController(
         selectedWithdraw,
         getWithdrawalHandler,
         setOpenUpsertWithdrawalModal,
         setSelectedWithdraw
      );
   };

   const deleteWithdrawHandler = () => {
      deleteWithdrawalController(
         selectedWithdraw,
         getWithdrawalHandler,
         setOpenDeleteWithdrawalModal,
         setSelectedWithdraw
      );
   };

   useEffect(() => {
      getWithdrawalHandler();
      getOutgoController(setOutgoSelect);
      getBoxesController(setBoxes);
   }, []);

   return {
      openDeleteWidthrawalModal,
      setOpenDeleteWithdrawalModal,
      openUpsertWidthrawalModal,
      setOpenUpsertWithdrawalModal,
      selectedWithdraw,
      setSelectedWithdraw,
      addWithdrawalHandler,
      editWithdrawalHandler,
      deleteWithdrawHandler,
      withdrwalaData,
      outgoSelect,
      boxes
   };
};
