import { Spinner } from '@nextui-org/react';
import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import { useOutgoCategory } from '../hooks/useOutgoCategory';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import UpsertCategoryModal from './upsertCategoryModal';

const OutgoCategory = () => {
   const {
      openUpsertModal,
      setOpenUpsertModal,
      addOutgoHandler,
      editOutgoHandler,
      outgoData,
      selectedOutgo,
      setSelectedOutgo,
      disableBtn,
      loading
   } = useOutgoCategory();
   return (
      <div className="flex flex-wrap w-full">
         {loading ? (
            <Spinner size="lg" color='success' />
         ) : (
            <>
               <AddNewComponent
                  onclickFunction={() => {
                     setOpenUpsertModal(true);
                  }}
               />
               {outgoData &&
                  outgoData.map((i: IIncomeList, index: number) => {
                     return (
                        <CardsComponent
                           key={index}
                           categoryName={i.title}
                           icon={
                              i.logo ? (
                                 <img
                                    src={`https://financialback.liara.run/uploads/${i.logo}`}
                                 />
                              ) : (
                                 <WalletExportIcon className="w-5 h-5" />
                              )
                           }
                           editFunction={() => {
                              setSelectedOutgo(i);
                              setOpenUpsertModal(true);
                           }}
                        />
                     );
                  })}
            </>
         )}

         <UpsertCategoryModal
            type="outgo"
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
            selectedData={selectedOutgo}
            setData={setSelectedOutgo}
            addHandler={addOutgoHandler}
            editHandler={editOutgoHandler}
            disableBtn={disableBtn}
         />
      </div>
   );
};

export default OutgoCategory;
