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
   const [loading, setLoading] = useState<boolean>(true)
   const [deleteDisableBtn, setDeleteDisableBtn] = useState<boolean>(false)
   const [upsertDisableBtn, setUpsertDisableBtn] = useState<boolean>(false)
   const [openDeleteWidthrawalModal, setOpenDeleteWithdrawalModal] =
      useState<boolean>(false);
   const [openUpsertWidthrawalModal, setOpenUpsertWithdrawalModal] =
      useState<boolean>(false);
   const [outgoSelect, setOutgoSelect] = useState([]);
   const [boxes, setBoxes] = useState([]);

   const [withdrwalaData, setwithdrwalaData] = useState<IWithdrawal[]>([]);
   const [selectedWithdraw, setSelectedWithdraw] = useState<IWithdrawal>();

   const getWithdrawalHandler = () => {
      getWithdrawalController(setwithdrwalaData, setLoading);
   };

   const addWithdrawalHandler = () => {
      addwithdrawalsController(
         selectedWithdraw,
         setSelectedWithdraw,
         setOpenUpsertWithdrawalModal,
         getWithdrawalHandler,
         setUpsertDisableBtn
      );
   };
   const editWithdrawalHandler = () => {
      editwithdrawalsController(
         selectedWithdraw,
         getWithdrawalHandler,
         setOpenUpsertWithdrawalModal,
         setSelectedWithdraw,
         setUpsertDisableBtn
      );
   };

   const deleteWithdrawHandler = () => {
      deleteWithdrawalController(
         selectedWithdraw,
         getWithdrawalHandler,
         setOpenDeleteWithdrawalModal,
         setSelectedWithdraw, 
         setDeleteDisableBtn
      );
   };

   useEffect(() => {
      getWithdrawalHandler();
      getOutgoController(setOutgoSelect, setLoading);
      getBoxesController(setBoxes, setLoading);
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
      boxes, 
      loading,
      deleteDisableBtn,
      upsertDisableBtn
   };
};
