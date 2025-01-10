import { FC, } from 'react';
import EditIcon from '../assets/icons/EditIcon';
import { ICardsComponent } from './CardsComponetInterface';

const CardsComponent: FC<ICardsComponent> = ({
   editFunction,
   amount,
   categoryName,
   icon
}) => {
   return (
      <div className="w-full sm:w-4/12 md:w-2/12 p-4">
         <div className="w-full flex flex-col justify-center items-center shadow-sm border border-green-200 rounded-14">
            <div className="w-10 h-10 flex items-center justify-center my-4 bg-green-50 rounded-50">
                {icon && icon}
            </div>
            <p
               className="flex items-center text-green-900 mb-4 cursor-pointer"
               onClick={(e:any) => {
                  editFunction && editFunction(e);
               }}
            >
               <EditIcon className="w-3 h-3 ml-2" />
               <span className="text-green-900">{categoryName}</span>
            </p>
            {amount ? (
               <p className="mb-4 text-sm text-green-900">{amount}</p>
            ) : (
               ''
            )}
         </div>
      </div>
   );
};

export default CardsComponent;
