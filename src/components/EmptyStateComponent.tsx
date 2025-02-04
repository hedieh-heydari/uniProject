import { FC } from "react"
import EmptyTableIcon from "../assets/icons/EmptyStateIcon"
interface IEmptyTableComponent {
  text?:string
}

const EmptyStateComponent:FC<IEmptyTableComponent> = ({text}) =>{
    return(
    <div className="w-full flex flex-col mt-10 justify-center items-center">
      <EmptyTableIcon className=''/>
      <p className="text-asiatech-gray-600 text-sm font-medium text-green-900">
        {
          text? text: 
          'رکوردی وجود ندارد.'
        }
     
        </p>
    </div>
    )
}
export default EmptyStateComponent