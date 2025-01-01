import { useState } from 'react';

export const useWithdrawal = () => {
   const [openDeleteWidthrawalModal, setOpenDeleteWithdrawalModal] =
      useState<boolean>(false);
   const [openUpsertWidthrawalModal, setOpenUpsertWithdrawalModal] =
      useState<boolean>(false);

   return {
      openDeleteWidthrawalModal,
      setOpenDeleteWithdrawalModal,
      openUpsertWidthrawalModal,
      setOpenUpsertWithdrawalModal
   };
};
