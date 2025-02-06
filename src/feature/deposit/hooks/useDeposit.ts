import { useEffect, useState } from 'react';
import { IDeposit } from '../interface/DepositInterface';
import { getBoxesController, getIncomeController } from '../../category/helper/controller';
import { addDepositController, deleteDepositsController, editDepositsController, getDepositController } from '../helpers/controller';

export const useDeposit = () => {
   const [loading, setLoading] = useState<boolean>(true)
   const [deleteDisableBtn, setDeleteDisableBtn] = useState<boolean>(false)
   const [upsertDisableBtn, setUpsertDisableBtn] = useState<boolean>(false)
   const [openDeleteDepositModal, setOpenDeleteDpositModal] =
      useState<boolean>(false);
   const [openUpsertDepositModal, setOpenUpserDepositModal] =
      useState<boolean>(false);

   const [incomeSelect, setIncomeSelect] = useState([]);
   const [boxes, setBoxes] = useState([]);

   const [depositeData, setDepositData] = useState<IDeposit[]>([]);
   const [selectedDeposit, setSelectedDeposit] = useState<IDeposit>();

   const getDepositHandler = () => {
      getDepositController(setDepositData);
   };

   const addDepositHandler = () => {
      addDepositController(
         selectedDeposit,
         setSelectedDeposit,
         setOpenUpserDepositModal,
         getDepositHandler,
         setUpsertDisableBtn
      );
   };
   const editDepositHandler = () => {
      editDepositsController(
         selectedDeposit,
         getDepositHandler,
         setOpenUpserDepositModal,
         setSelectedDeposit, 
         setUpsertDisableBtn
      );
   };

   const deleteDepositHandler = () => {
      deleteDepositsController(
         selectedDeposit,
         getDepositHandler,
         setOpenDeleteDpositModal,
         setSelectedDeposit,
         setDeleteDisableBtn
      );
   };

   useEffect(() => {
      getDepositHandler();
      getIncomeController(setIncomeSelect, setLoading);
      getBoxesController(setBoxes, setLoading);
   }, []);

   return {
      openDeleteDepositModal,
      setOpenDeleteDpositModal,
      openUpsertDepositModal,
      setOpenUpserDepositModal,
      depositeData,
      setDepositData,
      selectedDeposit,
      setSelectedDeposit,
      addDepositHandler,
      editDepositHandler,
      deleteDepositHandler,
      incomeSelect,
      boxes,
      loading,
      deleteDisableBtn,
      upsertDisableBtn

   };
};
