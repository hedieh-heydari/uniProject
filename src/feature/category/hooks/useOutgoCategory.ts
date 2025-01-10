import { useState } from 'react';

export const useOutgoCategory = () => {
   const [openUpsertModal, setOpenUpsertModal] = useState<boolean>(false);

   return {
      openUpsertModal,
      setOpenUpsertModal
   };
};
