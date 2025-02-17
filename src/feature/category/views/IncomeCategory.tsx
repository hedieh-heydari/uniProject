import { Spinner } from '@nextui-org/react';
import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import { useIncomeCategory } from '../hooks/useIncomeCategory';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import UpsertCategoryModal from './upsertCategoryModal';

const IncomeCategory = () => {
   const {
      openUpsertModal,
      setOpenUpsertModal,
      incomeData,
      selectedIncome,
      setSelectedIncome,
      addIncomeHandler,
      editIncomeHandler,
      disableBtn,
      loading
   } = useIncomeCategory();
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
               {incomeData &&
                  incomeData.map((i: IIncomeList, index: number) => {
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
                              setSelectedIncome(i);
                              setOpenUpsertModal(true);
                           }}
                        />
                     );
                  })}
            </>
         )}

         <UpsertCategoryModal
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
            type="income"
            selectedData={selectedIncome}
            setData={setSelectedIncome}
            addHandler={addIncomeHandler}
            editHandler={editIncomeHandler}
            disableBtn={disableBtn}
         />
      </div>
   );
};

export default IncomeCategory;
