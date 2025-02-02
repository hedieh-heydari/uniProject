import Axiose from "../../../utils/Axios/axios"

export const GetProfileApi = async (userId:string) =>{
    return Axiose.get(`${import.meta.env.VITE_BASE_URL}users/${userId}`)
}