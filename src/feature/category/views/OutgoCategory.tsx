import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import { useOutgoCategory } from '../hooks/useOutgoCategory';
import UpsertCategoryModal from './upsertCategoryModal';

const OutgoCategory = () => {
   const { openUpsertModal, setOpenUpsertModal } = useOutgoCategory();
   return (
      <div className="flex flex-wrap w-full">
         <AddNewComponent
            onclickFunction={() => {
               setOpenUpsertModal(true);
            }}
         />
         <CardsComponent
            categoryName="test"
            icon={<WalletExportIcon className="w-5 h-5" />}
            editFunction={() => {
               setOpenUpsertModal(true);
            }}
         />

         <UpsertCategoryModal
            type="outgo"
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
         />
      </div>
   );
};

export default OutgoCategory;
