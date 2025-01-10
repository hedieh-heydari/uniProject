import { useState } from "react"

export const useBoxesCategory = () =>{
    const [openUpsertModal , setOpenUpsertModal] = useState<boolean>(false)

    return{
        openUpsertModal, 
        setOpenUpsertModal
    }
}