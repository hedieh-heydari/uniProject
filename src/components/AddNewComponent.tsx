import { FC } from 'react';
import PlusIcon from '../assets/icons/PlusIcon';
import { IAddNewComponent } from './AddNewComponentInterface';
const AddNewComponent:FC<IAddNewComponent> = ({onclickFunction}) => {
   return (
      <div className="w-full sm:w-4/12 md:w-2/12 p-4">
         <div
         onClick={(e:any) => {
            onclickFunction &&  onclickFunction(e)
         }}
         
         className="w-full min-h-full flex flex-col justify-center items-center shadow-sm border border-green-200 rounded-14">
            <div className="w-10 h-10 flex items-center justify-center my-4 bg-green-50 rounded-50">
               <PlusIcon className="w-5 h-5 stroke-green-600" />
            </div>
         </div>
      </div>
   );
};

export default AddNewComponent;
