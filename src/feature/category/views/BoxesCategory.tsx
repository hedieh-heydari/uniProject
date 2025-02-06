import { Spinner } from '@nextui-org/react';
import WalletExportIcon from '../../../assets/icons/WalletExportIcon';
import AddNewComponent from '../../../components/AddNewComponent';
import CardsComponent from '../../../components/CardsComponent';
import NumberSeparator from '../../../utils/NumberSeprator';
import { useBoxesCategory } from '../hooks/useBoxesCategory';
import { IIncomeList } from '../interfaces/CategoryInterfaces';
import UpsertBoxesModal from './UpsertBoxesModal';

const BoxesCategory = () => {
   const {
      openUpsertModal,
      setOpenUpsertModal,
      boxesData,
      selectedBox,
      setSelectedBox,
      addBoxesHandler,
      editBoxesHandler,
      disableBtn,
      loading
   } = useBoxesCategory();
   return (
      <div className="flex flex-wrap w-full">
         {loading ? (
            <Spinner size="lg" color='success'/>
         ) : (
            <>
               <AddNewComponent
                  onclickFunction={() => {
                     setOpenUpsertModal(true);
                  }}
               />
               {boxesData &&
                  boxesData.map((i: IIncomeList, index: number) => {
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
                              setSelectedBox(i);
                              setOpenUpsertModal(true);
                           }}
                           amount={`مبلغ: ${NumberSeparator(i.initialAmount)}`}
                        />
                     );
                  })}
            </>
         )}

         <UpsertBoxesModal
            open={openUpsertModal}
            setOpen={setOpenUpsertModal}
            selectedData={selectedBox}
            setData={setSelectedBox}
            addHandler={addBoxesHandler}
            editHandler={editBoxesHandler}
            disableBtn={disableBtn}
         />
      </div>
   );
};
export default BoxesCategory;
