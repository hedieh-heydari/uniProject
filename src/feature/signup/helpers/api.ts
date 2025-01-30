import Axiose from "../../../utils/Axios/axios"

export const signupApi = async (signupData:any) =>{
    return Axiose.post(`${import.meta.env.VITE_BASE_URL}auth/signup`,signupData, {
        headers:{
            Authorization: ''
        }
    })
}