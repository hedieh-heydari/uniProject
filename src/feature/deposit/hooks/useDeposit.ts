import { useState } from 'react';

export const useDeposit = () => {
   const [openDeleteDepositModal, setOpenDeleteDpositModal] =
      useState<boolean>(false);
   const [openUpsertDepositModal, setOpenUpserDepositModal] =
      useState<boolean>(false);

   return {
      openDeleteDepositModal,
      setOpenDeleteDpositModal,
      openUpsertDepositModal,
      setOpenUpserDepositModal
   };
};
