import { useState } from 'react';

export const useIncomeCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);

   return {
      openUpsertModal,
      setOpenUpsertModal
   };
};
