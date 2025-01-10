import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import { useBoxesCategory } from '../hooks/useBoxesCategory';
import UpsertBoxesModal from './UpsertBoxesModal';

const BoxesCategory = () => {
   const { openUpsertModal, setOpenUpsertModal } = useBoxesCategory();
   return (
      <div className="flex flex-wrap w-full">
         <AddNewComponent
            onclickFunction={() => {
               setOpenUpsertModal(true)
            }}
         />
         <CardsComponent
            categoryName="test"
            icon={<WalletExportIcon className="w-5 h-5" />}
            editFunction={() => {
               setOpenUpsertModal(true)
            }}
            amount=" amount: 12345"
         />

         <UpsertBoxesModal
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
         />
      </div>
   );
};
export default BoxesCategory;
