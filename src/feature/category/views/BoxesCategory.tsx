import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';

const BoxesCategory = () => {
   return (
      <div className="flex flex-wrap w-full">
         <AddNewComponent
            onclickFunction={() => {
               console.log('add test');
            }}
         />
         <CardsComponent
            categoryName="test"
            icon={<WalletExportIcon className="w-5 h-5" />}
            EditFunction={() => {
               console.log('first');
            }}
            amount=" amount: 12345"
         />
      </div>
   );
};
export default BoxesCategory;
