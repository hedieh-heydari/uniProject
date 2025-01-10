import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import { useIncomeCategory } from '../hooks/useIncomeCategory';
import UpsertCategoryModal from './upsertCategoryModal';

const IncomeCategory = () => {
   const { openUpsertModal, setOpenUpsertModal } = useIncomeCategory();
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
         />

         <UpsertCategoryModal
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
            type="income"
         />
      </div>
   );
};

export default IncomeCategory;
